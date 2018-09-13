const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (element) {
  this.element = element;
}

MunrosListView.prototype.bindEvent = function () {
  PubSub.subscribe('Munros:all-ready', e => {
    // console.log(e.detail);
    this.element.innerHTML = '';
    e.detail.forEach(munro => {
      const munroView = new MunroView(this.element, munro);
      munroView.render();
    })
  })
}

module.exports = MunrosListView;
