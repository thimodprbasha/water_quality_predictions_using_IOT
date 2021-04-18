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




def check_wqi_level(wqi):
    val = lambda wqi: "Excellent water" if (wqi <= 70) else ("Good water" if (wqi <= 125) else (
        "Poor water" if (wqi >= 225) else ("Very poor water" if (wqi >= 325) else "Water unsuitable for drinking")))
    return val


@app.route('/prediction')
def get_prediction():
    wtest = WaterQuality(101, "Excellent water", 32, 100, 23, 6.9)
    jsonified = json.dumps(wtest, cls=wtest.WaterQualityEncoder, indent=4)
    print(jsonified)
    # with open('json.txt', 'w') as outfile:
    #     json.dump(jsonified.__dict__, outfile)
    return jsonified


# test to insert data to the data base
@app.route("/test_sensors")
def test_sensors():
    ph_sensor = True
    conductivity_sensor = False
    turbidity_sensor = True
    temperature_sensor = True

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
            message = 'There already is a user by that name'
            return make_response(jsonify({"message": message}), 401)
        if email_found:
            message = 'This email already exists in database'
            return make_response(jsonify({"message": message}), 401)
        if nic_no_found:
            message = 'There NIC already exists in database'
            return make_response(jsonify({"message": message}), 401)
        else:
            user_id = uuid.uuid1()
            hashed_pass = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            user_model = {"timestamp": str(datetime.now()),
                          "user_id": user_id,
                          "admin": admin,
                          "user_name": user_name,
                          "email": email,
                          "tele_no": tele_no,
                          "nic_no": nic_no,
                          "password": hashed_pass,
                          "location": location
                          }

            user_collection.insert_one(user_model)

        return "ok", 200

    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)


def check_nic(nic_no):
    if len(nic_no) == 10:
        return True
    return False


@app.route('/login', methods=['POST'])
def login():
    if request.is_json:
        _request = request.get_json()
        email = str(_request['email'])
        # user_name = str(_request['user_name'])
        password = str(_request['password'])

        # user_found = user_collection.find_one({"user_name": user_name})
        email_found = user_collection.find_one({"email": email})

        if email_found:
            email_val = email_found['email']
            password_check = email_found['password']

            if bcrypt.checkpw(password.encode('utf-8'), password_check):
                message = 'Authorized'
                return make_response(jsonify({"message": message}), 202)

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
