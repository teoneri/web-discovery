var ft_list = document.getElementById('ft_list');


function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

 
function makeToDo(){
	var todoText = prompt("Enter new to-do item:");
	if (todoText == null || todoText == "") {
		return;}
	const newToDo = document.createElement('div');
	newToDo.textContent = todoText;
	newToDo.style.textAlign = 'center';
	ft_list.appendChild(newToDo);
	setCookie("todo" + todoText, todoText, 365);
	newToDo.addEventListener('click', function(){
		if(confirm("are you sure about deleting this to-do?")){
			this.parentNode.removeChild(this);
			document.cookie = "todo" + todoText + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	})
}

function loadCookie() {
	var cookie = document.cookie;
	var cookieArray = cookie.split(";");
	for (var i = 0; i < cookieArray.length; i++) {
	  var cookieName = cookieArray[i].split("=")[0];
	  var cookieValue = cookieArray[i].split("=")[1];
	  if (cookieName.includes("todo")) {
		const newToDo = document.createElement("div");
		newToDo.textContent = cookieValue;
		newToDo.style.textAlign = "center";
		ft_list.appendChild(newToDo);
		newToDo.addEventListener("click", function () {
		  if (confirm("Are you sure about deleting this to-do?")) {
			this.parentNode.removeChild(this);
			var cookieKey = "todo" + cookieValue;
			document.cookie = cookieKey + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		  }
		});
	  }
	}
  }