let $results = document.getElementById("results");


const num = Array(45).fill().map((v, i) => i + 1);
const shuffle = [];

while (num.length > 0) {
    const rand_index = Math.floor(Math.random() * num.length);
    const spliced = num.splice(rand_index, 1);
    shuffle.push(spliced[0]);
}
let order = shuffle.slice(0, 6).sort((a, b) => a - b);
let bonus = shuffle[6];
console.log(order, bonus);

setTimeout(() => {
    let $ball = document.createElement('div');

    $ball.className = 'ball';
    $ball.innerText = 1;
    $results.appendChild($ball);
}, 1000);