var connect           = require('connect')
    route             = require('connect-route')
    serveStatic       = require('serve-static')
    jade              = require('jade')
    nib               = require('nib')
    stylus            = require('stylus')

    app         = connect()
    port        = '8082'
    files       = __dirname + '/static'
    views       = __dirname + '/views/'

app.use(serveStatic(files))

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

// Routes
app.use(route(function (router) {
  router.get('/', function (req, res, next) {
    res.end(jade.renderFile(views + 'index.jade', {title: 'Home'}))
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
