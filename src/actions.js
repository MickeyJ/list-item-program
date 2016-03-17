var fs = require('fs');

var actions = {

  readTextFile: function(FILE){
    return fs.readFileSync(FILE).toString()
  },

  showList: function(FILE){
    JSON.parse(fs.readFileSync(FILE))
      .map(function(items){
          console.log(items.id +" - "+ items.item)
      });
  },

  newItemId: function(items, n){
    return items.reduce(function(maxID, item){
      return Math.max(item.id, maxID)
    }, -1) +n
  },

  addItem: function(items, arg){
    if(arg == 'EMPTY') {
      console.log("you must select and item by name")
      return items
    } else
        items.push({
          id: actions.newItemId(items, 1),
          item: arg
        });
        console.log('added: '+ actions.newItemId(items, 0) +" - "+ arg)
        return items
  },

  deleteItem: function(items, arg){
    if(arg == 'EMPTY') {
      console.log("you must select and item by its ID");
      return items
    } else
        return items.filter(function(item){
          if(item.id == arg)
            console.log('deleted: '+ item.id +" - "+ item.item)
            return item.id != arg
        });
  },

  changeList: function(FILE, arg, callback){
    fs.readFile(FILE, function(err, data){
      if(err){
        console.error(err)
        process.exit(1)
      }
      var items = JSON.parse(data)
      fs.writeFile(FILE, JSON.stringify(callback(items, arg), null, 2),
        function(er){
          if(er){
            console.error(err)
            process.exit(1)
          }
        });
    });
  }
};
module.exports = actions