// PI is private to the module
const { PI } = Math;

// exports are exported
exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;
