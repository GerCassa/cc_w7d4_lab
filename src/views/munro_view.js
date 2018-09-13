const createAndAppend = require('../helpers/create_append.js');

const MunroView = function (element, munro) {
  this.element = element;
  this.munro = munro;
}

MunroView.prototype.render = function () {
  console.log(this.munro);
  createAndAppend('h3', this.munro.name, this.element);
  const list = createAndAppend('ul', '', this.element);
  const meaning = `Meaning: ${this.munro.meaning}`
  createAndAppend('li', meaning, list);
  const height = `Height: ${this.munro.height}`
  createAndAppend('li', height, list);
}

module.exports = MunroView;
