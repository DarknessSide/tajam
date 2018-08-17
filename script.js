
function moreclick(){
	var img=document.getElementsByClassName('exertiselogo')
	img.src="img/if_aaqqdqqas_3305205.png"
}
var position=0;
function loadmore(){
	position+=500;
	if(position>500) position=0;
	var div= document.getElementById('worksphotos');
	div.style.bottom=position+"px";
}
var activepeople=3;
console.log(activepeople);
function active(){
	var personname=document.getElementById('peoplename');
	var personposition=document.getElementById('peopleposition');
	if ( activepeople==1){
		var person=document.getElementById('people1');
		personname.innerHTML="Roza Mimoza";
		personposition.innerHTML="Engineering";
	}
	if ( activepeople==2){
		var person=document.getElementById('people2');
		personname.innerHTML="Andrew Thompson";
		personposition.innerHTML="Art";
	}
	if ( activepeople==3){
		var person=document.getElementById('people3');
		personname.innerHTML="Jane Galadriel";
		personposition.innerHTML="Ceo tengkurep";
	}
	if ( activepeople==4){
		var person=document.getElementById('people4');
		personname.innerHTML="Charlize Theron";
		personposition.innerHTML="Art";
	}
	if ( activepeople==5){
		var person=document.getElementById('people5');
		personname.innerHTML="Eric Viva";
		personposition.innerHTML="Producer";
	}
	person.width=60;
	person.height=60;
}
active();
function sliderleft(){
	activepeople-=1;
	if(activepeople<1) activepeople=5;
	for(var i=0;i<5;i++){
		reset(document.getElementsByClassName('peoples')[i]);
	}
	active();
}
function sliderrigth(){
	activepeople+=1;
	if(activepeople>5) activepeople=1;
	for(var i=0;i<5;i++){
		reset(document.getElementsByClassName('peoples')[i]);
	}
	active();
}
function reset(person){
	person.width=45;
	person.height=45;
}