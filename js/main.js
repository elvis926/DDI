/*(document).getElementById("opd").addEventListener('click',function abrir(){
  document.getElementById("vent").style.display="block";
  document.getElementById("menu").style.display="none";
});
(document).getElementById("x").addEventListener('click',function cerrar(){
  document.getElementById("vent").style.display="none";
});*/
function lanzar (){
  let dado1 = Math.floor(Math.random()*(7-1))+1;
  let dado2 = Math.floor(Math.random()*(7-1))+1;
  $({ deg: 0 }).animate({ deg: 360 }, {
    duration: 600,
    step: function (now) {
      var scale = (1 * now / 360);
      $('#dado1').css({
        transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
      });
      $('#dado2').css({
        transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
      });
    }
  });
  (document).getElementById("dado1").src="img/"+dado1+".png";
  (document).getElementById("dado2").src="img/"+dado2+".jpeg";
}




