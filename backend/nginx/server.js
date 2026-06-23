// this is just the node js server not the express 
const http = require('http')
const fs = require('fs')
const path = require('path')
// here we put our port 
const PORT = 5000
//callback functions starts from here for calling a server  this will show the how the server works in the server if it loads successfully then it will show the o/p and if not it show the server has an issue that's why we use two parameter
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url.slice(1))
    //filepath
    const extname = String(path.extname(filePath)).toLowerCase()
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png'

    }
    const contentType = mimeTypes[extname] || 'application/octet-stream'
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, {
                    "content-type": "text/html"
                })
                res.end('404 file not found fuck u bro !!')
            }
        } else {
            res.writeHead(200, {
                'content-type': contentType
            })
            res.end(content, 'utf-8')
            console.log(filePath);

        }

    })
});
//ternary operator 
// ? means the if condition
// condition ? {

// }
//     
// 
//  and this means the else condition: {

//     }

server.listen(PORT, () => {
    console.log(`server is listening at this port: ${PORT}`);

})

