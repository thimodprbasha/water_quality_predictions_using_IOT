from datetime import datetime
from Models.values import Values
from json import JSONEncoder


class WaterQuality:
    __now_current = datetime.now()
    __location = "LK"

    # insert location when dev is completed
    def __init__(self, wqi_index, predicted_water_type, temp, conduct, turbidity, ph):
        self.wqi_index = wqi_index
        self.predicted_water_type = predicted_water_type
        # self.current_time = self.__now_current.strftime("%H:%M:%S")
        self.value_params = Values(temp, conduct, turbidity, ph)

    def get_location(self):
        return self.__location

    def get_current_time(self):
        return self.__now_current

    def get_value_params(self):
        return self.value_params

    def get_predicted_water_type(self):
        return self.predicted_water_type

    def get_predicted_wqi_index(self):
        return self.wqi_index

    class WaterQualityEncoder(JSONEncoder):
        def default(self, o):
            if isinstance(o, WaterQuality):
                return {
                    "wqi_index": o.wqi_index,
                    "predicted_water_type": o.predicted_water_type,
                    "value_params": {
                        "temp": o.value_params.get_temp(),
                        "conduct": o.value_params.get_conduct(),
                        "turbidity": o.value_params.get_turbidity(),
                        "ph": o.value_params.get_ph()},
                    "location": o.get_location()}
            return super().default(o)
