const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send('test ok !!!!!!!!!!!!!');
});

app.get('/a.html', (req, res)=>{
    res.send('/a.html from router');
});

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