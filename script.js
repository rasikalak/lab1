

onload=function(){
	var fruits_list= ["Apple","Orange","Mango"];
	var i;
	//alert(fruits_list[0]);
	//document.getElementById('test').innerHTML = "Testing";
	var list = document.getElementById('fruits');
	for (i=0;i<fruits_list.length;i++){
		var entry = document.createElement('li');
		entry.id = fruits_list[i];
		entry.appendChild(document.createTextNode(fruits_list[i]));
		list.appendChild(entry);
		}
	}

function textChange(){
	var list = document.getElementById('fruits');
	var basket = document.getElementById('basket');
	
	var listItems = list.getElementsByTagName('li');
	var inputName = document.getElementById('newfruit').value;
	var i;
	for (i=0;i<listItems.length;i++){
		if (listItems[i].innerHTML==inputName){
			var entry = document.createElement('li');
			entry.appendChild(document.createTextNode(listItems[i].innerHTML));
			basket.appendChild(entry);
			removeEntry = document.getElementById(inputName);
			list.removeChild(removeEntry);
			
			//alert(removeEntry);
			}
	}
	
	
}
function test(){
	alert("test");
	var win = window.open('test.html', '_blank');
	win.focus();
}
