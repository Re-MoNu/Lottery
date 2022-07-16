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

for (let i = 0; i < order.length; i++) {
    setTimeout(() => {
        let $ball = document.createElement('div');
        $ball.className = 'ball';
        $ball.innerText = order[i];
        setColor(i, $ball);
        $results.appendChild($ball);
    }, 1000 * (i + 1));
}
let $bonus = document.getElementById("extra");
setTimeout(() => {
    let $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.innerText = bonus;
    setColor(5, $ball);
    $results.appendChild($ball);
}, 7000);

function setColor(i, $ball) {
    if (order[i] < 10) {$ball.style.backgroundColor = 'red'; $ball.style.color = 'white';}
    else if (order[i] < 20) {$ball.style.backgroundColor = 'orange'; $ball.style.color = 'black';}
    else if (order[i] < 30) {$ball.style.backgroundColor = 'yellow'; $ball.style.color = 'black';}
    else if (order[i] < 40) {$ball.style.backgroundColor = 'blue'; $ball.style.color = 'white';}
    else if (order[i] < 46) {$ball.style.backgroundColor = 'green'; $ball.style.color = 'white';}
}