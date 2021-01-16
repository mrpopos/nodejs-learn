const http = require('http')

const server = http.createServer((req, res) => {
  // 获取请求url 排除/favicon.ico请求
  if (req.url === '/favicon.ico') {
    return
  }
  if(req.url === '/upload' && req.method.toLowerCase() === 'post') {
    
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end('upload success~~')
  }
})

server.listen(8888, '127.0.0.1')
