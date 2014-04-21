var max=4000000;
var num1 = 1;
var num2 = 2;
var fiboNumbers=[1,2];
var sum=0;
var evenSum=0;

var evenFibonacci = function()
{	
	for(var i=2; i < max; i++ )
	{   
		//generate fibonacci numbers
		sum = (num1 + num2);
		fiboNumbers.push(sum);
		num1 = num2;
		num2 = sum;		
	}
	//add the sum of even fibonacci numbers
	for(i=0; i < fiboNumbers.length; i++)
	{
		if( (fiboNumbers[i] % 2) === 0 )
		{
			evenSum += fiboNumber[i];
		}
	}
	console.log(evenSum);
}