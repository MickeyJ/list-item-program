var store = require('./store');
var c = require('./commands');

switch (c.argv2.toUpperCase()) {
  case c.ADD:
    store.add(c.argv3);
    break;
  case c.DELETE:
    store.delete(c.argv3);
    break;
  case c.LIST:
    store.list();
    break;
  case c.HELP:
  default:
    store.help();
    break;
}
