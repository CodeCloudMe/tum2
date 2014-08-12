//testing or deployment. testing set to true is for not actually following but simulating.
mTesting=true;

//node libs

var express = require('express');
var fs      = require('fs');
var http = require("http");
var cheerio = require("cheerio");


//openshift/local info
var connection_string = '127.0.0.1:27017/tumblr';
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}


//tumblr depends
var tumblr = require('./lib/tumblr');
tumblr.request(require('request'));

module.exports = tumblr;


//example tumblr client. not used;

var client = tumblr.createClient({
  consumer_key: 'SqFu4wiBMiyfl6v40GBfCOEDEOECxtIn3A1q5z2sirVnqpifZ8',
  consumer_secret: 'I8QizfU4HxDLujUBifDxLicvCn48S3zvn5tf2ewMuTQ8S7CLux',
  token: 'iudo13ly6v7puDysKqpc50fUiU0hJ9MYZULOsYUabN1A3gxnAz',
  token_secret: 'Q71jROnuApeAaaabzQC6yWfCwxaur3XhMDrjkJCQEur9QWd8l8'
});


//db stuff
var db;
var db1;

var MongoClient = require('mongodb').MongoClient;
 MongoClient.connect('mongodb://'+connection_string, function(err, db) {
    dbv=db;
     //console.log(dbv)
    })
var MongoClient1 = require('mongodb').MongoClient;
 MongoClient1.connect('mongodb://'+connection_string, function(err, db) {
    dbv1=db;
    })


//global functs


function queueJob(data, theCallback, waitTime, numTimes){

    whichTime=0;
    var originalWaitTime= waitTime;
    for(w=0; w<numTimes; w++){

        //which callback element in the data array we're on
        
        setTimeout(function(){

            theCallback(data[whichTime]);
       

        }, waitTime, whichTime);
        console.log('\n \nwaittime='+waitTime);
        whichTime=whichTime+1;
        waitTime=waitTime+originalWaitTime;
    }
  

}


function queueJobForBot(data, theCallback, waitTime, numTimes, whichBot){

    var whichTime=0;
    var originalWaitTime= whichBot.currentWaitTime;
    if(data.length==0){
        return false;
    }
    if(numTimes > data.length){
        numTimes = data.length;
    }

    var thatData= data;
        var  whichO=0;
        //which callback element in the data array we're on
        var sendArr={};
    for(w=0; w<numTimes; w++){
       
        sendArr['whichOne']= whichO; 

        setTimeout(function(){
            console.log(whichO);
            //console.log(whichBot.onGroup);
           theCallback(thatData, whichBot);
       

        }, whichBot.currentWaitTime, thatData);
       
        whichO= whichO+1;
       // console.log(whichO);
      console.log('\n \nwaittime='+whichBot.currentWaitTime);
        whichTime=whichTime+1;

        if(whichBot.onAction >= whichBot.defaultActionLimit){
            console.log("reached default limit for user:"+ whichBot.username);
            return false;
        }
        whichBot.onAction= whichBot.onAction+1;
        whichBot.currentWaitTime=whichBot.defaultWaitTime+whichBot.currentWaitTime;
        waitTime=waitTime+originalWaitTime;
    }
  
    return true;
}

// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}




 //start server




function getUserInfo(){

  client.userInfo(function (err, data) {
   console.log( data.user.name)


});
}

function findPopularContent(keyword){


client.tagged(keyword, function (err, data) {

	// dbv.collection("posts").ensureIndex ("post_url", {unique: true}, function(){})
            dbv.collection('posts').insert( data,function(err, records){
             console.log("Blog Posts saved");

            })
            usersArr= [];
            for(i in data){


            	getFollowers(data[i]['post_url'], keyword)
            }

   // ...
});
	//searches tumblr for the keyword
	//for all post, it finds the user who posted it

}


function saveUser(userInfoArr){


}

function getFollowers(postUrl, keyword){


        
            download(postUrl, function(data) {
            
                // console.log(data);
                var $ = cheerio.load(data);

     	
                newArr= [];
              $(".notes .note span a").each(function(i, e) {
              	console.log($(this).html())

              	newElem = {"username":$(this).html(), "keyword":keyword}
              	newArr.push(newElem)
              });

              console.log(newArr);
               dbv.collection('users').insert( newArr,function(err, records){
             			console.log("user saved saved");

            })


          })

}

function followUser(userId){


}

function reblogAndSave(repostId){


}

function likeAndSave(postId){


}








//findPopularContent('tech');


var SampleApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */

      /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
  


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {



self.app.listen(self.port, self.ipaddress, function() {
           // console.log("static at"+ __dirname+"/news");
            
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
       


        //test
   
       exUser= new followBot();
      
        exUser.findPopularContent('mike');
      // getUserInfo();

        });

 
        //  Start the app on the specific interface (and port).
     // self.app.use(express.static(__dirname+"/public"));
      
    };


    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );

        };

      
          

    self.routes['/test'] = function(req, res){


        exUser= new followBot();
        //findPopularContent('blues');
        exUser.findPopularContent('blues');
        res.send("tested");

    }



    self.routes['/api/scheduleTumblr']= function(req, res){


        var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();

rule.minute = new schedule.Range(0, 59, 20);


var k = schedule.scheduleJob(rule, function(){
    console.log('starting timer');
    
   /*
    dbv.close();
  MongoClient.connect('mongodb://'+connection_string, function(err, db) {

  
    dbv=db;
     //console.log(dbv)
    })
  setTimeout(function(){

     //do something
  }, 4000);

*/
});
  res.send('scheduled');
    };

   



   

};  
  self.initializeServer = function() {

        theApp = self;
        self.createRoutes();
        console.log(express)
        self.app = express.createServer()
        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };

 /*  Sample Application.  */
}

var zapp = new SampleApp();
zapp.initialize();
zapp.start();




var followBot= function(settings){



    if(typeof(settings)=="undefined"){

        settings=[];
    }

    try{

       //this.inst =this;
       settings['inst']= this;
       this.key = airM.addBot(settings);




    }

    catch(err){

        console.log("\n\n no air master set. Setting up one for you!!!\n \n");

        airM = new airMaster();
        settings['inst']= this;
       this.key = airM.addBot(settings);

    }
    //per minute

    this.currentKeyword= "fashion";

    this.set = settings;

    this.username=null;


    this.defaultActionLimit=60;

    this.defaultFollowLimit = 10;

    //seconds... time between actions
    this.defaultTimeSplit = 2;

    //per minute
    this.defaultRepostLimit = 10;

    //per minute
    this.defaultLikeLimit = 10;

    //per minute
    this.defaultUnFollowLimit = 1;

    this.defaultWaitTime= 3000;

    //status
    this.numberFollowed = 0;

    this.numberLiked=0;

    this.numberReposted=0;

    //how many users this user has processed this session
    this.onUser=0;
    this.onAction=0;

    //current batch size from pool

    this.batchSize=0;

    //current wait time for posts/actions


    this.currentWaitTime=0;


    //list of usernames we've done action to.
    this.usersDoneThisSession =[];

    //to be filled in with tumblr
    this.client=null;

     this.tumblrAuth={
              consumer_key: 'SqFu4wiBMiyfl6v40GBfCOEDEOECxtIn3A1q5z2sirVnqpifZ8',
              consumer_secret: 'I8QizfU4HxDLujUBifDxLicvCn48S3zvn5tf2ewMuTQ8S7CLux',
              token: 'iudo13ly6v7puDysKqpc50fUiU0hJ9MYZULOsYUabN1A3gxnAz',
              token_secret: 'Q71jROnuApeAaaabzQC6yWfCwxaur3XhMDrjkJCQEur9QWd8l8'
        };

    //validation
    if(typeof(settings['userCred']) !="undefined"){

        this.userCred= settings['userCred'];

    }
    else{

        this.userCred=[];

        this.userCred['tumblr'] = tumblr.createClient(this.tumblrAuth);
    }




    //for tumblr to start
    this.client = this.userCred['tumblr'];

    //this.tumblrUser =  tumblr.User(this.tumblrAuth);


    console.log('got user');

    this.getListOfUsers= function(){

        //based on user's settings, query the category index and set this user up


    }


    this.followUsers= function(usernames, whichBot){

        //follow this user
        console.log(usernames);

        var randNum = Math.floor((Math.random() * usernames.length));

        for(i in usernames){


            if(whichBot.isAlreadyDone(usernames[i]['username'], whichBot)){
                console.log("already did something to user " +usernames[i]['username']+" this session... continuing....");
                continue;
            }
            else{
                whichBot.usersDoneThisSession.push(usernames[i]['username']);
                console.log(whichBot.usersDoneThisSession);
                 whichBot.followUser(usernames[i], whichBot);
            
            }

           
        }
        
        console.log('got em');

    }

    this.followUser= function(tUser, whichBot){

        var randNum = Math.floor((Math.random() * 5000)+1);
        console.log(randNum);
        var userToFollow = tUser.username;
       var tiUser=tUser;
        setTimeout(function(){

                        if(mTesting==false){
                   
                        whichBot.client.follow(tiUser['username']+".tumblr.com", function(){console.log("yea")});
                         console.log("\n\n the blog name:"+tiUser['username']);

                        console.log("followed!");
                       /* data.user.blogs.forEach(function (blog) {
                           
                        });*/
                   
                     console.log('following user'+tiUser['username']);
                        }

                        else{

                            console.log("simulated follow of "+tiUser['username']+".tumblr.com");
                        }


                 

        }, randNum, tiUser);
    }



    this.likeUserContent= function(blogId, reblogId, whichBot){

        var randNum = Math.floor((Math.random() * 5000)+1);
        console.log(randNum);
       
       var tiId=reblogId;
       blogId1=blogId;
        setTimeout(function(){

                        if(mTesting==false){
                   
                        whichBot.client.like(blogId1, tiId, function(data, err){

                          console.log("data comin")
                          console.log(err);
                          console.log("yea")});
                        console.log("\n\n  blog id:"+blogId1);
                         console.log("\n\n the reblog id:"+tiId);

                        console.log("liked!");
                       /* data.user.blogs.forEach(function (blog) {
                           
                        });*/
                   
                     console.log('liked post: '+tiId);
                        }

                        else{

                            console.log("simulated like of of "+tiId);
                        }


                 

        }, randNum, tiId, blogId1);
    }

    this.repostUserContent= function(blogId, reblogId, whichBot){

        var randNum = Math.floor((Math.random() * 5000)+1);
        console.log(randNum);
       
       var tiId=reblogId;
      var blogId1=blogId;
        setTimeout(function(){

                        if(mTesting==false){
                   
                        whichBot.client.reblog(blogId1, tiId, function(){console.log("yea")});
                          console.log("\n\n  blog id:"+blogId1);
                         console.log("\n\n the reblog id:"+tiId);

                        console.log("liked!");
                       /* data.user.blogs.forEach(function (blog) {
                           
                        });*/
                   
                     console.log('reposted: '+tiId);
                        }

                        else{

                            console.log("simulated repost of of "+tiId);
                        }


                 

        }, randNum, tiId, blogId1);
    }



    this.reblogPost= function(postId){

        //reblog this post
    }

    this.likePost= function(postId){


    }

    this.unfollowUser= function(username){


    }



    //support functions


        this.findPopularContent=function(keyword){



            this.currentKeyword = keyword;
            console.log(this.currentKeyword);
            this.client.tagged(keyword, this.prepareFollowers);
        //searches tumblr for the keyword
        //for all post, it finds the user who posted it

        }

        this.prepareFollowers= function(err, data) {


        // dbv.collection("posts").ensureIndex ("post_url", {unique: true}, function(){})
        /*
                dbv.collection('posts').insert( data,function(err, records){
                 console.log("Blog Posts saved");

                })

            */  
               var usersArr= [];

                var theBot= airM.getCurrentBot();
                theBot.batchSize = data.length;
                var keyword = theBot.currentKeyword;
                for(i in data){

                    

                  console.log(data[i]['reblog_key']);
                  data[i]['name']= data[i]['post_url'].replace('http://', '').replace('https://','');
                  data[i]['id']= data[i]['id'];
                  console.log(data[i]['name']);

                  //takes id
                  theBot.likeUserContent(data[i]['id'], data[i]['reblog_key'], theBot);

                  //takes blog name
                  theBot.repostUserContent(data[i]['name'], data[i]['reblog_key'], theBot);

                  theBot.getFollowers(data[i]['post_url'], keyword, theBot.gotFollowersCB, theBot)
                }

       // ...
            }



        this.isAlreadyDone=function(username11, whichBot){


            console.log("length is \n \n "+whichBot.usersDoneThisSession.length);
            for(t=0; t<whichBot.usersDoneThisSession.length; t++){

                if(whichBot.usersDoneThisSession[t]==username11){
                    return true;
                }
            
            
        }

        return false;

    }
     


        this.getFollowers= function(postUrl, keyword, gotFollowersCB, whichBot){


            
                this.download(postUrl, function(data) {
                
                    // console.log(data);
                    var $ = cheerio.load(data);

            
                    newArr= [];
                      $(".notes .note span a").each(function(i, e) {
                        //console.log($(this).html())

                        newElem = {"username":$(this).html(), "keyword":whichBot.currentKeyword}
                        newArr.push(newElem)
                      });

                      if(newArr==[]){

                        console.log('hey... no followers for this user... returning');
                            return false;
                      }


                     // console.log("made it?");
                      whichBot.gotFollowersCB(newArr, whichBot);

                      //console.log(newArr);
                      /*
                       dbv.collection('users').insert( newArr,function(err, records){
                                console.log("user saved saved");

                        })
                        */


                    })

        }

        this.gotFollowersCB= function(followersArr, whichBot){

           console.log(followersArr);

          var theData= followersArr;
          var theCallback = whichBot.followUsers;
          var waitTime=3000;
           var numTimes=whichBot.defaultFollowLimit;

           if(theData==[]){

            console.log('no followers for this user... returning');
            return false;
           }
           queueJobForBot(theData, theCallback, waitTime, numTimes, whichBot);
           

        }




        this.download=function(url, callback) {
              http.get(url, function(res) {
                var data = "";
                res.on('data', function (chunk) {
                  data += chunk;
                });
                res.on("end", function() {
                  callback(data);
                });
              }).on("error", function() {
                callback(null);
              });
        }





}




 var airMaster = function(){

    this.botsDeployed=0;

    this.allBots =[];


    this.init = function(){

        this.botsDeployed=0;
        this.allBots = [];

    }
     this.reset = function(){

        this.botsDeployed=0;
        this.allBots = [];
        
    }

    this.getCurrentBot = function(){

        var index= this.botsDeployed-1;
        return this.allBots[index]['obj'];
    }
    this.addBot = function(botInfo){
        if(typeof botInfo =="undefined"){
            botInfo=[];
        }
        botInfo['id']= this.genId(10);
        botInfo['obj']= botInfo['inst'];
        this.botsDeployed= this.botsDeployed+1;
        this.allBots.push(botInfo);
        return(botInfo['id']);

    }

    this.subBot = function(){

        this.allBots.pop();
         this.botsDeployed- this.botsDeployed-1;

    }

    this.genId = function(limit){


            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for( var i=0; i < limit; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;

            }


    }

