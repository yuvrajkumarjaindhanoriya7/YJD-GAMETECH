// for gravity (developer can edit this according to his need
let obj = document.getElementById("object");

let position = 0;
let ground = 00; // ground level

function throwObject() {

  function fall() {
    position += 20; 
    obj.style.top = position + "px";

    if (position < ground) {
      requestAnimationFrame(fall);
    }
  }

  fall();
}


// colision logic
function update() {
    if (isTouching(object, object)) {
        //function 
      ;
    }
    //function 
  ;
} //developer can edit this according to his need


