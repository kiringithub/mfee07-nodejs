const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// middleware寫在頂層
// 錄影檔看20200519下午15:30
// 只能用的格式=>application/x-www-form-urlencoded和application/json(傳送方法)
// fetch用的是這種方法
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('main', {name: 'Kirin',pageTitle:'kirin的網站'});
});

// 只有路由要給斜線
app.get('/sales-json', (req, res)=>{
    const sales = require(__dirname + '/../data/sales.json');  // .json可省略
    // 輸出成json檔
    // res.json(data);
    // res.json(data[1]);
    // 下面的sales-json是template不需要加斜線
    res.render('sales-json', { sales })
});

app.get('/try-qs', (req, res)=>{
    res.json(req.query);
})


// app.get('/try-post-form', (req, res)=>{
//     res.render('try-post-form',req.body);    // 有給資料
// })
// 取得urlencoded parser, 不使用qs lib, 而使用內建的querystring lib
// true就是使用qs套件的parse，false就是使用本身的bodyParser
// const urlencodedParser = express.urlencoded({extended: false});
// middleware
// urlencodedParser這個仲介軟體會塞到req.body，然後下面再把它轉成json回傳回去。
// app.post('/try-post-form', urlencodedParser, (req, res)=>{
//     req.body.haha = 'shin';
//     res.json(req.body);
// })

// 如果middleware寫在頂層，則用下方的寫法
// app.get('/try-post-form', (req, res)=>{
//     res.render('try-post-form');    // 沒給資料
// })
// app.post('/try-post-form', (req, res)=>{
//     req.body.haha = 'shin';
//     res.json(req.body);
// })

// 表單post
app.get('/try-post-form', (req, res)=>{
    res.render('try-post-form', {pageTitle:'測試表單'})
})
app.post('/try-post-form', (req, res)=>{
    // req.body.haha = 'shin';
    req.body.pageTitle = '測試表單-Post'
    res.render('try-post-form', req.body)
})

// 測試postman json post
app.post('/try-json-post', (req, res)=>{
    req.body.haha = 'shin';
    req.body.pageTitle = '測試表單-Json'
    req.body.contentType = req.get('Content-Type'); // 取得檔頭
    res.json(req.body)
})

app.get('/pending', (req, res)=>{

});

app.get('/ok', (req, res)=>{
    res.send('ok');
});

// app.get('/a.html', (req, res)=>{
//     res.send('/a.html from router');
// });

// 上面有/a.html路由就不會進到public的a.html
app.use(express.static('public'));

// 404一定要放在所有路由的最後面
app.use((req, res)=>{
    res.status(404)
    res.send(`
    <h2>找不到你要的頁面</h2>
    <h3>...</h3>
    `)
})


app.listen(3000, ()=>{
    console.log('server started')
})