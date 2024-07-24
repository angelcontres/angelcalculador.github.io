function iniciar(){
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  
  sumar(num1, num2);
  restar(num1, num2);
  multiplicar(num1, num2);
  dividir(num1, num2);
}

function sumar(num1,num2){
	let suma= num1+num2;
	document.getElementById("resultado1").innerHTML = "Resultado de la suma es: "+ suma;
}
function restar(num1,num2){
	
	let resta=num1-num2;
	document.getElementById("resultado2").innerHTML ="Resultado de la resta: " + resta;
}
function multiplicar(num1,num2){
	let multiplicar=num1*num2;
	document.getElementById("resultado3").innerHTML ="Resultado de la multiplicacion: "+ multiplicar;
}
function dividir(num1,num2){
	let dividir=num1/num2;
	document.getElementById("resultado4").innerHTML="Resultado de la division: "+dividir;
}