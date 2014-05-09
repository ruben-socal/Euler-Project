var max=4000000;
var num1 = 1;
var num2 = 2;
var sum=0;
var evenSum=2;

var evenFibonacci = function()
{	
	//generate fibonacci numbers
	//add even fibonacci numbers to evenSum
	while( num2 < max )
	{   		
		sum = (num1 + num2);		
		if( (sum % 2) === 0 )
		{
			evenSum += sum;
		}
		num1 = num2;
		num2 = sum;		
	}	
	console.log(evenSum);
};