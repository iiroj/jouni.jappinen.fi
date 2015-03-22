var connect           = require('connect')
    route             = require('connect-route')
    filecache         = require('filecache')
    jade              = require('jade')
    nib               = require('nib')
    nodemailer        = require('nodemailer')
    querystring       = require('querystring')
    sendmailTransport = require('nodemailer-sendmail-transport')
    stylus            = require('stylus')

    app         = connect()
    port        = '14946'
    files       = __dirname + '/static'
    views       = __dirname + '/views/'
    fcOptions   = {
                    watchDirectoryChange: true,
                    gzip: true,
                    deflate: true
                  }
    transporter = nodemailer.createTransport(sendmailTransport({
                    path: '/usr/sbin/sendmail'
                  }))

// Use compression
app.use(filecache(files, fcOptions, function(err, cache) {
}).httpHandler())

// Set up Stylus
function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .set('compress', true)
  .set('debug', false)
  .set('sourcemap')
  .use(nib())
  .import('nib');
}
app.use(stylus.middleware({
  src: files,
  compile: compile
}))

// Set up Contact form front and back end
function processPost(req, res, callback) {
  var queryData = ''
  if(req.method == 'POST') {
    req.on('data', function(data) {
      queryData += data
      if(queryData.length > 1e6) {
        queryData = ''
        res.setHeader(413, {'Content-Type': 'text/plain'}).end()
        req.connection.destroy()
      }
      req.on('end', function() {
        var validateEmail = /^\S+@\S+[\.][0-9a-z]+$/
        req.post = querystring.parse(queryData)
        validEmail = validateEmail.test(req.post.email)
        callback()
      })
    })
  }
}
function contactPage(req, res, next){
  if(req.method == 'POST'){
    processPost(req, res, function(){
      if (req.post.name.length == 0) {
        res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', name: req.post.name, email: req.post.email, subject: req.post.subject, message: req.post.message, internalMessage: 'Unohdit nimen', post: false}))
      } else if (req.post.email.length == 0) {
        res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', name: req.post.name, email: req.post.email, subject: req.post.subject, message: req.post.message, internalMessage: 'Unohdit sähköpostiosoitteen', post: false}))
      } else if (validEmail != true) {
        res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', name: req.post.name, email: req.post.email, subject: req.post.subject, message: req.post.message, internalMessage: 'Sähköpostiosoite ei vaikuta oikealta', post: false}))
      } else if (req.post.subject.legth == 0) {
        res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', name: req.post.name, email: req.post.email, subject: req.post.subject, message: req.post.message, internalMessage: 'Unohdit aiheen', post: false}))
      } else if (req.post.message.length < 20) {
        res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', name: req.post.name, email: req.post.email, subject: req.post.subject, message: req.post.message, internalMessage: 'Viestisi oli alle 20 merkkiä pitkä', post: false}))
      } else {
        transporter.sendMail({
          from: 'jouni.jappinen.fi <server@jappinen.fi>',
          replyTo: req.post.name + ' <' + req.post.email + '>',
          to: 'Jouni Jäppinen <jouni@jappinen.fi>',
          subject: req.post.subject,
          text: req.post.message
        }, function(error, response) {
          if (error) {
              res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', name: req.post.name, email: req.post.email, subject: req.post.subject, message: req.post.message, internalMessage: 'Viestin lähettämisessä oli ongelma', post: false}))
          } else {
            res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', internalMessage: 'Kiitos yhteydenotostasi', post: true}))
          }
        })
      }
    })
  } else {
    res.end(jade.renderFile(views + 'contact.jade', {title: 'Contact', name: '', email: '', subject: '', message: '', post: false}))
  }
}

// Routes
app.use(route(function (router) {
  router.get('/', function (req, res, next) {
    res.end(jade.renderFile(views + 'index.jade', {title: 'Home'}))
  })
  router.get('/contact', function (req, res, next) {
    contactPage(req, res, next)
  })
  router.get('/cv', function (req, res, next) {
    res.end(jade.renderFile(views + 'cv.jade', {title: 'CV'}))
  })
  router.get('/pajanhamarasta', function (req, res, next) {
    res.end(jade.renderFile(views + 'pajanhamarasta.jade', {title: 'pajanhamarasta'}))
  })
}))

// 404
app.use (function onNotFound(req, res, next) {
  res.writeHead(404, {'content-type': 'text/html'})
  res.end(jade.renderFile(views + 'error.jade', {status: 404}))
})

// 500
app.use(function onError(err, req, res) {
  res.writeHead(500, {'content-type': 'text/html'})
  res.end(jade.renderFile(views + 'error.jade', {status: 500}))
});

// Listen
app.listen(port, function() {
  console.log('Listening on ' + port)
})
