const http = require('http')
const formidable = require('formidable')

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return
  }
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    const form = formidable({ multiples: true, uploadDir: './uploads'})
    form.parse(req, (err, fields, files) => {
      console.log(fields)
      console.log(files)
      res.end('upload success~~')
    })
  }
})

server.listen(8888, '127.0.0.1')
