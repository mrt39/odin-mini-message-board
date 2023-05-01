var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messagesArray: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

router.post("/new", function(req,res, next){
  var message = req.body.messageInput
  var user = req.body.userInput
  const post = {
    text:message,
    user:user,
    added: new Date()
  }
  messages.push(post)
  
  res.redirect("/")
})

module.exports = router;
