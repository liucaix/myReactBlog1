
如果你刚开始学Promise,并且对链式调用不太熟悉,这道题很适合你加深理解.

### 题目: 实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中。

```js
const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

const mergePromise = ajaxArray => {
    // 在这里实现你的代码

};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log('done');
    console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]
```

这道题极其考验对Promise 链式调用的理解.建议仔细研究.

答案:

```js
const mergePromise = ajaxArray => {
    // 在这里实现你的代码
    const temp = []
    return ajax1()
        .then((resolve) => {
            temp.push(resolve)
            return ajax2()
        })
        .then((resolve) => {
            temp.push(resolve)
            return ajax3()
        })
        .then((resolve)=>{
            temp.push(resolve)
            return new Promise(
                (resolve,reject)=>{
                    resolve(temp)
                }
            //也可以这样
            //return Promise.resolve(temp)
            )
        })
};
```

