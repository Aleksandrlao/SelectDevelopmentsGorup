jQuery(document).ready(function($) {
	
	function highlight(){
		var atags=document.getElementsByTagName("li");
		for(i in atags){
			if(atags[i].className=="h_navi"){
				if(document.location.href==atags[i].firstChild.href){
					atags[i].className = "active";
				}
			}
		}
	}
	highlight();

});