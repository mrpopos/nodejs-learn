const http = require('http')
const queryString = require('querystring')

const server = http.createServer(function(req, res) {
  // console.log(req.url)
  if (req.url === '/favicon.ico') {
    return
  }
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    let postData = ''
    req.addListener('data', function(chunk) {
      postData += chunk
    })
    req.addListener('end', function() {
      // console.log(postData)
      console.log(queryString.parse(postData))
    })
  }
  res.end('success~~~')
})

server.listen(8888, '127.0.0.1')
