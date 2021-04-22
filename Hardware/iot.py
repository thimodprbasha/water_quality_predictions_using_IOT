


class WaterIot:
    fetched_values = []

    def __init__(self):
        pass



    def get_data(self):
        if not self.fetched_values:
            raise Exception("Fetched values is empty ! Test again")
        if self.fetched_values[1] <= 50:
            conduct_val = round(random.uniform(5000, 5200), 1)
            self.fetched_values.append(conduct_val)
        elif self.fetched_values[1] <= 120:
            conduct_val = round(random.uniform(4000, 4200), 1)
            self.fetched_values.append(conduct_val)
        elif self.fetched_values[1] <= 200:
            conduct_val = round(random.uniform(900, 2200), 1)
            self.fetched_values.append(conduct_val)
        elif 400 <= self.fetched_values[1]:
            conduct_val = round(random.uniform(100, 500), 1)
            self.fetched_values.append(conduct_val)

        return self.fetched_values

    def check_sensor_status(self):
        b_time = 5
        b_range = 3
        self.run_water_test(b_time, b_range)

        turbidity_value = self.fetched_values[1]
        temp_value = self.fetched_values[0]
        ph_value = self.fetched_values[2]

        ph_status = True
        temp_status = True
        turbidity_status = True

        if 700 >= turbidity_value >= 600:
            turbidity_status = False
        if temp_value == -127.00:
            temp_status = False
        if 21.0 >= ph_value >= 14.0:
            ph_status = False

        sensor_status = {
            "temp": temp_status,
            "conduct": True,
            "turbidity": turbidity_status,
            "ph": ph_status
        }
        return sensor_status

    def run_water_test(self, time_sleep, time_range):
        self.sleep(time_sleep)
        self.__read_values(time_range)

    @staticmethod
    def sleep(time_sleep):
        try:
            num = float(time_sleep)
        except ValueError:
            print('Invalid Value.\n')

        time.sleep(time_sleep)
