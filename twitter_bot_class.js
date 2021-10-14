//import library
var twit = require('twit');

class TwitterBot {
  constructor(consumerKey, consumerSecret, accessToken, accessTokenSecret, userID) {
    this.consumerKey= consumerKey;  
    this.consumerSecret=consumerSecret;
    this.accessToken = accessToken; 
    this.accessTokenSecret=accessTokenSecret;
    this.userID=userID;
  }
  tweet(){
    //instantiate new twit object
    var credentials= {
 	 consumer_key: this.consumerKey,  
 	 consumer_secret: this.consumerSecret,
  	 access_token: this.accessToken,  
  	 access_token_secret: this.accessTokenSecret,

	};

    var Twitter = new twit(credentials);

    var userID= this.userID; // twitter user id of who to follow activity for

    var stream = Twitter.stream('statuses/filter', { follow: ( userID ) });
	console.log("Twitter bot is starting");
	stream.on('tweet', function (tweet) {
		// compare the user ID inside the Tweet object we passed in
		// to check it matches
		if (tweet.user.id == userID) {
			
			var tweet_id = tweet.id_str;
            var name = tweet.user.screen_name;
			var reply = "wow such a great tweet";
			
			// example of how to see if a tweet contains a word
			if(tweet.text.includes('apple')){
				console.log('yo dude')
			}
			
			//comment on tweet
			Twitter.post('statuses/update', {in_reply_to_status_id: tweet_id, status: reply + ' '+ ' @' + name}, function(err, data, response) { 
				if (err){
					console.log(`received error on comment: ${err}`)
				}
				console.log("commenting")
	
			})
			// retweet
			Twitter.post('statuses/retweet/:id', { id: tweet_id }, function (err, data, response) {
  				if (err){
					  console.log(`received error on retweet: ${err}`)
				  }
				  console.log("retweeting")
			})
			// Like the post
			Twitter.post('favorites/create', {id: tweet_id}, function (err, data, response) {
  				if (err){
					  console.log(`received error on favoriting post: ${err}`)
				  }
				  console.log("favoriting post")

			})

		} 
	});
  }
}
//allow other files to be able to access the TwitterBot object
module.exports = TwitterBot;


