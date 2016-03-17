var actions = require('./actions');
var ITEMS = '../items.json';
var HELP  = '../help.txt';

function Store(){

  this.add = function(arg){
    actions.changeList(ITEMS, arg, actions.addItem);
  };

  this.delete = function(arg){
    actions.changeList(ITEMS, arg, actions.deleteItem);
  };

  this.list = function(){
    actions.showList(ITEMS);
  };

  this.help = function(){
    console.log(
      actions.readTextFile(HELP)
    );
  };
}
module.exports = new Store();