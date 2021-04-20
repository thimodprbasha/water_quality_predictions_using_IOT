from water_predict import WqiPredict
from datetime import datetime

tst = WqiPredict(579,6.9)
s=tst.wqi_predict()
print(tst.wqi_predict())

# print(datetime.now().year)
# print(datetime.now().month)
# print(datetime.now().day)

print(str(s['wqi_index'][0]))