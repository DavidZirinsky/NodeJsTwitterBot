
// get these values from the twitter developer console
// https://developer.twitter.com/en/apply-for-access
var credentials= {
  consumerKey: 'Your Secret Goes Here',  
  consumerSecret: 'Your Secret Goes Here',
  accessToken: 'Your Secret Goes Here',  
  accessTokenSecret: 'Your Secret Goes Here',
};
var credentials2= {
  consumerKey: 'Your Secret Goes Here',  
  consumerSecret: 'Your Secret Goes Here',
  accessToken: 'Your Secret Goes Here',  
  accessTokenSecret: 'Your Secret Goes Here',
};

var credArray= [];
credArray[0]= credentials;
credArray[1]= credentials2;
userID = '1443343230268026880' // twitter user id of who to bless with your bot activity

for(var i=0; i<credArray.length; i++){
	var cp = require('child_process');
	var child = cp.fork('./child');
  credArray[i].userID = userID
	child.send(credArray[i]);
}

