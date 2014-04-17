var max=10;
var holder1 = 1;
var holder2 = 2;
var sum=0;

var fibonacci = function()
{
	for(var i=2; i < max; i++ )
	{
		sum = (holder1 + holder2);
		holder1 = holder2;
		holder2 = sum;		
	}
	console.log(sum);
}