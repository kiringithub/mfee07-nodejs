let a=1;
function getA(){
    a++;
    return a;
}

console.log('Hi exp01');

// getA()是呼叫，這裡沒有()，只是把getA匯出，讓匯入他的人得到getA的參照。
module.exports = getA;