'use strict'
const chckBtn = document.querySelector("#checkButton");
chckBtn.addEventListener('click', () => {
    const val = document.querySelector("#evenOdd");
    const ansq1 = document.querySelector("#evenOddans")
    if (val.value && Math.ceil(val.value) == val.value) {
        if (val.value % 2 == 0) {
            ansq1.textContent = 'Even';
        }
        else {
            ansq1.textContent = 'Odd';
        }
    }
    else {
        alert('plz enter valid input');
    }
    val.value = '';
});

let attempt = 3;
let predictedNum = -1;
const randBtn = document.querySelector('#randButton');
randBtn.addEventListener('click', (e) => {
    let ans = document.querySelector('#randAns');
    const inp = document.querySelector('#randomNumber');
    if (inp.value != '' && Number(inp.value) > 1 && Number(inp.value) < 10) {
        //for number between 1 and 10
        if (attempt === 3) {
            predictedNum = Math.ceil((Math.random() * 8) + 1.00000001);
        }
        console.log('predicted number', predictedNum);

        if (predictedNum === Number(inp.value)) {
            ans.textContent = 'You have gussed correct';
            attempt = 0;
        }
        else if (predictedNum > Number(inp.value)) {
            ans.textContent = 'Too low';
        }
        else {
            ans.textContent = 'Too high';
        }
        attempt -= 1;
        e.target.textContent = `${attempt} attempts remaining`
    }
    else {
        alert('plz enter valid input');
    }
    inp.value = '';
    if (attempt <= 0) {
        attempt = 3;
        e.target.textContent = `show result`;
    }
    // console.log('attempt', attempt);
});

const fruitbtn = document.querySelector('#fruitbtn');
let arr = [];
fruitbtn.addEventListener('click', () => {
    const inp = document.querySelector('#inpFruit');
    const op = document.querySelector('#fruitList');
    if (inp.value) {
        arr.push(inp.value);
        inp.value = "";
        op.innerHTML = '';
        arr.sort();
        const lis = document.createElement('ol');
        lis.setAttribute('type', '1');
        for (let i of arr) {
            const li = document.createElement('li');
            li.textContent = i;
            lis.append(li);
        }
        op.append(lis);
    }
    else {
        alert('invalid input');
    }
})



