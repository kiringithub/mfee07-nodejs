const http = require('http');
const fs = require('fs');

console.log(__dirname);

const server = http.createServer((req, res)=>{
    // 當有用戶時才會這裡(callback function)
    // 老師1.8的範例有點問題，因為兩個非同步的讀寫，不確定哪一個會先做完。應該把read丟進write的callback function。
    fs.writeFile(
        __dirname+'/headers.json',  // filename    在哪裡
        JSON.stringify(req.headers),  // content   內容是
        error=>{                      //  成功做什麼、失敗做什麼，錯誤先行。
            if(error){
                console.log(error);
            }else{
                res.end('ok');
            }

        })
});

server.listen(3000);
