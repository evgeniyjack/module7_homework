class ElectricDevice {
    constructor(name, power) {
      this._name = name;
      this._power = power;
      this._isOn = false;
    }
  
    get name() {
      return this._name;
    }
  
    get power() {
      return this._power;
    }
  
    get isOn() {
      return this._isOn;
    }
  
    turnOn() {
      this._isOn = true;
      console.log(`${this._name} is turned on.`);
    }
  
    turnOff() {
      this._isOn = false;
      console.log(`${this._name} is turned off.`);
    }
  }
  
  class Lamp extends ElectricDevice {
    constructor(name, power, color) {
      super(name, power);
      this._color = color;
    }
  
    get color() {
      return this._color;
    }
  
    changeColor(newColor) {
      this._color = newColor;
      console.log(`${this._name}'s color has been changed to ${newColor}.`);
    }
  }
  
  class Computer extends ElectricDevice {
    constructor(name, power, brand) {
      super(name, power);
      this._brand = brand;
    }
  
    get brand() {
      return this._brand;
    }
  
    openProgram(programName) {
      console.log(`Opening ${programName} on ${this._brand} computer.`);
    }
  }
  
  const lamp = new Lamp("Table Lamp", 60, "Yellow");
  const computer = new Computer("Desktop Computer", 500, "Dell");
  
  lamp.turnOn();
  computer.turnOn();
  
  console.log(`Total power consumption: ${lamp.power + computer.power}W`);