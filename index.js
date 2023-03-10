import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { compileFunction } from 'vm';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let h_adrs=[0,1];
let an;
let s = 0;

const server = http.createServer( (req, res) => {
    
    let adrs = {
        '/favicon.ico' : path.join(__dirname, 'HTML', 'index.html'),
        '/' : path.join(__dirname, 'HTML', 'index.html'),
        '/obraz' : path.join(__dirname, 'HTML','obraz.html'),
        '/prototypes' : path.join(__dirname, 'HTML', 'proto.html'),
        '/kino' : path.join(__dirname, 'HTML', 'kino.html'),
        '/raskoln': path.join(__dirname, 'HTML', 'rasckolnikow.html'),
        '/fade.js': path.join(__dirname, 'HTML', 'index.html'),
        '/:' : path.join(__dirname, 'HTML', 'index.html'),
        '/game':path.join(__dirname, 'HTML', 'thegame.html')
    }
    let adrs_sch = {
        '/game':path.join(__dirname, 'HTML', 'thegame_sch.html'),
        '/raskoln': path.join(__dirname, 'HTML', 'rasckolnikow_sch.html'),
        '/game_1' : path.join(__dirname, 'HTML','game1.html'),
        '/game_1?numb1=1p' : path.join(__dirname, 'HTML','game2.html'),
        '/game_1?numb1=2p' : path.join(__dirname, 'HTML','game2.html'),
        '/game_1?numb1=3p' : path.join(__dirname, 'HTML','game2.html'),
        '/game_1?numb1=4p' : path.join(__dirname, 'HTML','game2.html'),

        '/game_1?numb1=1a' : path.join(__dirname, 'HTML','game3.html'),
        '/game_1?numb1=2a' : path.join(__dirname, 'HTML','game3.html'),
        '/game_1?numb1=3a' : path.join(__dirname, 'HTML','game3.html'),
        '/game_1?numb1=4a' : path.join(__dirname, 'HTML','game3.html'),

        '/game_1?numb1=1b' : path.join(__dirname, 'HTML','game4.html'),
        '/game_1?numb1=2b' : path.join(__dirname, 'HTML','game4.html'),
        '/game_1?numb1=3b' : path.join(__dirname, 'HTML','game4.html'),
        '/game_1?numb1=4b' : path.join(__dirname, 'HTML','game4.html'),

        '/game_1?numb1=1c' : path.join(__dirname, 'HTML','game5.html'),
        '/game_1?numb1=2c' : path.join(__dirname, 'HTML','game5.html'),
        '/game_1?numb1=3c' : path.join(__dirname, 'HTML','game5.html'),
        '/game_1?numb1=4c' : path.join(__dirname, 'HTML','game5.html'),

        '/game_1?numb1=1d' : path.join(__dirname, 'HTML','game6.html'),
        '/game_1?numb1=2d' : path.join(__dirname, 'HTML','game6.html'),
        '/game_1?numb1=3d' : path.join(__dirname, 'HTML','game6.html'),
        '/game_1?numb1=4d' : path.join(__dirname, 'HTML','game6.html'),

        '/game_1?numb1=1e' : path.join(__dirname, 'HTML','game7.html'),
        '/game_1?numb1=2e' : path.join(__dirname, 'HTML','game7.html'),
        '/game_1?numb1=3e' : path.join(__dirname, 'HTML','game7.html'),
        '/game_1?numb1=4e' : path.join(__dirname, 'HTML','game7.html'),

        '/game_1?numb1=1f' : path.join(__dirname, 'HTML','game8.html'),
        '/game_1?numb1=2f' : path.join(__dirname, 'HTML','game8.html'),
        '/game_1?numb1=3f' : path.join(__dirname, 'HTML','game8.html'),
        '/game_1?numb1=4f' : path.join(__dirname, 'HTML','game8.html'),

        '/game_1?numb1=1g' : path.join(__dirname, 'HTML','game9.html'),
        '/game_1?numb1=2g' : path.join(__dirname, 'HTML','game9.html'),
        '/game_1?numb1=3g' : path.join(__dirname, 'HTML','game9.html'),
        '/game_1?numb1=4g' : path.join(__dirname, 'HTML','game9.html'),

        '/game_1?numb1=1h' : path.join(__dirname, 'HTML','game10.html'),
        '/game_1?numb1=2h' : path.join(__dirname, 'HTML','game10.html'),
        '/game_1?numb1=3h' : path.join(__dirname, 'HTML','game10.html'),
        '/game_1?numb1=4h' : path.join(__dirname, 'HTML','game10.html'),

        '/game_1?numb1=1i' : path.join(__dirname, 'HTML','game11.html'),
        '/game_1?numb1=2i' : path.join(__dirname, 'HTML','game11.html'),
        '/game_1?numb1=3i' : path.join(__dirname, 'HTML','game11.html'),
        '/game_1?numb1=4i' : path.join(__dirname, 'HTML','game11.html'),

        '/game_1?numb1=1j' : path.join(__dirname, 'HTML','game12.html'),
        '/game_1?numb1=2j' : path.join(__dirname, 'HTML','game12.html'),
        '/game_1?numb1=3j' : path.join(__dirname, 'HTML','game12.html'),
        '/game_1?numb1=4j' : path.join(__dirname, 'HTML','game12.html'),

        '/game_1?numb1=1k' : path.join(__dirname, 'HTML','game13.html'),
        '/game_1?numb1=2k' : path.join(__dirname, 'HTML','game13.html'),
        '/game_1?numb1=3k' : path.join(__dirname, 'HTML','game13.html'),
        '/game_1?numb1=4k' : path.join(__dirname, 'HTML','game13.html'),

        '/game_1?numb1=1l' : path.join(__dirname, 'HTML','end.html'),
        '/game_1?numb1=2l' : path.join(__dirname, 'HTML','end.html'),
        '/game_1?numb1=3l' : path.join(__dirname, 'HTML','end.html'),
        '/game_1?numb1=4l' : path.join(__dirname, 'HTML','end.html'),



    }
    let adrs_sch2 = {
        '/' : path.join(__dirname, 'HTML', 'index_sch.html'),
        '/prototypes' : path.join(__dirname, 'HTML', 'proto_sch.html'),
        '/kino' : path.join(__dirname, 'HTML', 'kino_sch.html'),
        '/obraz' : path.join(__dirname, 'HTML','obraz_sch.html'),
        
    }
    adrs_sch.__proto__ = adrs;
    adrs_sch2.__proto__ = adrs;
    if(req.url !== '/favicon.ico') h_adrs.push(req.url)
    console.log(req.url)
    let right_answers = ['3p','1a','2b','1c','3d','1e','2f','4g','2h','1i','2j','3k','3l'];

    if ((h_adrs[h_adrs.length-1][7] == '?') && (req.url != '/favicon.ico')) {
        an = h_adrs[h_adrs.length-1][14]+h_adrs[h_adrs.length-1][15];
        right_answers.includes(an) ? s++ : s = s;
        console.log(s)
    }
    if(h_adrs[h_adrs.length-1][15] == 'l'){
        res.writeHead(200, {"Content-type" : "text/html"});
        res.end(`<!DOCTYPE html>
        <html>
         <head>
          <meta charset="utf-8">
          <title>????????????????????????</title>
          <style >
            #header{
                width: 100%;
                height: 150px;
                background-color: rgb(40, 158, 4);
            }
            #sdnv {
              height: 100%;
              width: 160px;
              position: fixed;
              z-index: 1;
              top: 0;
              left: 0;
              background-color: rgb(30, 121, 2);
              overflow-x: hidden;
              padding-top: 20px;
              margin-left: 8px;
              box-shadow: 0 0 10px rgba(0,0,0,0.5);
            }
            #links a{
                padding: 6px 8px 6px 16px;
                text-decoration: none;
                font-size: 15px;
                color: #ffffff;
                display: block;
                background-color: rgb(21, 87, 1);
                transition: 0.5s linear;
            
            }
            #links a:hover {
            color: #000000;
            background: rgb(76, 255, 21);
            }
            #sdnv2 {
            height: 100%;
            width: 160px;
            position: fixed;
            z-index: 1;
            top: 0;
            right: 0;
            background-color: rgb(30, 121, 2);
            margin-right: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            overflow-y: hidden;   
            }
            .textblock {
                margin-left: 168px;
                margin-top: 50px;
                margin-right: 168px;
            }
            #img {
              margin-top:200px;
            }
            #img2 {
              margin-top:150px;
              width: 160px;
              height: 160px;
            }
            P.fig {
              text-align: left;
            }
            P.cit {
              margin-left: 50px;
              font-style: italic;
            }
            #form {
                font-size: 4ch;
            }
        
          </style>
        </script>
         </head>
         <body>
            <div id="sdnv">
                <div class="space"><h1 align="center" ><font size="5" color="white">????????????????????</font></h1></div>
                <div id="links" >
                <a href="/">???????????????????????????? ??????????????????</a>
                <a href="/obraz">?????????? ??????????????????</a>
                <a href="/prototypes">???????????????? ??????????????</a>
                <a href="/kino">?????????????? ???????????????? ?? ???????? ?? ????????????</a>
                <a href="/raskoln">????????????????????????</a>
                <a href="/game">????????</a>
                </div>
            </div>
            <div id="sdnv2"></div>
            <div id="header" >
                <header >
                  <p align="center"><font size="9" face="century schoolbook" color="white">????????????????????????</font></p>
                </header>
                </div>
          <h1 align="center" >???? ???????????? ????????. ?????? ??????????????????: ${Math.trunc(s/14*100)}%
         </body>`)
    }
    if( (( (h_adrs[h_adrs.length-2] === '/obraz') || (h_adrs[h_adrs.length-2] === '/') || (h_adrs[h_adrs.length-2] === '/prototypes')||(h_adrs[h_adrs.length-2] === '/kino') ) && (( h_adrs[h_adrs.length-1] === '/raskoln') || (h_adrs[h_adrs.length-1] === '/game') ) ) ) {

        fs.readFile(adrs[h_adrs[h_adrs.length-1]], (err, data) => {
            if (err) {throw err};
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(data)
        })
    }else if (   ( (h_adrs[h_adrs.length-2] === '/raskoln') || (h_adrs[h_adrs.length-2] === '/game') ) && ( ( h_adrs[h_adrs.length-1] == '/prototypes' ) || ( h_adrs[h_adrs.length-1] == '/' ) || ( h_adrs[h_adrs.length-1] == '/kino' || ( h_adrs[h_adrs.length-1] == '/obraz' ) )))  {
        fs.readFile(adrs_sch2[h_adrs[h_adrs.length-1]], (err, data) => {
            if (err) {throw err};
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(data)
        })
    }else {
        fs.readFile(adrs_sch[h_adrs[h_adrs.length-1]], (err, data) => {
            if (err) {throw err};
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(data)
        })
    }
} )


server.listen( 3000, () => { console.log('Server is working...') });