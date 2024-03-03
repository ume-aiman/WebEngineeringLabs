function plus(){
    var container = document.getElementById('container');
    var column = document.createElement('div');
    column.className = 'column';
    column.style.backgroundColor = getRandomColor();
    container.appendChild(column);
  }
  const myB1 = document.getElementById('b1');
  const myB2 = document.getElementById('b2');
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color f= '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function generate(){
    const gen = document.getElementsByClassName("column");
    for (i=0 ; i < gen.length ; i++){
        gen[i].style.backgroundColor = getRandomColor();
    }
}  

function gen(){
    var container = document.getElementById('container');
    var column = document.createElement('div');
    column.className = 'column';
    column.style.backgroundColor = generate();
    container.appendChild(column);
  }  
  myB1.onclick = plus;
  myB2.onclick = gen;
   
