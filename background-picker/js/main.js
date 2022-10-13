document.getElementById('darkcyan').onclick = colorDarkCyan
document.getElementById('beige').onclick = colorBeige
document.getElementById('blue').onclick = colorBlue
document.getElementById('gray').onclick = colorGray
document.getElementById('mustard').onclick = colorMustard
  
function colorDarkCyan(){
  document.querySelector('body').style.backgroundColor = 'rgb(61, 126, 132)'
  document.querySelector('body').style.color = 'white'
}

function colorBeige(){
  document.querySelector('body').style.backgroundColor = 'rgb(211, 210, 183)'
  if (document.querySelector('body').style.color = 'white'){
    document.querySelector('body').style.color = 'black'
  }
}

function colorBlue(){
  document.querySelector('body').style.backgroundColor =  '#8b9ce4'
  document.querySelector('body').style.color = 'white'
}

function colorGray(){
  document.querySelector('body').style.backgroundColor = 'lightgray'
  if (document.querySelector('body').style.color = 'white'){
    document.querySelector('body').style.color = 'black'
  }
}

function colorMustard(){
  document.querySelector('body').style.backgroundColor = 'rgb(244, 213, 89)'
  document.querySelector('body').style.color = 'white'
}