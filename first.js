var birthYear;
var ageDays;
function ageInDays() {
birthYear=prompt("what year where you born?");
ageDays=(2020-birthYear)*365;
document.querySelector(".flex-box-result").innerHTML="your age in days is:"+ageDays;
}
function reset() {
	document.querySelector(".flex-box-result").innerHTML=" ";
	ageDays=0;
	birthYear=0;
}
function generateCat(){
	var image= document.createElement('img');
	var div= document.getElementById('cat');
	image.src="E:/jquery-pract/tenor.gif";
	div.appendChild(image);
}
function rpsGame(yourChoice){
	
	var humanChoice=yourChoice.id;
	var compChoice = comSelect();
	console.log(humanChoice+ " " + compChoice)
	var winner=rps(humanChoice, compChoice);
	console.log(winner);
	var msg=message(winner);
	console.log(msg);
	display(humanChoice,compChoice,msg);	

}
function comSelect(){
	var index=Math.floor(Math.random()* 3);
	return document.getElementById('Rock-paper-scissor').children[index].id;;
}
function rps(hc,cc){
	if(hc==cc)
	{
		return "tie";
	}
	else if(hc=="rock" && cc=="scissor" || hc=="scissor" && cc=="paper" || hc=="paper" && cc=="rock")
	{
		return "you";
	}
	else
	{
		return "computer";
	}

}
function message(win){
	var text, clr;
	if(win=="tie"){
	return {
		text:"This was a draw!",
		clr:"orange"
	};
	}
	else if(win=="you"){
		return{
			text:"You won!",
			clr:"Green"
		};
	}
	else{
		return{
			text:"computer won!",
		    clr:"Red"
		};
	}
}
function display(h,c,m){
	var parent=document.getElementById('Rock-paper-scissor');
		//var child1=document.getElementById(h);
		var child1=document.createElement('img');
		child1.src = document.getElementById(h).src;
		console.log(child1);
		var child2=document.createElement('p');
		child2.innerHTML=m.text;
		child2.style.color=m.clr;
		child2.style.fontSize="xx-large";
		//var child3=document.getElementById(c);
		var child3=document.createElement('img');
		child3.src=document.getElementById(c).src;
		parent.innerHTML=" ";
		parent.appendChild(child1);
		parent.appendChild(child2);
		parent.appendChild(child3);
}
var buton=document.getElementsByTagName('button');
let colorList=[];
for(var i=0;i<7;i++)
{
	colorList.push(buton[i].classList[1]);
}
function clr(){
	var el=document.querySelector(".selectLIst");
	var btnclr=getclr(el.value);
	
		for(var i=0;i<7;i++){
			
			buton[i].classList.remove(buton[i].classList[1]);
			if(el.value=="random"){
				var index=Math.floor(Math.random(0)*4);
				buton[i].classList.add(btnclr[index]);
			}
			else if(el.value=="reset"){
				buton[i].classList.add(btnclr[i]);
			}
			else
			
				buton[i].classList.add(btnclr);
			}
		}

function getclr(val){
	var cc={
		random:{clr:["btn-success","btn-primary", "btn-danger", "btn-warning"]},
		red:{clr:"btn-danger"},
		green:{clr:"btn-success"},
		blue:{clr:"btn-primary"},
		yellow:{clr:"btn-warning"},
		reset:{clr:[colorList[0],colorList[1],colorList[2],colorList[3],colorList[4],colorList[5],colorList[6]]}
	};
	return cc[val].clr;
}


	


