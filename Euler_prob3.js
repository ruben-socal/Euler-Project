var max=10000;
var primeNumbers = [2,3,5,7];
var hits=[];
var largeFactor=600851475143;
var primeFactor=0;

var largestFactor = function()
{
	//generate prime numbers
	for(var i=4; i < max; i++ )
	{
		if( (i % 2) !== 0)
		{		
			if( (i % 3) !== 0)
			{		
				if( (i % 5) !== 0)
				{
					if( (i % 7) !== 0)
					{
						primeNumbers.push(i);						
					}
				}
			}
		}
	}
	//find prime factors that divided into large number
	for( i=0; i < primeNumbers.length; i++ )
	{
		if( (largeFactor % primeNumbers[i]) === 0)
		{
			hits.push(primeNumbers[i]);			
		}
	}

	var largest = hits[hits.length-1];  
     
	console.log(largest);

}