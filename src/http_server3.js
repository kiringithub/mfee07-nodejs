// ES6的語法，將require改成import，從'http'套件中匯入http。
import http from 'http';
import fs from 'fs';

console.log(__dirname);

const server = http.createServer((req, res)=>{
    fs.writeFile(
        __dirname+'/headers.json',  // filename
        JSON.stringify(req.headers),  // content
        error=>{
            if(error){
                console.log(error);
            } else {
                res.end('!!!!!!!!!!ok!!!!!!!!!!');
            }
        })
});

server.listen(3000);
