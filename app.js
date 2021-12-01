


function updateOutput(){

	var p1 = {
		x: parseInt(document.getElementById('x1').value),
		y: parseInt(document.getElementById('y1').value),
	};
	
	var p2 = {
		x: parseInt(document.getElementById('x2').value),
		y: parseInt(document.getElementById('y2').value),
	};
	
	var a = p1.x - p2.x;
	var b = p1.y - p2.y;
	var c = Math.sqrt( a*a + b*b );
	
	// angle in radians
	var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
	
	// angle in degrees
	var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
	document.getElementById('angle').innerText = Math.round(angleDeg);
	document.getElementById('distance').innerText = Math.round(c * 200) + 'mm';
}