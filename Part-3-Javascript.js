var num1;
conDition(); 

function conDition(){
	
	num1 = prompt("Please enter a number from 1 to 10"); 	

	if(num1 >= 1 && num1 <= 10){
		
    	outNum(); 

	}else if(num1 < 1){
		alert("The number is too low for this function."); 	
		num1 = 0; 
		conDition();	

	}else if(num1 > 10){
		alert("The number is too high for this function.");
		num1 = 0; 
		conDition();
		
	}else{
		alert("That is not a number!"); 
		num1 = 0;
		conDition();
	}
}

function outNum(){
	do
	{
    	document.write(num1 + "<br>");
    	num1++;
	}while (num1 <= 300);

	document.write("############################<br>");	
	return true; 
}