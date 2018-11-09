$(function (){
	
	
	$('.cards').on('click', '.card__like', function(event) {
		event.stopPropagation();
		event.preventDefault();

		var target = $(this).siblings('.card__hidden')
							.find('.social__element')
							.eq(1)
							.children('.social__number')

		var number = target.text();
		number = parseInt(number);

		if ($(this).hasClass('card__like--red')){
			$(this).removeClass('card__like--red');
			target.text(number -= 1);
		} else {
			$(this).addClass('card__like--red');
			target.text(number += 1);
		}
	});

	$('.eliminar').click(function(){
 	$(this).parent().parent().parent().parent().parent().remove();
	});


	$('#image').on('change', function(event) {
		var fileName = $(this).val();
		var fileUrl = 'assets/images/squared/' + fileName;

		$('.create__image .create__img').attr('src', fileUrl);
	});

	$('#author').on('change', function(event) {
		var fileName = $(this).val();
		var fileUrl = 'assets/images/profiles/' + fileName;

		$('.create__profile .create__img').attr('src', fileUrl);
	});

	$('.create__form').on('submit', function(event) {
		event.preventDefault();

		var title 		= $('#name').val();
		var comment 	= $('#comment').val();
		var image 		= $('#image').val();
		var author 		= $('#author').val();
		var name	    = $('select#author').children(':selected').text();
		var likes 		= $('#likes').val();


		$('.cards').append(`<li class="card">
      <div class="card__highlight">
        <img class="card__img" src="./assets/images/squared/${image}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="./assets/images/profiles/${author}" alt="">
        </div>
        <a class="card__like" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__title">
          <h2>${title}</h2>
        </div>
        <div class="card__comment">
          <h5>${comment}</h5>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">${name}</h3>
        </div>
        <div class="card__hidden">
          <ul class="social">

            <li class="social__element">
              <div class="social__number">${likes}</div>
              <div class="social__text">Likes</div>
            </li>`)

		$('#name').val();
		$('#comment').val();
		$('#image').val();
		$('#author').val();
		$('select#author').children(':selected').text();
		$('#likes').val();

		$('.create__image .create__img').attr('src', 'assets/images/squared/uk.png');
		$('.create__profile .create__img').attr('src', 'assets/images/profiles/uk.png');

	});

});