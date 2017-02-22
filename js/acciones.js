// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizo a la izquierda",function(){"Aplicacion5","Aceptar"});
});

$('#derecha').on("swiperight",function(){
	navigator.notification.confirm("¿que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(2);
			break;
			
			case 2:
			navigator.notification.vibrate(1000);
			break;
		}
	},"Aplicacion8","Beep,Vibrar,Cancelar");
	
});
	},false);
});