var Bot    = require('../index');
var AUTH   = 'auth+live+d0bcd6b9fe29b11b00dae66ad0a44635a937f938';
var USERID = '50047146aaa5cd359e00004c';
var ROOMID = '50d8d034eb35c14a2c232aa6';

var bot = new Bot(AUTH, USERID, ROOMID);

bot.on('speak', function (data) {
  // Get the data
  var name = data.name;
  var text = data.text;

  // Respond to "/hello" command
  if (text.match(/^\/hello$/)) {
    bot.speak('Hey! How are you @'+name+'?');
  }
});
