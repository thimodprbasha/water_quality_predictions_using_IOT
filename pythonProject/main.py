import re

from flask import Flask, json, request, jsonify, make_response
from datetime import datetime
from flask_pymongo import pymongo
import bcrypt
import uuid
from Models.waterparams import WaterQuality

from Models.user import User

CONNECTION_STRING = "mongodb+srv://giVUV61IjHNcTJ8G:giVUV61IjHNcTJ8G@cluster0.gx7el.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app = Flask(__name__)

client = pymongo.MongoClient(CONNECTION_STRING, serverSelectionTimeoutMS=2000)
db = client.get_database('JalaRead')
user_collection = pymongo.collection.Collection(db, 'usernames')
test_collections = pymongo.collection.Collection(db, "water_test")


@app.route('/prediction')
def get_prediction():
    wtest = WaterQuality(101, "Excellent water", 32, 100, 23, 6.9)
    jsonified = json.dumps(wtest, cls=wtest.WaterQualityEncoder, indent=4)
    print(jsonified)

    return jsonified


# test to insert data to the data base
@app.route("/test_sensors")
def test_sensors():
    user_collection.insert_one({"name": "John"})
    return "Connected to the data base!"


@app.route('/signup', methods=['POST'])
def signup():
    if request.is_json:
        _request_ = request.get_json()
        admin = bool(_request_['admin'])
        email = str(_request_['email'])
        user_name = str(_request_['user_name'])
        password = str(_request_['password'])
        nic_no = str(_request_['nic_no'])
        tele_no = int(_request_['tele_no'])
        location = str(_request_['location'])

        user_found = user_collection.find_one({"user_name": user_name})
        email_found = user_collection.find_one({"email": email})
        nic_no_found = user_collection.find_one({"nic_no": nic_no})

        if user_found:
            print(user_found)
            message = 'There already is a user by that name'
            return make_response(jsonify({"message": message}), 401)
        elif email_verify(email):
            message = 'Email Already Taken'
            return make_response(jsonify({"message": message}), 401)
        elif not (len(tele_no) == 10 and tele_no.isdigit()):
            message = 'Invalid Number'
            return make_response(jsonify({"message": message}), 401)
        elif nic_verify(nic_no):
            message = 'Invalid NIC'
            return make_response(jsonify({"message": message}), 401)
        elif email_found:
            message = 'This email already exists in database'
            return make_response(jsonify({"message": message}), 401)
        elif nic_no_found:
            message = 'There NIC already exists in database'
            return make_response(jsonify({"message": message}), 401)
        else:
            user_id = uuid.uuid1()
            hashed_pass = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            user_model = {
                "timestamp": str(datetime.now()),
                "user_id": user_id,
                "admin": admin,
                "user_name": user_name,
                "email": email,
                "tele_no": tele_no,
                "nic_no": nic_no,
                "password": hashed_pass,
                "location": location
            }
            message = 'ok'
            body = {
                "user_id": user_id,
                "admin": admin,
                "user_name": user_name
            }

            user_collection.insert_one(user_model)

            return make_response(jsonify({"message": message, "user_details": body}), 202)

    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


def check_nic(nic_no):
    if len(nic_no) == 10:
        return True
    return False


@app.route('/tester', methods=['POST'])
def test_web():
    json_request = request.get_json()

    user_name = str(json_request['nic_no'])

    if nic_verify(user_name):
        return "pk"

    return "false"


@app.route('/change_user_name', methods=['POST'])
def change_user_name():
    if request.is_json:
        json_request = request.get_json()
        new_user_name = str(json_request['new_user_name'])
        old_user_name = str(json_request["old_user_name"])

        # user_id = str(json_request["user_id"])
        # user_id_found = user_collection.find_one({"user_id": user_id})
        user_found = user_collection.find_one({"user_name": old_user_name})

        if user_found:
            # if user_name == user_found['user_name']:
            user_collection.update_one({"user_name": old_user_name}, {"$set": {"user_name": new_user_name}},
                                       upsert=True)
            return make_response(jsonify({"message": "ok"}), 202)
        else:
            return make_response(jsonify({"message": " ok"}))

    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


def email_verify(email):
    match = re.match('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$', email)
    if match:
        return True
    return False


def nic_verify(nic):
    verify_nic = str(nic)
    print(len(verify_nic))
    if len(verify_nic) == 10:
        print("went")
        if (nic[:9].isdigit() and (nic[-1] == "V" or nic[-1] == "v")) or nic.isdigit():
            return True
        else:
            return False
    return False


@app.route('/change_user_email', methods=['POST'])
def change_user_email():
    if request.is_json:
        json_request = request.get_json()
        # user_id = str(json_request["user_id"])
        new_email = str(json_request['email'])
        user_name = str(json_request['user_name'])
        user_found = user_collection.find_one({"user_name": user_name})
        # user_id_found = user_collection.find_one({"user_id": user_id}) uncomment this after this when user_id

        if user_found:
            if not email_verify(new_email):
                new_email_found = user_collection.find_one({"email": new_email})
                if not new_email_found:
                    user_collection.update_one({"user_name": user_name}, {"$set": {"email": new_email}}, upsert=True)
                    return make_response(jsonify({"message": "ok"}), 202)
                else:
                    message = 'Email Already Taken'
                    return make_response(jsonify({"message": message}), 401)
            else:
                message = 'Invalid Email'
                return make_response(jsonify({"message": message}), 401)

        else:
            message = 'User not found'
            return make_response(jsonify({"message": message}), 401)
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


@app.route('/change_user_location', methods=['POST'])
def change_user_location():
    if request.is_json:
        json_request = request.get_json()
        user_id = str(json_request["user_id"])
        user_name = str(json_request['user_name'])
        new_location = str(json_request['location'])
        user_found = user_collection.find_one({"user_name": user_name})
        user_id_found = user_collection.find_one({"user_id": user_id})

        if user_found and user_id_found:
            user_collection.update_one({"user_name": user_name}, {"$set": {"location": new_location}}, upsert=True)
            return make_response(jsonify({"message": "ok"}), 202)
        else:
            message = 'User not found'
            return make_response(jsonify({"message": message}), 401)

    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


@app.route('/change_user_nic', methods=['POST'])
def change_user_nic():
    if request.is_json:
        json_request = request.get_json()
        user_id = str(json_request["user_id"])
        new_nic = str(json_request['nic_no'])
        user_name = str(json_request['user_name'])
        user_found = user_collection.find_one({"user_name": user_name})
        user_id_found = user_collection.find_one({"user_id": user_id})

        if user_found and user_id_found:
            new_email_found = user_collection.find_one({"nic_no": new_nic})
            if user_found["nic_no"] == new_nic:

                message = 'New Email cant be identical to new one'
                return make_response(jsonify({"message": message}), 401)
            elif nic_verify(new_nic):
                message = 'Invalid NIC'
                return make_response(jsonify({"message": message}), 401)

            elif not new_email_found:
                user_collection.update_one({"user_name": user_name}, {"$set": {"nic_no": new_nic}}, upsert=True)
                return make_response(jsonify({"message": "ok"}), 202)

            else:
                message = 'NIC Already Taken'
                return make_response(jsonify({"message": message}), 401)

        else:
            message = 'User not found'
            return make_response(jsonify({"message": message}), 401)
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


@app.route('/change_user_number', methods=['POST'])
def change_user_number():
    if request.is_json:
        json_request = request.get_json()
        # user_id = str(json_request["user_id"])
        tele_no = str(json_request['tele_no'])
        user_name = str(json_request['user_name'])
        user_found = user_collection.find_one({"user_name": user_name})
        # user_id_found = user_collection.find_one({"user_id": user_id}) uncomment this after this when user_id

        if user_found:
            if len(tele_no) == 10 and tele_no.isdigit():
                user_collection.update_one({"user_name": user_name}, {"$set": {"tele_no": tele_no}}, upsert=True)
                return make_response(jsonify({"message": "ok"}), 202)
            else:
                message = 'Invalid Number'
                return make_response(jsonify({"message": message}), 401)
        else:
            message = 'User not found'
            return make_response(jsonify({"message": message}), 401)
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


@app.route('/change_user_pass', methods=['POST'])
def change_user_pass():
    if request.is_json:
        json_request = request.get_json()
        user_name = str(json_request['user_name'])
        # user_id = str(json_request["user_id"])
        password = str(json_request['password'])
        user_found = user_collection.find_one({"user_name": user_name})
        # user_id_found = user_collection.find_one({"user_id": user_id}) uncomment this after this when user_id
        # created =====+++======+++++=====+++++=====++++=====++++='''''''
        user_id_found = True
        if user_found and user_id_found:
            password_check = user_found['password']
            if not bcrypt.checkpw(password.encode('utf-8'), password_check):
                hashed_pass = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
                user_collection.update_one({"user_name": user_found["user_name"]}, {"$set": {"password": hashed_pass}},
                                           upsert=True)
                return make_response(jsonify({"message": "ok"}), 202)
            else:
                message = 'Password cant be Previous '
                return make_response(jsonify({"message": message}), 401)
        else:
            message = 'User not found'
            return make_response(jsonify({"message": message}), 401)

    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


@app.route('/get_user_details', methods=['POST'])
def get_user_account():
    if request.is_json:
        json_request = request.get_json()

        user_name = str(json_request['user_name'])
        user_found = user_collection.find_one({"user_name": user_name})
        if user_found:
            json_req_object = {
                # "user_id": user_found["user_id"],
                "admin": user_found["admin"],
                "user_name": user_found["user_name"],
                "email": user_found["email"],
                "tele_no": user_found["tele_no"],
                "nic_no": user_found["nic_no"],
                "location": user_found["location"]
            }
            return make_response(jsonify(json_req_object))
        else:
            message = 'User not found'
            return make_response(jsonify({"message": message}), 401)

    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


@app.route('/login', methods=['POST'])
def login():
    if request.is_json:
        _request = request.get_json()
        email = str(_request['email'])
        password = str(_request['password'])
        email_found = user_collection.find_one({"email": email})

        if email_found:
            password_check = email_found['password']

            if bcrypt.checkpw(password.encode('utf-8'), password_check):
                message = 'Authorized'
                body = {
                    "user_id": email_found["user_id"],
                    "admin": email_found["admin"],
                    "user_name": email_found["user_name"]
                }
                return make_response(jsonify({"message": message, "user_details": body}), 202)

            else:
                message = 'Unauthorized'
                return make_response(jsonify({"message": message}), 401)
        else:
            message = 'Unauthorized'
            return make_response(jsonify({"message": message}), 401)
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


if __name__ == '__main__':
    print("[SERVER] - Testing Connection with MongoDB Cloud sever ........................")
    try:
        print(client.server_info())
        print("[SEVER] - Testing with Cloud sever completed.")
    except pymongo.errors.ServerSelectionTimeoutError as err:
        print("[SEVER] - Test Failed.")
        print(err)

    app.run(debug=True)
