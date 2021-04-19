import joblib
import warnings


class WqiPredict:

    def __init__(self, conduct, ph):
        self.ph = ph
        self.conduct = conduct

    def wqi_predict(self):
        with warnings.catch_warnings():
            warnings.simplefilter("ignore", category=UserWarning)
            model = joblib.load('reg_model.joblip')
            predict_wqi = model.predict([[self.ph, self.conduct]])
            return_values = {
                "wqi_index": predict_wqi,
                "wqi_range": self.find_range(predict_wqi)
            }
            return return_values

    @staticmethod
    def find_range(wqi):
        if wqi <= 50:
            return "Excellent"
        elif wqi <= 100:
            return "Normal"
        elif wqi <= 200:
            return "Poor"
        elif wqi <= 300:
            return "Very Poor"
        else:
            return "Unsuitable"

    def set_conduct(self, conduct):
        self.conduct = conduct;

    def set_ph(self, ph):
        self.ph = ph
