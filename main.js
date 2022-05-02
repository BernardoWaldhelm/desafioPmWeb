var valor = 100;
//Barra sem produto adicionado a sacola

if (valor == 100){
	$("body").append("<section>Faltam mais R$100 para o frete sair de graça!</section>");
	$('section').addClass('freteGratis');
} 



$(".botao-comprar").click(function (event) {
	var	total = document.querySelector('.total');
	var valorTotal = total.children[1].innerHTML;
	console.log(valorTotal);
	var novoValor = parseFloat(valorTotal.split(' ')[1]);
	console.log(novoValor);
	
	var subtotal = document.querySelector('.subtotal');
	var novoValorTotal = subtotal.children[1].innerHTML;
	var novoSubTotal = parseFloat(novoValorTotal.split(' ')[1]);
	console.log(novoSubTotal);
	
	
	var valor = 100 - novoValor;

	function atualizaProgresso() {
		var i = 0;
			if (i == 0 ){
				i = 1;
				var element = document.querySelector(".freteGratis div");
				var width = 1;
				var id = setInterval(frame, 10);
				function frame () {
					if (width >=100){
						clearInterval(id);
						i = 0;
					}else{
						width = novoSubTotal ;
						element.style.width = width +"%";
						
						}
					}
				} 
		}
		//Barra com produto sem frete grátis
		if (valor < 100 && valor > 0.01) {
			
			$("body").append("<section><div></div><p>Faltam mais R$"+valor+" para o frete sair de graça!<p></section>");
			$('section').addClass('freteGratis'); 
			
			$(".frete").append("<h6>Faltam mais R$"+valor+" para o frete sair de graça!</h6>");
			atualizaProgresso();
		
		}
		 //Barra com frete grátis
		else if (valor <= 0){
			var subtotal = document.querySelector('.subtotal');
			
			var novoValorTotal = subtotal.children[1].innerHTML;
			console.log(novoValorTotal);
			
			//$(".subtotal").append(novoValorTotal);
			
			var frete = document.querySelector('.frete');
			$(frete).addClass("escondido");
			
			$("body").append("<section>PARABÉNS! O FRETE É POR NOSSA CONTA.</section>");
			$('section').addClass('freteGratis');
			$('section').addClass('freteGratis__completo');
			$(".total").prepend("<h6>VOCÊ GANHOU FRETE GRÁTIS</h6>");
			$("h6").addClass('ganhouFrete');
			$(".totais .clearfix").prepend("<h6>VOCÊ GANHOU FRETE GRÁTIS</h6>");
			$("h6").addClass('ganhouFrete');
		}	
	});
	
$(".remover").click(function (event) {
	var	total = document.querySelector('.total');
	var valorTotal = total.children[1].innerHTML;
	console.log(valorTotal);
	var novoValor = parseFloat(valorTotal.split(' ')[1]);
	console.log(novoValor);
	
	var subtotal = document.querySelector('.subtotal');
	var novoValorTotal = subtotal.children[1].innerHTML;
	var novoSubTotal = parseFloat(novoValorTotal.split(' ')[1]);
	console.log(novoSubTotal);
	
	
	var valor = 100 - novoValor;

	function atualizaProgresso() {
		var i = 0;
			if (i == 0 ){
				i = 1;
				var element = document.querySelector(".freteGratis div");
				var width = 1;
				var id = setInterval(frame, 10);
				function frame () {
					if (width >=100){
						clearInterval(id);
						i = 0;
					}else{
						width = novoSubTotal ;
						element.style.width = width +"%";
						
						}
					}
				} 
		}
		//Barra com produto sem frete grátis
		if (valor < 100 && valor > 0.01) {
			
			$("body").append("<section><div></div><p>Faltam mais R$"+valor+" para o frete sair de graça!<p></section>");
			$('section').addClass('freteGratis'); 
			
			$(".frete").append("<h6>Faltam mais R$"+valor+" para o frete sair de graça!</h6>");
			atualizaProgresso();
		
		}
		 //Barra com frete grátis
		else if (valor <= 0){
			var subtotal = document.querySelector('.subtotal');
			
			var novoValorTotal = subtotal.children[1].innerHTML;
			console.log(novoValorTotal);
			
			//$(".subtotal").append(novoValorTotal);
			
			var frete = document.querySelector('.frete');
			$(frete).addClass("escondido");
			
			$("body").append("<section>PARABÉNS! O FRETE É POR NOSSA CONTA.</section>");
			$('section').addClass('freteGratis');
			$('section').addClass('freteGratis__completo');
			$(".total").prepend("<h6>VOCÊ GANHOU FRETE GRÁTIS</h6>");
			$("h6").addClass('ganhouFrete');
		}	
	});
