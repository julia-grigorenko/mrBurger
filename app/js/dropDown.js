let name = document.querySelectorAll('.team__name');

function toggle(e) {
  let qurrentName = e.target,
	    info = e.target.nextElementSibling;

      qurrentName.classList.toggle('team__name--active');
      info.classList.toggle('team__info--active');
}

function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
		 list[i].addEventListener(event, fn, false);
	 }
 }


 

addEventListenerList(name,'click', toggle);
