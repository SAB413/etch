const body = document.querySelector("body");
let SIZE=20
let mousePressed = false;
let penclr = document.getElementById('pencolour');
SetupBoard();

// listen for a mouseclick anywhere on the board and paint if mouse button is down
const squares = document.querySelector("#board_div");
squares.addEventListener('mouseover', (e) => {
    if (mousePressed) e.target.style.backgroundColor = penclr.value;
});
squares.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = penclr.value;
    mousePressed = true;
    console.log(penclr.value);
});
squares.addEventListener("mouseup", () => {
    mousePressed = false;
});

// reset the board with the new number of squares
let btn = document.getElementById('reset_board');
let size = document.getElementById('dimn');
btn.onclick = () => {
    if (size.value <= 0 || size.value >63) return; 
    SIZE = size.value;
    SetupBoard(); 
}


/* ======================= */


function SetupBoard() {
    let i=0;
    let j=0;
    let divid="";
    let lengthstr="";

    const boarddiv = document.getElementById('board_div');
    // remove all the child divs - in case being called for 2nd time
    boarddiv.innerHTML = '';
    lengthstr = boarddiv.clientWidth / SIZE + "px";
    console.log(lengthstr);

    for (i=0;i<SIZE;i++) {
        // setup div for row 1
        const rowdiv=document.createElement("div");
        divid = "row-"+i;
        rowdiv.setAttribute("id",divid);
        rowdiv.style.display = "flex";
        rowdiv.style.flexDirection ="row";

        for (j=0;j<SIZE;j++) {
            const div=document.createElement("div");
            divid = "sq-"+i+"-"+j;
            div.setAttribute("id",divid);
            div.setAttribute("class","square");
            
            div.style.width = lengthstr;
            div.style.height = lengthstr;
            
            rowdiv.appendChild(div);
        }
        boarddiv.appendChild(rowdiv);
    }
}

