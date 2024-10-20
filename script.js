const body = document.querySelector("body");
let SIZE=50  //  will make this user definable later

SetupBoard();

// listen for a mouseclick anywhere on the board
const squares = document.querySelector(".board");
squares.addEventListener('mouseover', paintSquare);



/* ======================= */

function paintSquare(e)
{
    // working but need to test for out of bounds etc.
    
    console.log(e);
    console.log(e.target.id)
    e.target.style.backgroundColor = "red";
}

function SetupBoard() {
    let i=0;
    let j=0;
    let divid="";

    const boarddiv = document.createElement("div");
    boarddiv.setAttribute("class","board");

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
            div.style.width = "20px";
            div.style.height = "20px";
            console.log("sqdiv:"+divid)
            rowdiv.appendChild(div);
        }
        boarddiv.appendChild(rowdiv);
    }
    body.appendChild(boarddiv);
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