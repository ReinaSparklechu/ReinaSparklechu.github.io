
var admin = require("firebase-admin");
var serviceAccount = require('./reina-s-base-firebase-adminsdk-y5kk5-94f665d180.json');
var request = require('request');
var cheerio = require('cheerio');
const { firestore } = require("firebase-admin");
//const functions = require('firebase-functions');

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
}
)
var db =admin.firestore();
var today = Date();
var allWords = [""];
var filterWords = ['(v.redd.it)', '(i.redd.it)', 'the', 'then', 'this','much','was','were','this','that','they','them','their','his','her'
,'not','for', 'The', 'are', 'you', 'don’t' , 'Not' , '[OC]','from', 'and', 'And', 'your','Your','can', 'who', 'Who', 'what', 'where', 'when', 'why', 'how' ];
function scrapeReddit(){
    request('https://old.reddit.com/r/popular/?geo_filter=GLOBAL', (error, response, html)=> {
        if(!error && response.statusCode==200) {
            const $ = cheerio.load(html);
            $('p.title').each((i,title) =>
            {
                // set all to lower case for easy filtering
                var headings = $(title).text().trim().toLowerCase();
                var link = $(title.firstChild).attr("href");
                console.log(headings);
                let redditHeading = {
                    header: headings,
                    links : link,
                    Time: today
                }
                db.collection('Reddit').add(redditHeading);
                var words = headings.split(" ")
                allWords = allWords.concat(words);
            })
            allWords = allWords.filter(word => word.length>2 && !filterWords.includes(word));
            let collection = {
                list: allWords
            }
            db.collection('reddit').add(collection);
            console.log(allWords);
        }
    });
}
scrapeReddit();
//var deletedata = db.collection('reddit').where('Date', '==', 'Thu Apr 14 2022 11:30:42 GMT+0800 (Singapore Standard Time)');
//deletedata.get().then(function(querysnap){
//    querysnap.forEach(function(doc) {
//        doc.ref.delete();
//    })
//})
//a.title may-blank loggedin
//#thing_t3_u2ewn0 > div.entry.unvoted > div.top-matter > p.title > a
