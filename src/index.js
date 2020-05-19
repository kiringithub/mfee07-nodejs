const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('main', {name: 'Vic'});
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