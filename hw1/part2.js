#!/usr/bin/env node

function is_prime(n)
{
	for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++)
	{
		if (n%i == 0)
		{
			return false;
		}	
	}
	return true;
}

var fs = require('fs');
var outfile = "prime.txt";
var out = "";

var prime_list = new Array();
var i = 2;

while (prime_list.length < 100)
{
	if (is_prime(i))
	{
		prime_list.push(i);
	}
	i++;	
}

for (j in prime_list)
{
	out = out + prime_list[j] + ((j == prime_list.length - 1)?"":",");
}

fs.writeFileSync(outfile, out);  
