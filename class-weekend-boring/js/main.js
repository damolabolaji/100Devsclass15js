document.querySelector('#check').addEventListener('click', check)

function check() {

  
  let day = document.querySelector('#day').value;
  day = day.toLowerCase();

  //Conditionals go here
//console.log('weekend')

if (day == 'saturday' || day == 'sunday'){
  document.querySelector('#imgclass').style.display = 'none'
  document.querySelector('#placeToSee').innerText = 'Its the weekend'
  document.querySelector('#imgweekend').style.display = 'block'
}

if (day == 'thursday' || day == 'tuesday'){
  document.querySelector('#imgweekend').style.display = 'none'
  document.querySelector('#placeToSee').innerText = 'Its Class day'
  document.querySelector('#imgclass').style.display = 'block'
}

if (day !== 'saturday' && day !== 'sunday' && day !== 'thursday' && day !== 'tuesday'){
  document.querySelector('#placeToSee').innerText = 'What is this?'
}
}
