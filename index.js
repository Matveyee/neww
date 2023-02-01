import http from 'http'
import fs from 'fs'

const server = http.createServer( (req, res) => {
    
    if (req.url === '/') {
        fs.readFile("index.html", (err, data) => {

            if (err) {
                throw err; 
            }
            res.writeHead(200, {
                "Content-type" : "text/html"
            })

            res.end(data);
        })
    }

    if(req.url === '/obraz') {
        fs.readFile("obraz.html", (err, data) => {

            if (err) {
                throw err; 
            }
            res.writeHead(200, {
                "Content-type" : "text/html"
            })

            res.end(data);
        })
    }

    if(req.url === '/prototypes') {
        fs.readFile("proto.html", (err, data) => {

            if (err) {
                throw err; 
            }
            res.writeHead(200, {
                "Content-type" : "text/html"
            })

            res.end(data);
        })
    }
    if(req.url === '/kino') {
        fs.readFile("kino.html", (err, data) => {

            if (err) {
                throw err; 
            }
            res.writeHead(200, {
                "Content-type" : "text/html"
            })

            res.end(data);
        })
    }

    
} )





server.listen( 3000, () => { console.log('Server is working...') });