export default class HourClass {
    constructor(hour, type, humidity, temperature) {
        this._hour = hour;
        this._type = type;
        this._humidity = humidity;
        this._temperature = temperature;
    }

    get getWeatherInfo() {
        return {
            hour: this._hour,
            type: this._type,
            humidity: this._humidity,
            temperature: this._temperature
        };
    }
}