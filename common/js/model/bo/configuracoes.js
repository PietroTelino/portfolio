var menuDropdown = false;

function encaminharPagina(link){
	window.location.href = link;
}

function navegarSuavemente(id){
	hash = id;
	$('html, body').animate({
    	scrollTop: $(hash).offset().top-89

    }, 800, function(){   
	    // Add hash (#) to URL when done scrolling (default click behavior)
	    // window.scrollTo(0, window.pageYOffset - 40);
	    // window.location.hash = hash;

    });	
}

function puxarDropdown(){
	document.getElementById('menu-dropdown').style = ("margin-top: 90px; transition: all .4s;");
	menuDropdown = true;
}

function tirarDropdown(){
	document.getElementById('menu-dropdown').style = ("margin-top: -100%; transition: all 1s;");
	menuDropdown = false;
}

function mudarMenuDropdown(){
	if(menuDropdown == false){
		puxarDropdown();
	}
	else{
		tirarDropdown();	
	}	
}