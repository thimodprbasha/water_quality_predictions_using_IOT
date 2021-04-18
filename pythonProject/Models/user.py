from json import JSONEncoder


class User(dict):
    admin = False

    def __init__(self, admin, username, password, nic_no, tele_no, email, location):
        self.admin = admin
        self.username = username
        self.password = password
        self.nic_no = nic_no
        self.tele_no = tele_no
        self.email = email
        self.location = location

    class UserEncoder(JSONEncoder):
        def default(self, o):
            if isinstance(o, User):
                return {"admin": o.admin,
                        "user_name": o.username,
                        "email": o.email,
                        "tele_no": o.tele_no,
                        "nic_no": o.nic_no,
                        "password": o.password,
                        "location": o.location
                        }
                return super().default(o)
