function changeBackgroundColor(color) {
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundColor = color;
}

document.getElementById('myBtn').addEventListener('click',() => changeBackgroundColor('#752932'));


