//testing or deployment. testing set to true is for not actually following but simulating.
mTesting=false;

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


lastStart= 1000;
startToAdd = 1000;
lastStartNum =0;
depTimeout = 3000;
        oriTimeout = 3000;
function startIt(){

  
   

      if(typeof airM=="undefined"){
         airM = new airMaster();
        allTheBots= airM.init(theBots);
        botsArr= []; 
        console.log("\n\n making air master\n");
      }
        
        
        for (i=0; i<(theBots.length-1); i++){
          //initiate the bots into the queue
          var z= parseInt(lastStartNum);
         setTimeout(function(){
         
          //console.log('doing bot'+z+ theBots[z]['username'])

          initBots(z)

         },  depTimeout, z);

          depTimeout= oriTimeout+depTimeout;
          console.log(depTimeout)
         break;
        }

      if(lastStartNum < theBots.length){
        lastStartNum=lastStartNum+1;
        startIt();
        return;
      }

  
     }

   
    
       
    



function initBots(z){


          


          botsArr[z]= new followBot(allTheBots[z]);
       var   theKeyword = botsArr[z].getKeyword(botsArr[z]);
          console.log(theKeyword)
          
          var currentBot= botsArr[z];




            
            console.log("\n \n \n finished wait... deploying bot.. \n \n\n ");
            currentBot.findPopularContent(theKeyword);
          //return true;
          

}
theBots = [
                  {"username":
                      "bumblrtum", 
                    "category":
                        "misc",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'SqFu4wiBMiyfl6v40GBfCOEDEOECxtIn3A1q5z2sirVnqpifZ8',
                          
                          consumer_secret: 'I8QizfU4HxDLujUBifDxLicvCn48S3zvn5tf2ewMuTQ8S7CLux',
                         
                          token: 'iudo13ly6v7puDysKqpc50fUiU0hJ9MYZULOsYUabN1A3gxnAz',
                          
                          token_secret: 'Q71jROnuApeAaaabzQC6yWfCwxaur3XhMDrjkJCQEur9QWd8l8'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot




 {"username":
                      "rebbyham", 
                    "category":
                        "celebrity",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'wRVo4OEtYPVv510wh4ga58N9cYDYQ08uhGtLBfqQaXSjdWVflU',
                          
                          consumer_secret: 'Db8rn22y26jCWDwC4q9ZJW9eMYEjKLTBzr564GFfn8HL2INcMm',
                         
                          token: 'VP9BZZuNtI5JaygNydRtOhFAkVc3PHgltxfTXVrS4oNfbwmwb',
                          
                          token_secret: 'HrOKOHEGkq10hY8c0W7P2awx8scnAD8XnMdMu1X5LwPmk1t9B4'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot





 {"username":
                      "debranebraniner", 
                    "category":
                        "misc",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: '5LB2NDlPnBHDUD8on7QwTX8C90X2rW3PIC927XK9Qer5Pq3tj8',
                          
                          consumer_secret: 'yzOgdRk1af9aestbPC6Ckou7PCohgKAr21PBcVkNdjEKlaZpis',
                         
                          token: 'ovqUuw3d7dIdeTdsjJmSun7H4MtqIZjztSVnshRnWq25m2T2vu',
                          
                          token_secret: 'BtMyleAt4HnTb3YStaAfuKV78aMsynkgAuuPytCk5meVVaLrZq'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot




 {"username":
                      "emillywheele", 
                    "category":
                        "food",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'DcB0zFhUzkhGX57ICDvlg4CyIUbtkHoNhrCK0ydJ6gQks1ZQ0B',
                          
                          consumer_secret: 'MDfc7tjo0WdPiSdrF5cSaNBZWkmsEy9CQcr42vhfac54cbQiCv',
                         
                          token: 'hqfXl88pSP3SKMyxeNB8AckZlv4rE4VZqOibUWGLhElqc8Uy4N',
                          
                          token_secret: 'oBK6wajSKWTSa56Ooo7u5OX9IDoP7YfvRxuyBVcZ1cWQdYIV7M'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot








 {"username":
                      "patricialanf", 
                    "category":
                        "fashion",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'WcymgSSuSp9bdVCyS8fegqiEIqwc0M6pW3f7mO83JncfIbeDDC',
                          
                          consumer_secret: 'qd8pwaZ7LoCN2PtW2dT2jArG5wMxssGcJnvkgmmUykAXwaRr0j',
                         
                          token: 'pxRHNVilQQYk8xGRJhyqqTxnaP0FMzIyyqzJLidKiYgMpeQcH6',
                          
                          token_secret: 'crTk2NyUNIndeGpcKUd932OE8nzrqtTaTQhCbceGK2tlTSQQ2Y'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot










 {"username":
                      "marycobby", 
                    "category":
                        "misc",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'hIBAiCdrn5dGuOFEKxIfiGVq2Zcotq51qcZ5qCTwZmcnlrgBCO',
                          
                          consumer_secret: 'jC6eyylbHAWql6RvPBZiQeSYp8UkX7deNQiTsHmIPyL29cLlpt',
                         
                          token: 'Jm1ZlkQgGn9r5oh9mEfXZoE102mU2ENar0O1uK31xrcEXf84sn',
                          
                          token_secret: 'qoyvkiNzhuvA2peyeB1ktcdIgMuzOHIIXMbSuWH1IRfXszhyD9'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot










 {"username":
                      "jodyroad", 
                    "category":
                        "misc",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'fiaDo909SSVfXfhquzCXgthIkpIKi8C0ydv6QMZ3NAAPj4pl1H',
                          
                          consumer_secret: 'xHmq6BQWUZqIy5QqRIt9alyzociUdHrFxwFlwGL0CsmQZjB2rQ',
                         
                          token: 'UQrhr2Fuq1kaAWH2tz8kSETBALnUMTgSFkzIKeHRvWk70e0MTl',
                          
                          token_secret: 'LbAmSWRa6l7Y08ZStOZKLhZHTEiekXd611lBvfZhRyJTc1OEVR'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot







 {"username":
                      "darlenelamp", 
                    "category":
                        "celebrity",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: '8jtLrsuwo9pOPTjz2Vs7FdLYEKQXd3BsylHsEyNT4DY3R8mJVI',
                          
                          consumer_secret: 'Oga7A8LFcQOXtOm52aFcPX1Ak4P6amd6WYRLwRqcp1WLp3lLMG',
                         
                          token: 'nO1QUT0ZtDzAc8noykiTxyRuXM8zYquX5BDGa7J2R7yEvFvBvY',
                          
                          token_secret: 'LbAmSWRa6l7Y08ZStOZKLhZHTEiekXd611lBvfZhRyJTc1OEVR'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot





 {"username":
                      "perkyperk03", 
                    "category":
                        "fashion",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'EKo5d87b8qV83JQamhM3VVx2D0LYBpQH9SzLQ3t4kInh4xEim6',
                          
                          consumer_secret: 'Q0KUrEq4DGcD3XKnaKWz5u9oOR0F7wwoh8oB96CSYKNgmduTBz',
                         
                          token: 'DYBhwgpi0B3ph6zkpFgd5OryQhtjJFDELkJ8BULj5vgYma8Lvq',
                          
                          token_secret: 'DPS7ZFYKn3mFEnn3P0URMHZZwgdd3T2K273ZTIyyw9QByG1gBs'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                },

                  //end bot
                

                //comma, next bot




 {"username":
                      "krose612", 
                    "category":
                        "misc",
                  "settings":

                    //for tumblr
                    {"userCred":
                      
                      {
                        "tumblr":
                        {
                          consumer_key: 'HGczadkARa67Y9A9pcTkWO6FkJsmiWUHJXQytECQQc1LsBK0rr',
                          
                          consumer_secret: 's0ToUzTAU3t7lV0Oq5k7AONVjvgB6XSbRKFLQGdVwOCYCu5ke0',
                         
                          token: 'rhj643lv47CGnSrm3bZJa5O2sMHqpY98V1uNP6IM8d0cigiJsR',
                          
                          token_secret: 'cGshM3viDhcYX9Px0IQwwzqE6w7FJ872AqS7Ch3yT4tyviLjb7'

                      },

                        "twitter":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                      "reddit":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      },
                    "feedly":

                      {
                         consumer_key: null,
                        
                        consumer_secret: null,
                       
                        token: null,
                        
                        token_secret: null

                      }

                      
                  }

                  //end social
                }
                  ////end credentials
                

                

                  //end settings
                }

                  //end bot
                

                //comma, next bot







                ]
var allBotsArr=[];
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
            //console.log(whichO);
            //console.log(whichBot.onGroup);
           theCallback(thatData, whichBot);
       

        }, whichBot.currentWaitTime, thatData);
       
        whichO= whichO+1;
       // console.log(whichO);
      //console.log('\n \nwaittime='+whichBot.currentWaitTime);
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
                try{
                var $ = cheerio.load(data);

     	
                newArr= [];


              $(".notes .note span a").each(function(i, e) {
              	console.log($(this).html())

              	newElem = {"username":$(this).html(), "keyword":keyword}
              	newArr.push(newElem)
              });

              //console.log(newArr);
               dbv.collection('users').insert( newArr,function(err, records){
             			console.log("user saved saved");

            })


          }

        


        catch(err){

          console.log("cheerio coughed up... returning");
          return false;
        }
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

        //console.log('returning for openshift push... remove this line... currently 451 in index.js');
        //return;
      
   //startIt();
       

   //old before scale below
      // exUser= new followBot();
      
        //exUser.findPopularContent('mike');
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
var every =10;//minutes
rule.minute = new schedule.Range(0, 59,every );


var k = schedule.scheduleJob(rule, function(){
    console.log('starting tumblr bots every '+ every+ " mins");
    startIt();

    
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

  var blah = this;
  console.log(blah);

    if(typeof(settings)=="undefined"){

        settings=[];
    }

    try{

       //this.inst =this;
       console.log(this)
       settings['inst']= this;
       this.key = airM.addBot(settings);
       airM.whichBotOn(this);
      console.log('showing this...')
       console.log(this);
        console.log('\n\nshowed this...')



    }

    catch(err){

        console.log("\n\n no air master set. Setting up one for you!!!\n \n");

        airM = new airMaster();
        settings['inst']= this;
       this.key = airM.addBot(settings);
        airM.whichBotOn(this);

    }
    //per minute
    try{
      this.currentKeyword= settings['category']
    }
    catch(err){

      console.log('no category set for this bot. defaulting to fashion');
      this.currentKeyword= "fashion";
    }
    

    this.set = settings;

    this.username=null;

    //which bot we're on for air traffic/master ctrl



    this.defaultActionLimit=3;

    this.defaultFollowLimit = 3;

    this.onFollowAction=0;

    //seconds... time between actions
    this.defaultTimeSplit = 2;

    //per minute
    this.defaultRepostLimit = 3;


    //which one we're on now for this bot
    this.onPostAction=0;

    //per minute
    this.defaultLikeLimit = 2;

    this.onLikeAction=0;

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


    //example for when there is no bots hardcoded or from db
     this.tumblrAuth={
              consumer_key: 'SqFu4wiBMiyfl6v40GBfCOEDEOECxtIn3A1q5z2sirVnqpifZ8',
              consumer_secret: 'I8QizfU4HxDLujUBifDxLicvCn48S3zvn5tf2ewMuTQ8S7CLux',
              token: 'iudo13ly6v7puDysKqpc50fUiU0hJ9MYZULOsYUabN1A3gxnAz',
              token_secret: 'Q71jROnuApeAaaabzQC6yWfCwxaur3XhMDrjkJCQEur9QWd8l8'
        };

    try{
      this.username=settings['username'];
      settings=settings['settings'];
      
    }
    catch(err){
      console.log('not settings or username')
    }
    //validation
    if(typeof settings['userCred'] !="undefined"){
       this.userCred=[];
        this.userCred['tumblr'] = tumblr.createClient(settings['userCred']['tumblr'])
        

    }
    else{

        this.userCred=[];

        this.userCred['tumblr'] = tumblr.createClient(this.tumblrAuth);
    }




    //for tumblr to start
    this.client = this.userCred['tumblr'];

    //this.tumblrUser =  tumblr.User(this.tumblrAuth);


    console.log('got user');


    this.setBatchSize= function(bSize){

      this.batchSize= bSize;
      console.log("bSize is"+ this.batchSize);
      return this.batchSize;

    }
    this.getKeyword= function(whichBot){

      var defKeyw = whichBot.currentKeyword;
      var keywordsArr=[];
      switch(defKeyw){

        case "fashion":

          keywordsArr=[
            "vogue", "dkny", "vanity fair", "hotness", "hollywood",
            "e online", "entertainment", "fashion", "trendy", "clothes", "shoes", "makeup", "cosmetics", "mac girl", "cover girl", "top model", "fashion tips", "goddess", "fashion art", "designer", "fashion designer", "gucci", "lvmh", "louis vuitton", "fashion week", "instagram fashion", "boots", "cute heels", "hipster clothing", "fashion forward", "runway", "fashion contest", "fashion hashtag", "hot fashion", "high fashion", "america's next top model", "rule the runway","cinderella", "wedding dress", "stylish wedding", "pregancy clothing", "skinny clothes", "lipstick", "loreal", "french fashion", "paris fashion", "american fashion", "asian fashion", "japanese fashion", "lora", "josie", "karma", "ashley", "danielle", "heidi", "petra", "ariel", "princess", "barbie", "michelle", "danielle", "jessica", "aubrey",  "prada", "target", "forever 21", "british vogue", "france vogue", "anna wintour", "tommy hilfiger", "calvin klein", "marc jacobs", "summer clothes", "winter clothes", "fashion app", "pinterest", "jeans", "loafers", "candles", "sample sale", "macy's", "mall", "winston", "jewelry", "diamond ring", "gold", "nastygirl", "shopoholic", "shopping", "weekend shopping", "daddy's money", "lexus", "bmw", "girl talk", "girl code", "makeup tips", "blush", "eyeliner", "shampoo", "marie claire", "fashion institute", "parsons", "blouse", "deals on shoes", "look amazing", "sping collection", "winter collection", "autumn collection", "summer collection", "linen", "steve madden", "tyra banks", "next top model", "cute bag", "fashion show", "swank", "my closet", "donna karen", "fitch", "limited", "dillards", "jcpenney", "perfume", "givenchy", "purses", "clutch", "wearing", "hot and not", "ballroom dress", "attire"
          ]

        break;

        case "celebrity":

           keywordsArr=[
           "kim kardashian", "paris hilton", "hollywood", "spears", "oprah", "jessica alba", "jessica simpson", "backstreet boys", "justin timberlake", "justin beiber", "miley cyrus", "robin williams", "phillip seymour hoffman", "movies", "movie opening", "theatres", "rainy", "mtv", "vh1", "celebrity gossip", "gawker", "rachael", "sarah", "britney", "monica", "tracy", "debra", "janey", "jane", "mary", "beverly hills", "real housewives", "affair", "reality tv", "teenage", "magazine cover", "tmz", "tabloid", "celebrity roast", "lebron james", "beyonce", "michael jackson", "meagan good", "leonardo dicaprio", "new film", "tribeca film festival", "caan festival", "breaking bad", "lord of the rings", "harry potter", "concert", "live concert", "music festival", "oscars", "webbys", "ginna", "tara", "samantha", "depression", "drug abuse", "celebrity rehab", "roberta", "ellen", "ellen show", "conan", "jay leno", "meme", "broadway", "celeb news", "red carpet", "red carpet photos", "famous", "actress", "actor", "movie director", "indy film", "budget film", "film buff", "celebrity facts", "popsugar", "e!", "celebrity news", "celebs", "LA", "santa monica", "hollywood hills", "malibu", "laguna", "kardashians", "chloe", "singer", "songwriter", "dancer", "eden", "obama", "clinton", "chris tucker", "samuel jackson", "casino", "vegas", "mirage", "essence", "vibe", "time magazine", "gq", "ok magazine", "paparazzi", "filming", "trailer", "star", "rising star", "retired actress", "former model", "own tv show", "the view", "windy williams", "housewives of atlanta", "date millionaire", "katie", "abc", "nbc", "fox", "hbo", "showtime", "tmc", "kanye", "jack", "zuckerberg", "jim", "daisy", "marilyn", "pop culture", "reporter", "anchor", "rehab center", "gala", "scandal", "private island", "billionaire", "nominated", "jen", "brad pitt", "angelina"
                    ]

        break;

        case "fitness":
          keywordsArr=[
            "self", "fitness", "stength", "muscle", "weight watchers", "secret pill", "spa", "gym", "equinox", "24 hour fitness", "nike", "adidas", "running", "wearable", "fitness gadgets", "fitness tips", "exercise tips", "excersize", "get skinny", "fight fat", "workout motivation", "rocky", "track", "tennis", "tennis shoes", "sneakers", "headbands", "workout", "yoga", "tai chi","ninja warrior", "sweat", "sprints", "practice", "running shoes", "world records", "weight lift", "testosterone", "steroids", "muscle tip", "tryouts", "cheerleading", "gymnastics", "ice skating", "trampoline", "medicine ball", "stetches", "fit butt", "jogging", "track and field", "high jump", "red bull", "xtreme sports", "skydiving", "bootcamp", "military training", "eat right", "nutrition tips", "vitamins", "calories", "thin food", "fat-free", "upper body", "gym equipment", "parkour", "rock climbing", "soccer", "serena", "venus", "rochelle", "rhonda", "cindy", "daniella", "rebecca", "reebok", "karen", "connie", "kristin", "lisa", "women's fitness", "aubrey", "jump", "karate", "self-defense", "once a day", "quit smoking", "wine health", "health rumours", "competition", "pro", "first place", "fitness center", "facility", "state of the art", "life balance", "wellness", "modells", "muscle milk", "wrestle", "yoga instructor", "triathlon", "5k", "long distance run", "short distance run", "tyrone", "sophia", "body fuel", "gatorade", "powerade", "energy drink", "min workout", "push-ups", "situps", "rocko", "mountain", "hiking", "rafting", "straddle", "diet", "easy diet", "weight loss diet", "trainer", "boxing"
        ]

        break;

        case "food":

          keywordsArr=[

            "iron chef", "delicious", "food", "foodie", "kitchen tips", "tasty", "scrumptious", "oven", "pastry", "italian", "sushi", "filet mignon", "ramsey", "zagat", "yelp", "restaurant", "starbucks", "snack", "food pics", "diner", "food truck", "cuisine", "kitchen", "cabinet", "shrimp", "fish", "salmon", "rice", "sake", "wine", "merlot", "pinot noir", "champaigne", "sicily", "travel food", "soups", "recipes", "best recipes", "thanksgiving dinner", "christmas dinner", "turkey", "stuffing", "basil", "spices", "thai food", "french food", "fine dining", "where to eat", "restaurant reviews", "taste test", "mario", "tony", "emily", "emilia", "janet", "secret recipe", "cooking", "cooking lessons", "food apps", "cooking app", "food tech", "food startup", "new restaurant", "restaurant opening", "shake shack", "burger", "fries", "yum", "collette", "donut", "pizzeria", "dumplings", "tapas", "food tv", "food show", "food meme", "cut calories", "gluten-free", "organic", "trader joe's", "kroger", "ingredients", "cruise", "carribean", "all inclusive", "resort", "ruth chris", "olive garden", "wine trip", "vineyard", "agriculture", "farmer's market", "delight", "grubhub", "seamless", "groceries", "grocery list", "noodles", "bread", "toast", "breakfast", "lunch", "dinner", "dinner and a movie", "out tonight", "sunday coupons", "food deals", "fresh direct", "chef", "culinary arts", "culinary school", "chef training", "waiter", "waitress", "dinner reservation"
             ]

        break;

        default:
          keywordsArr=[

            "taxi", "mlb", "nba", "finals", "school", "university", "town", "city", "state", "congress", "politics", "arnold", "sam", "patrick", "andrew", "james", "jamie", "rodney", "church", "news", "world news", "gossip", "bummer", "time", "each", "load", "comes", "due", "questions", "life", "meaning", "passion", "suspense", "remorse", "heartache", "pain", "sorrow", "joy", "pleasure", "pain", "wanting", "wanted", "bell", "sound", "music", "genre", "rock", "poetry", "sandals", "instagram", "facebook", "daily", "dose", "new york", "chicago", "seoul", "tokyo", "london", "cape town", "poland", "canada", "mexico", "war", "peace", "happiness", "drought", "iron", "staff", "books", "rick", "ross", "randy", "celeb", "bouncer", "bentley", "beauty", "bounty", "voice", "animation", "cartoon", "3d", "tech", "silicon valley", "nyc", "rent", "office", "bills", "travel", "sickness", "planes", "boats", "accident", "incident", "court", "taxes", "lawsuit", "lawyer", "doctor", "engineer", "websiode", "youtube", "reviews", "local", "bitcoin", "accelerator", "product", "brand", "advertiser", "job", "corporation", "firm", "cincinatti", "portland", "washington", "south america", "colombia", "columbia", "harvard", "mit", "homebrew", "sink", "destination", "pink", "orange", "purple", "blue", "yellow", "art", "grafitti", "newspaper", "magazine", "app", "game", "website", "web designer", "bottled water", "reckless", "danger", "not safe", "shame", "viral", "kickstarter", "myspace", "insanity", "madison", "union square", "chicken", "sandwich", "hungry", "tonight", "miami", "cuba", "havana", "china", "industry", "marketing", "finance", "banks", "insurance", "popular", "trending", "soda", "chair", "street", "lamp", "javascript", "rails", "temorary", "benefit", "analysis", "tease", "cool", "hip", "ears", "mocha", "coffee", "cereal", "convention", "surprise", "birthday"
          ]

        break;




    
      }


      //console.log(keywordsArr);
         var nRandNum =  Math.floor((Math.random() * keywordsArr.length));
         console.log(nRandNum)


          return keywordsArr[nRandNum];
    
     
     
    }

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

        var randNum = Math.floor((Math.random() * 10000)+1);
        console.log(randNum);
        var userToFollow = tUser.username;
       var tiUser=tUser;
        setTimeout(function(){

           if(whichBot.onFollowAction >= whichBot.defaultFollowLimit){
                      console.log("reached default limit of follows for user:"+ whichBot.username);
                      return false;
                      }
                      else{
                        whichBot.onFollowAction =whichBot.onFollowAction +1;

                      }

                        if(mTesting==false){
                   
                        whichBot.client.follow(tiUser['username']+".tumblr.com", function(){console.log("yea")});
                         console.log("\n\n the blog name:"+tiUser['username']);

                        console.log("followed!");
                       /* data.user.blogs.forEach(function (blog) {
                           
                        });*/
                   
                     console.log('following user'+tiUser['username']);
                        }

                        else{

                            console.log("simulated follow of "+tiUser['username']+".tumblr.com" +"on topic " + whichBot.currentKeyword + "for "+ whichBot.username);
                        }


                 

        }, randNum, tiUser);
    }



    this.likeUserContent= function(blogId, reblogId, whichBot){

        var randNum = Math.floor((Math.random() * 5000)+1);
        console.log(randNum);
       
       var tiId=reblogId;
       blogId1=blogId;
        setTimeout(function(){

                     if(whichBot.onLikeAction >= whichBot.defaultLikeLimit){
                      console.log("reached default limit of likes for user:"+ whichBot.username);
                      return false;
                      }
                      else{
                        whichBot.onLikeAction =whichBot.onLikeAction +1;

                      }



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

                            console.log("simulated like of of "+tiId +" on topic " + whichBot.currentKeyword + "for "+ whichBot.username);
                        }


                 

        }, randNum, tiId, blogId1);
    }

    this.repostUserContent= function(blogId, reblogId, realBlogId, whichBot){

        var randNum = Math.floor((Math.random() * 5000)+1);
        console.log(randNum);
       
       var tiId=reblogId;
      var blogId1=blogId;
      var blogId2 = realBlogId;
        setTimeout(function(){


              //check for limit
                      if(whichBot.onPostAction >= whichBot.defaultRepostLimit){
                      console.log("reached default limit of repost for user:"+ whichBot.username);
                      return false;
                      }
                      else{
                        whichBot.onPostAction =whichBot.onPostAction +1;

                      }

                        if(mTesting==false){
                   
                        whichBot.client.reblog(blogId1, {"reblog_key":tiId, "id":blogId2}, function(){console.log("yea")});
                       // console.log(resp1)
                          console.log("\n\n  blog id:"+blogId2);
                          console.log("\n\n  blog:"+blogId1);
                         console.log("\n\n the reblog id:"+tiId);

                        //console.log("liked!");
                       /* data.user.blogs.forEach(function (blog) {
                           
                        });*/
                   
                     console.log('reposted: '+tiId);
                        }

                        else{

                            console.log("simulated repost of of "+tiId +" on topic " + whichBot.currentKeyword + "for "+ whichBot.username);
                        }


                 

        }, randNum, tiId, blogId1, blogId2);
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


          console.log(keyword);

            this.currentKeyword = keyword;
            console.log(this.currentKeyword);
            airM.whichBotOn(this);
            var imOnBot=this;
            this.client.taggedBot(keyword, this.prepareFollowers, imOnBot);
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

                //var theBot= airM.getCurrentBot();
                var theBot=this;
                try{

                   theBot.setBatchSize(data.length);
                    var keyword = theBot.currentKeyword;

                }
                catch(err1){
                  console.log("couldnt get bot batchsize");
                  return false;
                }
               
                for(i in data){

                    

                  console.log(data[i]['reblog_key']);

                  //maybe post_id instead of id or.. blog_name
                  data[i]['name']= data[i]['blog_name'].toString().replace('http://', '').replace('https://','') +".tumblr.com";
                  data[i]['id']= data[i]['id'].toString();
                  console.log(data[i]['name']);

                  //takes id
                  theBot.likeUserContent(data[i]['id'], data[i]['reblog_key'], theBot);

                  //takes blog name
                  theBot.repostUserContent(theBot.username+".tumblr.com", data[i]['reblog_key'], data[i]['id'], theBot);

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

                    try{
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

                      }

                      catch(err){

                        console.log('cheerio spit up... returning...');
                        return false;
                      }
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

    this.theCurBot=null;


    this.init = function(botsAll){
        if(typeof botsAll != "array"){
          botsAll= theBots;
        }
        this.botsDeployed=0;
        this.allBots = botsAll;
        return this.allBots;

    }
     this.reset = function(){

        this.botsDeployed=0;
        this.allBots = [];
        
    }

    this.whichBotOn= function(botObj){

      this.theCurBot= botObj;
    }

    this.getCurrentBot = function(){

      //edit
      
      return this.theCurBot;

       // var index= this.botsDeployed-1;
        //return this.allBots[index]['obj'];
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

