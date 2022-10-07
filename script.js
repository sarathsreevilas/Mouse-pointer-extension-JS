const container = document.querySelector(".mouse-hightliter-extension");
const mouse_pointer = document.querySelector(".mouse-pointer-extension");

window.addEventListener("mousemove", mouseMove);

function mouseMove(event) {
  let x = event.clientX;
  let y = event.clientY;

  mouse_pointer.style.left = x + "px";
  mouse_pointer.style.top = y + "px";
}


function onKeyDown(event){
    if (event.shiftkey && event.code === "KeyC"){
        container.style.display = "none";
    }
}