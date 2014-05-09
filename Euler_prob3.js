var max=10000;
var largeNumber=600851475143;
var primeFactor=0;

var largestFactor = function()
{
	//generate prime numbers
	//add prime that divides into largeNumber to primefactor 
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
						if( (largeNumber % i) === 0)
						{
							primeFactor = i;			
						}						
					}
				}
			}
		}
	}	     
	console.log(primeFactor);
};