var counter = 0;
let flag = true;
var array = [];
var winner;

function start(n) {

    if (counter < 9) {
        if (flag) {
            n.classList.add("fill-x");
            flag = false;
            counter++;
            array[(n.id) - 1] = 'x';
            n.onclick = 'none';
        } else {
            n.classList.add("fill-o");
            flag = true;
            counter++;
            array[(n.id) - 1] = 'o';
            n.onclick = 'none';
        }
    }
    if (counter == 9) {
        document.querySelector(".board").className = 'board draw game-over'
            // n.parentNode.classList.add('draw');
        document.querySelector("body").setAttribute("onmousedown", "rest()")
    }



    for (let i = 0; i < array.length; i += 3) {
        if (array[i] != '' && (array[i] == array[i + 1]) && (array[i + 1] == array[i + 2])) {
            winner = array[i]

            if (winner == 'x') {
                document.querySelector(".board").className = 'board win-x'
                    // n.parentNode.classList.add('win-x')
                if (i == 0) {
                    // document.getElementById('line1').style.display='block';
                    let line = document.getElementById('line')
                    line.style.transform = 'rotate(90deg)'
                    line.style.marginTop = '-66%'
                    line.style.display = 'block'
                }
                if (i == 3) {
                    document.getElementById('line').style.transform = 'rotate(90deg)';
                    document.getElementById('line').style.display = 'block';
                }
                if (i == 6) {
                    // document.getElementById('line2').style.display='block';
                    let line = document.getElementById('line')
                    line.style.transform = 'rotate(90deg)'
                    line.style.marginTop = '66%'
                    line.style.display = 'block'
                }
                document.querySelector("body").setAttribute("onmousedown", "rest()")
            }
            if (winner == 'o') {
                document.querySelector(".board").className = 'board win-o'
                    // n.parentNode.classList.add('win-o')
                if (i == 0) {
                    // document.getElementById('line1').style.display='block';
                    let line = document.getElementById('line')
                    line.style.transform = 'rotate(90deg)'
                    line.style.marginTop = '-66%'
                    line.style.display = 'block'
                }
                if (i == 3) {
                    document.getElementById('line').style.transform = 'rotate(90deg)';
                    document.getElementById('line').style.display = 'block';
                }
                if (i == 6) {
                    // document.getElementById('line2').style.display='block';
                    let line = document.getElementById('line')
                    line.style.transform = 'rotate(90deg)'
                    line.style.marginTop = '66%'
                    line.style.display = 'block'
                }
                document.querySelector("body").setAttribute("onmousedown", "rest()")
            }

        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] != '' && (array[i] == array[i + 3]) && (array[i + 3] == array[i + 6])) {
            winner = array[i]

            if (winner == 'x') {
                document.querySelector(".board").className = 'board win-x'
                console.log(i)
                if (i == 1) {
                    document.getElementById('line').style.display = 'block';
                }
                if (i == 2) {
                    // document.getElementById('line3').style.display='block';
                    let line = document.getElementById('line')
                    line.style.marginLeft = '66%'
                    line.style.display = 'block'
                }
                if (i == 0) {
                    // document.getElementById('line4').style.display='block';
                    let line = document.getElementById('line')
                    line.style.marginLeft = '-66%'
                    line.style.display = 'block'
                }
                document.querySelector("body").setAttribute("onmousedown", "rest()")
            }

            if (winner == 'o') {
                document.querySelector(".board").className = 'board win-o game-over'
                    // n.parentNode.classList.add('win-o')
                console.log(i)
                if (i == 1) {
                    document.getElementById('line').style.display = 'block';
                }
                if (i == 2) {
                    // document.getElementById('line3').style.display='block';
                    let line = document.getElementById('line')
                    line.style.marginLeft = '66%'
                    line.style.display = 'block'
                }
                if (i == 0) {
                    // document.getElementById('line4').style.display='block';
                    let line = document.getElementById('line')
                    line.style.marginLeft = '-66%'
                    line.style.display = 'block'
                }
                document.querySelector("body").setAttribute("onmousedown", "rest()")
            }


        }
    }




    if ((array[0] == array[4]) && (array[4] == array[8])) {
        winner = array[0]
        if (winner == 'x') {
            document.querySelector(".board").className = 'board win-x game-over'
                // n.parentNode.classList.add('win-x')
            document.getElementById('line').style.transform = 'rotate(-45deg)';
            document.getElementById('line').style.display = 'block';
            document.querySelector("body").setAttribute("onmousedown", "rest()")
        }
        if (winner == 'o') {
            document.querySelector(".board").className = 'board win-o game-over'
                // n.parentNode.classList.add('win-o')
            document.getElementById('line').style.transform = 'rotate(-45deg)';
            document.getElementById('line').style.display = 'block';
            document.querySelector("body").setAttribute("onmousedown", "rest()")
        }
    }
    if ((array[2] == array[4]) && (array[4] == array[6])) {
        winner = array[2]
        if (winner == 'x') {
            document.querySelector(".board").className = 'board win-x game-over'
                // n.parentNode.classList.add('win-x')
            document.getElementById('line').style.transform = 'rotate(45deg)';
            document.getElementById('line').style.display = 'block';
            document.querySelector("body").setAttribute("onmousedown", "rest()")
        }
        if (winner == 'o') {
            document.querySelector(".board").className = 'board win-o game-over'
                // n.parentNode.classList.add('win-o')
            document.getElementById('line').style.transform = 'rotate(45deg)';
            document.getElementById('line').style.display = 'block';
            document.querySelector("body").setAttribute("onmousedown", "rest()")
        }

    }

}

function rest() {
    counter = 0;
    array = [];
    flag = true;
    winner = '';
    let tiles = document.querySelectorAll(".tile")
    document.querySelector(".board").className = "board"
    tiles.forEach((item, index) => {
        tiles[index].className = "tile";
        tiles[index].setAttribute('onclick', 'start(this)');
    })
    let line = document.querySelectorAll('.l')
    line.forEach((item, index) => {
        // line[index].style.display='none';
        line[index].style = '';
    })
    document.querySelector("body").removeAttribute("onmousedown")
}