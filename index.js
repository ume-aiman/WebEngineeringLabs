let nav = document.querySelector(".navigation");

function triggerNext(){

     let image = document.querySelector(".image")
    //let store= nav.appendChild(image)
    let container = document.getElementById("cont");
    let store= nav.appendChild(container)
     nextImage = image.nextSibling(Node.image);
     nextImage.nextSibling(image);

}


function triggerPrevious(){
    let image = document.querySelector(".image")
    //let container = document.getElementById("cont");
    let store= nav.appendChild(image)
    let container = document.getElementById("cont");
    previousImage = image.previousElementSibling(Node.image);
    previousImage.previousElementSibling(image);
    store.appendChild(container);
}