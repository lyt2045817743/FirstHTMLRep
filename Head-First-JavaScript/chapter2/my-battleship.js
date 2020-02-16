var location1=Math.floor(Math.random()*5)
var location2=location1+1;
var location3=location1+2;
var guess;
var guesses=0;
var hits=0;
var isSunk=false;
while(!isSunk){
	guess=parseInt(prompt("请输入一个数：(0-6)"),10);
	if(guess>=0&&guess<=6){
		if(guess==location1||guess==location2||guess==location3){
			hits++;
			guesses++;
			if(hits==3){
				isSunk=true;
				alert('军舰已被击毁，总共用了'+guesses+"次")
			}
		}
		else{
			guesses++;
		}
	}
	else{
		alert('输入格式错误，请重新输入！');
	}
}