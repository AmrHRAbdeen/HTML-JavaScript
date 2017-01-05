
function ColorGenerator ()
{
	// if we use .split('') it will split the array into characters 
	//But if we sue .split('one space here') it will split the array into strings / words.
var ColorComb ='0123456789ABCDEF'.split('');
var Color = '#';
for (var i=0;i<6;i++)
{
	Color+=ColorComb[Math.round(Math.random()*15)];
}
return Color;
}

function RandomShape ()
{
  var randomized;
  randomized=(Math.floor(Math.random()*500));

return randomized;
}

var ClickedTime , Creationtime , ReactionTime ,RandomTime; 

function Display_Again () 
	{
		
	// setTimeout works as a delay function and its Syntax is setTimeout( function(){} , delay period in millisecond);
	// and means: run that function after that period of time
	RandomTime = Math.floor(Math.random()*5000);
	setTimeout (function()  

	{   if(Math.random() >0.5)
		{
		document.getElementById("RedSquare").style.borderRadius="100px";
		}
		else
		{
		document.getElementById("RedSquare").style.borderRadius="0";
		}
		var top =Math.floor(Math.random()*280);
		var left=Math.floor(Math.random()*800);
		document.getElementById("RedSquare").style.top=top+"px";
		document.getElementById("RedSquare").style.left=left+"px";
		document.getElementById("RedSquare").style.backgroundColor=ColorGenerator();
		document.getElementById("RedSquare").style.display="block";
		//Date.now() is a function whenver it's called it stores its value in the caller , its value is the time from back in 90th till now. 
		Creationtime=Date.now();
		
	},RandomTime);
	}
	
	document.getElementById("RedSquare").onclick=function()
	{
		ClickedTime=Date.now();
		ReactionTime=(ClickedTime-Creationtime)/1000;
		document.getElementById("TimeTable").innerHTML=ReactionTime;
		//document.getElementById("RedSquare").style.display="none"; or Code it pro. as following
		this.style.display="none"; // this is refering to the RedSquare we don't need to repeat the same command
		// to hid a style we set the style.dispaly to none .To show it back we set style.display to block
		Display_Again();
	}
		Display_Again();