function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isOn = false;
}

ElectricDevice.prototype.turnOn = function() {
  this.isOn = true;
  console.log(this.name + " is turned on.");
};

ElectricDevice.prototype.turnOff = function() {
  this.isOn = false;
  console.log(this.name + " is turned off.");
};

function Lamp(name, power, color) {
  ElectricDevice.call(this, name, power);
  this.color = color;
}

Lamp.prototype = Object.create(ElectricDevice.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.changeColor = function(newColor) {
  this.color = newColor;
  console.log(this.name + "'s color has been changed to " + newColor + ".");
};

function Computer(name, power, brand) {
  ElectricDevice.call(this, name, power);
  this.brand = brand;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.openProgram = function(programName) {
  console.log("Opening " + programName + " on " + this.brand + " computer.");
};

const lamp = new Lamp("Table Lamp", 60, "Yellow");
const computer = new Computer("Desktop Computer", 500, "Dell");

lamp.turnOn();
computer.turnOn();

console.log("Total power consumption: " + (lamp.power + computer.power) + "W");