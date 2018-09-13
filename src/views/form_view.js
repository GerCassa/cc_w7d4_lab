const PubSub = require('../helpers/pub_sub.js');
const createAndAppend = require('../helpers/create_append.js');

const FormView = function (element) {
  this.element = element;
}

FormView.prototype.bindEvent = function () {
  PubSub.subscribe('Munros:regions', e => {
    // console.log(e.detail);
    e.detail.forEach(region => {
      const item = createAndAppend('option', region, this.element);
      item.value = region;
    })
  })

  this.element.addEventListener('change', e => {
    // console.log(e.target.value);
    PubSub.publish('FilterView:region', e.target.value);
  })
}


module.exports = FormView
