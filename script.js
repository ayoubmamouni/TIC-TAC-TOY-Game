const cards = Array.from(document.querySelectorAll('.card'))
const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [7, 8, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

let [firstPlayer, secondPlayer, count] = [
    [],
    [], 0
]

function check(array) {
    let finalResult = false;
    for (let items of winners) {
        let res = item.every(val => array.indexOf(val) !== -1)
        if (res) {
            finalResult = true;
            break;
        }
    }
    return finalResult;
}

function winnerplayer(p) {
    const modal = document.createElement('div')
    const player = document.createTextNode(p)
    const replay = document.createElement('button')

    modal.classList.add('winner')
    modal.appendChild(player)
    replay.appendChild(document.createTextNode('Replay'))
    replay.onclick = () => {
        rep()
    };
    modal.appendChild(replay)
    document.body.appendChild(modal)
}


function draw() {
    if (this.classList == 'card') {
        count++
        if (count % 2 !== 0) {
            this.classList.add('x')
            firstPlayer.push(Number(this.dataset.index))
            if (check(firstPlayer)) {
                winnerplayer('Congrats player one you win')
            }
        } else {
            this.classList.add('o')
            secondPlayer.push(Number(this.dataset.index))
            if (check(secondPlayer)) {
                winnerplayer('Congrats player twi you win')
            }
        }
        if (count === 9) {
            winnerplayer('Draw')
        }
    }

}


function rep() {
    const w = document.querySelector('.winner')
    firstPlayer = []
    secondPayer = []
    count = 0;
    w.remove;
}

cards.forEach(card => card.addEventListener('click', draw))