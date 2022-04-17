let cols, rows;
let w = 40; //cell size
let cells = [];

function setup() {
    createCanvas(400, 400);
    cols = floor(width/w);
    rows = floor(height/w);
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            let cell = new Cell(i, j);
            cells.push(cell);
        }
    }
}
  
function draw() {
    background(51);
    for(let i = 0; i < cells.length; i++){
        cells[i].show();
    }
}

class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        //0 eshte majtas lart->djathtas lart
        //1 eshte djathtas lart->djathtas posht
        //2 eshte djathtas posht-> majtas posht
        //3 eshte majtas posht->majtas lart
    }
    show(){
        let x = this.i*w;
        let y = this.j*w;
        stroke(255); //ngjyra e mureve e bardh
        if(this.walls[0]){
            line(x, y, x+w, y);
        }
        if(this.walls[1]){
            line(x+w, y, x+w, y+w);
        }
        if(this.walls[2]){
            line(x+w, y+w, x, y+w);
        }
        if(this.walls[3]){
            line(x, y+w, x, y);
        }
    }
    //deri tani punova nga ai tutoriali me shum
}
