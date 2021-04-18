class Values:

    def __init__(self, temp, conduct, turbidity, ph):
        self.__temp = temp
        self.__conduct = conduct
        self.__turbidity = turbidity
        self.__ph = ph

    def get_temp(self):
        return self.__temp

    def get_conduct(self):
        return self.__conduct

    def get_turbidity(self):
        return self.__turbidity

    def get_ph(self):
        return self.__ph

    def set_temp(self, temp):
        self.__temp = temp

    def set_conduct(self, conduct):
        self.__conduct = conduct

    def set_turbidity(self, turbidity):
        self.__turbidity = turbidity

    def set_ph(self, ph):
        self.__ph = ph

