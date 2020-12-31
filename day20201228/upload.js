const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return
  }

  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    
    var data = ''

    req.on('data', function (chunk) {
      data += chunk
    })

  req.on('end', function () {
    data = decodeURI(data)
    console.log(data)

    var dataObject = querystring.parse(data)
    console.log(dataObject)
  })
    res.end(({ "statu": 200 , "ok": true }))
  }
})

server.listen(8888, '127.0.0.1')
