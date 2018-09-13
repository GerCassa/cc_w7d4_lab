const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munros_list_view.js');
document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const listElement = document.querySelector('#munros-list');
  const munrosListView = new MunrosListView(listElement);
  munrosListView.bindEvent();

  const munros = new Munros;
  munros.getData();
})
