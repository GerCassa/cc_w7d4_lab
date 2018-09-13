const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {

}

Munros.prototype.getData = function () {
  request = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  request.get(data => {
    // console.log(data);
    PubSub.publish('Munros:all-ready', data);
  })
}


module.exports = Munros;
