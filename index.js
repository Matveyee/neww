import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { MongoClient } from 'mongodb';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const client = new MongoClient('mongodb+srv://matveykarlovw:screemer228@cluster0.sfz0dsq.mongodb.net/');

//connecting database
try{
    client.connect();
    console.log('База данных поключена');
}catch (e) {
    console.log(e);
}
const partans = client.db().collection('Participants');



async function getPartans(){
    let arr = await partans.find().toArray();
    return JSON.stringify(arr)
}






let h_adrs=[0,'/','/'];
let an;
let s = 0;

const server = http.createServer( (req, res) => {
    
    let adrs = {
        '/' : path.join(__dirname, 'HTML', 'index.html'),
        '/obraz' : path.join(__dirname, 'HTML','obraz.html'),
        '/prototypes' : path.join(__dirname, 'HTML', 'proto.html'),
        '/kino' : path.join(__dirname, 'HTML', 'kino.html'),
        '/raskoln': path.join(__dirname, 'HTML', 'rasckolnikow.html'),
        '/fade.js': path.join(__dirname, 'HTML', 'index.html'),
        '/:' : path.join(__dirname, 'HTML', 'index.html'),
        '/game':path.join(__dirname, 'HTML', 'thegame.html'),
        '/caseman': path.join(__dirname, 'HTML', 'caseman.html'),
        '/gooseberry' : path.join(__dirname, 'HTML', 'gooseberry.html'),
        '/aboutlove' : path.join(__dirname, 'HTML', 'aboutlove.html'),
        '/statistics' : path.join(__dirname, 'HTML', 'statistics.html'),

        
    }
    let others = {
        '/main.css' : path.join(__dirname, 'HTML', 'main.css'),
    }
    let colors = {
        '/' : ['o','250,174,34','255,149,0','249, 203, 118'],
        '/obraz' : ['o','250,174,34','255,149,0','249, 203, 118'],
        '/prototypes' : ['o','250,174,34','255,149,0','249, 203, 118'],
        '/kino' : ['o','250,174,34','255,149,0','249, 203, 118'],
        '/raskoln' : ['g','30, 121, 2','21, 87, 1','40, 158, 4'],
        '/game' : ['g','30, 121, 2','21, 87, 1','40, 158, 4'],
        '/caseman' : ['b','60, 79, 250','54,69,207','91,107,250'],
        '/gooseberry' : ['p','92,0,196','68, 2, 143','130, 72, 196'],
        '/aboutlove' : ['r','196,0,75','129,0,50','197,52,108'],
        '/statistics' : ['bl','52,51,54','0,0,0','85,84,87']


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

    adrs_sch.__proto__ = adrs;

    if ( (req.url !== '/favicon.ico') && (req.url !== '/color') && (req.url !== '/main.css') && (req.url !== '/getParts')) h_adrs.push(req.url)
    console.log(req.url)
    let right_answers = ['3p','1a','2b','1c','3d','1e','2f','4g','2h','1i','2j','3k','3l'];

    if ((h_adrs[h_adrs.length-1][7] == '?') && (req.url != '/favicon.ico') && (req.url !== '/main.css') ) {
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
          <title>Раскольников</title>
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
                <div class="space"><h1 align="center" ><font size="5" color="white">Содержание</font></h1></div>
                <div id="links" >
                <a href="/">Характеристика Головлёва</a>
                <a href="/obraz">Образ Головлёва</a>
                <a href="/prototypes">Прототип Иудушки</a>
                <a href="/kino">Иудушка Головлёв в кино и театре</a>
                <a href="/raskoln">Раскольников</a>
                <a href="/game">Игра</a>
                </div>
            </div>
            <div id="sdnv2"></div>
            <div id="header" >
                <header >
                  <p align="center"><font size="9" face="century schoolbook" color="white">Раскольников</font></p>
                </header>
                </div>
          <h1 align="center" >Вы прошли тест. Ваш результат: ${Math.trunc(s/14*100)}%
         </body>`)
    }
    let colorDiff;
    
    if ( colors[h_adrs[h_adrs.length-2]][0] == colors[h_adrs[h_adrs.length-1]][0]) {
        colorDiff = {
            diff : false,
            header : colors[h_adrs[h_adrs.length-1]][3] ,
            sdnv : colors[h_adrs[h_adrs.length-1]][1] ,
            links : colors[h_adrs[h_adrs.length-1]][2] ,
        }
    }else {
       colorDiff = {
        header : [ colors[h_adrs[h_adrs.length-2]][3], colors[h_adrs[h_adrs.length-1]][3] ],
        sdnv : [ colors[h_adrs[h_adrs.length-2]][1], colors[h_adrs[h_adrs.length-1]][1] ],
        links : [ colors[h_adrs[h_adrs.length-2]][2], colors[h_adrs[h_adrs.length-1]][2] ],
        diff : true
       } 
    }
    if (req.url == '/main.css') {
        fs.readFile(others['/main.css'], (err, data) => {
            if (err) {throw err};
            data = String(data);
            data = data.replace('/* {header} */', 'background-color: rgb(' + colors[h_adrs[h_adrs.length-2]][3] + ');');
            data = data.replace('/* {sdnv} */', 'background-color: rgb(' + colors[h_adrs[h_adrs.length-2]][1] + ');');
            data = data.replace('/* {links} */', 'background-color: rgb(' + colors[h_adrs[h_adrs.length-2]][2] + ');');
            data = data.replace('/* {linkshover} */', 'background-color: rgb(' + colors[h_adrs[h_adrs.length-2]][2] + ');');
            res.writeHead(200, {"Content-type" : 'text/css'});
            res.end(data)
        })
    }
    if(Object.keys(adrs).includes(req.url)) {
        fs.readFile(adrs[h_adrs[h_adrs.length-1]], (err, data) => {
            if (err) {throw err};
            console.log('a')
            res.writeHead(200, {"Content-type" : "text/html"});
            res.end(data)
        })
    }

    
    if (req.url === '/color') {
        res.writeHead(200, {"Content-type" : "text"});
        res.end(JSON.stringify(colorDiff))
    }
    if (req.url === '/getParts') {
        getPartans().then( arr => {
            res.writeHead(200, {"Content-type" : "text"});
            res.end(arr);
        } )
    }

    // if ( ( colors[h_adrs[h_adrs.length-2]] === 'o') && ( colors[h_adrs[h_adrs.length-1]] === 'g') ) {

    //     fs.readFile(adrs[h_adrs[h_adrs.length-1]], (err, data) => {
    //         if (err) {throw err};
    //         res.writeHead(200, {"Content-type" : "text/html"});
    //         res.end(data)
    //     })
    // }else if ( ( colors[h_adrs[h_adrs.length-2]] === 'g') && ( colors[h_adrs[h_adrs.length-1]] === 'o') )  {
    //     fs.readFile(adrs_sch2[h_adrs[h_adrs.length-1]], (err, data) => {
    //         if (err) {throw err};
    //         res.writeHead(200, {"Content-type" : "text/html"});
    //         res.end(data)
    //     })
    // }else {
    //     fs.readFile(adrs_sch[h_adrs[h_adrs.length-1]], (err, data) => {
    //         if (err) {throw err};
    //         res.writeHead(200, {"Content-type" : "text/html"});
    //         res.end(data)
    //     })
    // }
} )


server.listen( 3000, () => { console.log('Server is working...') });
