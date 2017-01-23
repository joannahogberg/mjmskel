var boxes = document.getElementsByClassName('about-h1');

for(i=0; i<boxes.length; i++){
  boxes[i].addEventListener('click',function(){
    toggleActive(this.parentNode);
  });
}
var arrow = document.getElementsByClassName('arrow-about');
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', function(){toggleActive(this.parentNode);});
}




function toggleActive(div){
  var kids = div.children;
  var closeSkew = document.getElementsByClassName('skew-box');
//If any clicked skewbox contains class: is-active, remove class from all skewbox elements and from all its children.
  if(div.classList.contains('is-active')){
    closeAll();
  }
//If clicked box doesnt contain 'is-active' remove it from all other boxes but this one and then togge 'is-active' on this box.
  else{
    for (var i = 0; i < closeSkew.length; i++) {
      if(closeSkew[i]!==div){
        closeSkew[i].classList.remove('is-active');
        var skewKids = closeSkew[i].children;

        for (var j = 0; j < skewKids.length; j++) {
          skewKids[j].classList.remove('is-active');
          }
        }
      }
      div.classList.toggle('is-active');
        for(k=0; k<kids.length; k++){
          kids[k].classList.toggle('is-active');
        }
  }
}

//Closes all skewboxes.
function closeAll(){
  var closeSkew = document.getElementsByClassName('skew-box');
  for (var i = 0; i < closeSkew.length; i++) {

    closeSkew[i].classList.remove('is-active');
    var skewKids = closeSkew[i].children;
    for (var j = 0; j < skewKids.length; j++) {
      skewKids[j].classList.remove('is-active');
      }
    }
}
