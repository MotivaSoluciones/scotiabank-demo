
var login = function() {

	return {
		init: function(){
			$('#idParse').on('click', function(){
    	
		
				var respuesta = $('#btnRedc').val();
				try {
					var esNumerico = parseInt(respuesta);
					

					if( null === respuesta.trim()  || respuesta.trim() === ''){
						$( "#dialog" ).dialog();
					}else if(isNaN(esNumerico)){
						console.log("NO es numerico")
						location.href = "index.html";
					}else{
						console.log("es numerico")
						location.href = "beyond/index.html";
					}
					
					
				 }
				 catch (e) {
					
				}
		
		
			});
		}
	}
    

}();