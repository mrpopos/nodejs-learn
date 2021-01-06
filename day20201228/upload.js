const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return
  }

  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    // var data = ''
    // req.on('data', function (chunk) {
    //   data += chunk
    // })
    // req.on('end', function () {
    //   // data = decodeURI(data)
    //   console.log('接收表单文件~~')
    // })
    console.log('接收表单文件~~')

    res.writeHead(200, {
      'Content-Type': 'text/html'
    })

    var obj = {name: 'zhang san', age: 11, address: 'chengdu', time: '2018-10-10' }
    res.end(JSON.stringify({ status: 0, data: obj }))
  }
})

server.listen(8888, '127.0.0.1')
