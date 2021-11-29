// The module.exports can be assigned a new value.
// Assigning to exports will not modify the module, must use module.exports
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
