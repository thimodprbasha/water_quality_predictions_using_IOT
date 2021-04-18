import uuid
from water_predict import WqiPredict

wqi  = WqiPredict(6.7,270)
print(wqi.wqi_predict())
