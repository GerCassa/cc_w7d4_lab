const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function (element) {
  this.element = element;
}

MunrosListView.prototype.bindEvent = function () {
  PubSub.subscribe('Munros:all-ready', e => {
    // console.log(e.detail);
    e.detal.forEach(munro => {
      const munroView = new MunroView(e.detail);
      munroView.render();
    })
  })
}

module.exports = MunrosListView;
