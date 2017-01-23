// LANDING PAGE SCRIPTS--------------
// setting button clicks on figure1,2,3.
var figures = document.getElementsByClassName('hero-h1');
for(i=0; i<figures.length;i++){
  figures[i].addEventListener('click', function(){openCloseProfile(this.parentNode.id);});
}

//Function that opens the profile of employee.
function openCloseProfile(id){
//set get id. Set class is-active on figure. set class active on
  var name = document.getElementById(id);
  var kids = document.getElementById(id).children;

  name.classList.toggle('is-active');

  for(i=0; i<kids.length; i++){
    kids[i].classList.toggle('active');
  }
}

var icon = document.getElementsByClassName('arrow');

//creates an array of elements with the class "arrow" and adds eventlistener click.
for(i=0; i<icon.length; i++){
  icon[i].addEventListener('click',
  function(e){openCloseProfile(this.parentNode.getAttribute('id'));
  e = e || window.event;
  e.stopPropagation();
  });
}
