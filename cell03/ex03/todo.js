var ft_list = document.getElementById('ft_list');


function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function eraseCookie(c_name) {
	setCookie(cookie_name,"",-1);
  }

function makeToDo(){
	var todoText = prompt("Enter new to-do item:");
	if (todoText == null || todoText == "") {
		return;}
	const newToDo = document.createElement('div');
	newToDo.textContent = todoText;
	newToDo.style.textAlign = 'center';
	ft_list.appendChild(newToDo);
	newToDo.addEventListener('click', function(){
		if(confirm("are you sure about deleting this to-do?")){
			this.parentNode.removeChild(this);
			eraseCookie(this);
		}
		setCookie("todo" + todoText, todoText, 365);
	})
}

