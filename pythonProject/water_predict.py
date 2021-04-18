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
            return predict_wqi

    def set_conduct(self, conduct):
        self.conduct = conduct;

    def set_ph(self, ph):
        self.ph = ph
