let reviews = document.querySelector('.reviews'),
		reviewsHeader = reviews.querySelector('.reviews__header'),
		reviewsDesciption = reviews.querySelector('.reviews__desciption'),
		reviewsBtn = reviews.querySelector('.reviews__btn'),
		modal = document.querySelector('.modal'),
		modalContent = modal.querySelector('.modal__content'),
		modalTitle = modal.querySelector('.modal__title'),
		modalBody = modal.querySelector('.modal__body'),
		closeBtn = modal.querySelector('.modal__close'),
		overlays = document.querySelectorAll('.reviews__btn');

		function show(e) {
			e.preventDefault();
			let header = this.parentElement.getElementsByClassName('reviews__header')[0].innerHTML,
					content = this.parentElement.getElementsByClassName('reviews__desciption')[0].innerHTML;

			modalTitle.innerHTML = header;
			modalBody.innerHTML = content;
			modal.classList.remove("modal-close");
			modal.classList.add("modal-show");
		}

		function close() {
			modal.classList.remove("modal-show");
			modal.classList.add("modal-close");
		}

		function addEventListenerList(list, event, fn) {
		  for (var i = 0, len = list.length; i < len; i++) {
				 list[i].addEventListener(event, fn, false);
			 }
		 }
		 modal.addEventListener('click', function(e){
			 if(e.target == modal && modal.classList.contains("modal-show")) {
				  close();
			 }
		 });

		 closeBtn.addEventListener('click', close);

		 window.addEventListener("keydown", function (e) {
	     if (e.keyCode === 27) {
	       if (modal.classList.contains("modal-show")) {
	         close();
	       }
	     }
	   });

		 addEventListenerList(overlays,'click',show);
