const body = document.querySelector("body");
const paintstr = "black";
let SIZE=20  //  will make this user definable later
let mousePressed = false;
//SetupBoard();

// listen for a mouseclick anywhere on the board and paint if mouse button is down
const squares = document.querySelector("#board_div");
squares.addEventListener('mouseover', (e) => {
    if (mousePressed) e.target.style.backgroundColor = paintstr;
});
squares.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = paintstr;
    mousePressed = true;
});
squares.addEventListener("mouseup", () => {
    mousePressed = false;
});




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
    console.log(boarddiv.clientWidth);
    lengthstr = boarddiv.clientWidth / SIZE + "px";
    console.log(lengthstr);

    for (i=0;i<SIZE;i++) {
        // setup div for row 1
        const rowdiv=document.createElement("div");
        divid = "row-"+i;
        rowdiv.setAttribute("id",divid);
        rowdiv.style.display = "flex";
        rowdiv.style.flexDirection ="row";
        console.log ("rowdiv:"+divid);

        for (j=0;j<SIZE;j++) {
            const div=document.createElement("div");
            divid = "sq-"+i+"-"+j;
            div.setAttribute("id",divid);
            div.setAttribute("class","square");
            
            div.style.width = lengthstr;
            div.style.height = lengthstr;
            
            
            //div.style.width = toString(500/SIZE) + "px";
            //div.style.height = toString(500/SIZE) + "px";
            console.log("sqdiv:"+divid)
            rowdiv.appendChild(div);
        }
        boarddiv.appendChild(rowdiv);
    }
    //body.appendChild(boarddiv);
}

/* sample code to borrow

        const div = document.createElement("div");
        const btnpa = document.createElement("button");

        div.setAttribute("id","playagaindiv");
        div.setAttribute("class","resultdivs");
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        btnpa.textContent = "Play again";
        btnpa.style.width = "200px";
        btnpa.addEventListener('click', Restart);
        
        div.appendChild(btnpa);
        body.appendChild(div);

*/