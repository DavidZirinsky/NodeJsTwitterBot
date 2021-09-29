var TwitterBot = require("./twitter_bot_class.js");

process.on('message', function(input) {
  var credentials = new TwitterBot(input.consumerKey, input.consumerSecret, input.accessToken, input.accessTokenSecret, input.userID);

  credentials.tweet();

});

