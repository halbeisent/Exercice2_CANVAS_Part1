var house = document.getElementById('blueHouseShapes');
var drawProcess = house.getContext('2d');
//On trace le contour de la maison et on le remplit
drawProcess.fillStyle = '#a8d7e5';
drawProcess.fillRect(80,80,250,300);
// On trace la porte
drawProcess.fillStyle = '#c9c9c9';
drawProcess.fillRect(170,280,80,100)
// La première fenêtre
drawProcess.fillStyle = '#c9c9c9';
drawProcess.fillRect(100,100,60,60);
// Puis la seconde
drawProcess.fillStyle = '#c9c9c9';
drawProcess.fillRect(250,100,60,60);
// On trace ensuite la toiture
drawProcess.beginPath();
drawProcess.moveTo(80,80);
drawProcess.lineTo(330,80);
drawProcess.lineTo(210,0);
drawProcess.closePath();
drawProcess.fillStyle = '#d08345';
drawProcess.fill();
