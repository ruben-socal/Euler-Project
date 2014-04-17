var max=1000;
var total=0;
var three=0;
var five=0;

var multiples = function()
{
	while( (total + three + five) < max)
	{
		three+=3;
		five+=5;
		total += (three + five);
	}
}
