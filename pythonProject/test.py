from water_predict import WqiPredict
from datetime import datetime

tst = WqiPredict(6,6.9)
s=tst.wqi_predict()
print(tst.wqi_predict())

# print(datetime.now().year)
# print(datetime.now().month)
# print(datetime.now().day)

print(s['wqi_index'][0])
print("k")