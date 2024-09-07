const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('UAT Hello World\n
                 lkdjfskdjf
  sldkfjsdlkjfdlskfjsdlkfj
  sdlkfjsdlkfj
  sdlkfjsdlkfj
  sdlkfjsdlkfj
  sldkjfsldkfj
  sldkjfsldkjf
  
                 ')
  response.write('UAT Hello World2\n')
  response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
