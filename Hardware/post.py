import requests
import serial
import time
import json
from flask import Flask
from flask import jsonify

class modelTemp:
    def __init__(self,nts,ph,temp):
        self.nts = nts
        self.ph= ph
        self.temp = temp

list_values = []
list_in_floats = []
ph = 0
temp = 0
nts = 0
app = Flask(__name__)


def write_read():
    global ph
    global temp
    global nts
    arduino = serial.Serial("COM5", 9600)
    # arduino.write(bytes(x, 'utf-8'))
    time.sleep(0.05)
    data = arduino.readline()
    list_datalist = str(data[0:len(data)].decode('utf-8'))
    list_values = list_datalist.split("|")

    ph = list_values[1]
    temp = list_values[2]
    nts = list_values[0]

    # print(f'Reading from  device :  {list_values}')
    data = 0
    list_in_floats.clear()
    list_values.clear()
    arduino.close()


# schedule.every(10).seconds.do(write_read())

for x in range(5):
    write_read()
    time.sleep(1)
_values_= modelTemp(nts,ph,temp)

jsonS = json.dumps(_values_.__dict__)
print(jsonS)


@app.route('/')
def hello_world():
    return _values_
