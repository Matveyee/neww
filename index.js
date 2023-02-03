import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer( (req, res) => {
    
    if (req.url === '/:') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {

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
        fs.readFile(path.join(__dirname, 'HTML','obraz.html'), (err, data) => {

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
        fs.readFile(path.join(__dirname, 'HTML', 'proto.html'), (err, data) => {

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
        fs.readFile(path.join(__dirname, 'HTML', 'kino.html'), (err, data) => {

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