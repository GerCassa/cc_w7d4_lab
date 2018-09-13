const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const FormView = function (element) {
  this.element = element;
}

FormView.prototype.bindEvent = function () {
  PubSub.subscribe('Munros:regions', e => {
    // console.log(e.detail);
    e.detail.forEach(region => {
      createAndAppend('option', region, this.element);
    })
  })

  this.element.addEventListener('change', e => {
    PubSub.publish('FilterView:region', e.target.value);
  })
}


module.exports = FormView
