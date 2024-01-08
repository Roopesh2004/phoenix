boxes = document.querySelectorAll(".box")
reset = document.querySelector(".reset")
msg = document.querySelector(".X")

let x = true;
winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("BOX IS CLICKED");
        if (x) {
            box.innerText = "X";
            x = false
        } else {
            box.innerText = "O";
            x = true;
        }
        box.disabled = true;
        checkw();

    });


});

const checkw = () => {
    for (pattern of winpatterns) {
        let pass1val = boxes[pattern[0]].innerText;
        let pass2val = boxes[pattern[1]].innerText;
        let pass3val = boxes[pattern[2]].innerText;
        if (pass1val != "" && pass2val != "" && pass3val != "") {
            if (pass1val == pass2val && pass2val == pass3val) {
                if (pass1val == "X") {
                    msg.innerText = "player X won!";
                    console.log("Player X won");
                    msg.style.display = "block";
                } else {
                    msg.innerText = "player o won!";
                    msg.style.display = "block";
                }
            }
        }

    }
}
reset.onclick = () => {
    console.log("reset")
    for (let i = 0; i < boxes.length; i++) {
        box = boxes[i];
        box.disabled = false;
        box.innerText = ""
        msg.innerText = ""

    }
}