$(function(){

	ProgressComponent.Initialise();
	
	$('.controller input[type="button"]').click(function(){
		var $elem = $('.controller > select');		
		ProgressComponent.GetValue($elem ,$('#' + $elem.val() + " > label").data('existing-value'), $(this).data('add-value'));
	});

});


var ProgressComponent = (function() {

	return {
		Initialise: function(){

			$('.bars > .bar').each(function(){
				var width = $(this).find('label').data('existing-value');
				$(this).find('.item').css({width: width + '%'});
				$(this).find('label').html(width + '%');

			});

		},
		GetValue: function($elem, currValue, addValue){
			var currentValue = currValue;
			var newValue = currValue + addValue;
			if(newValue <= 0){
				newValue = 0;
			}

			$('#' + $elem.val() + ' > label').data('existing-value', newValue);

			if(newValue > 100){
				$('#' + $elem.val()).addClass('exceeded');
			} else{
				$('#' + $elem.val()).removeClass('exceeded');
			}

			$('#' + $elem.val() + ' > label').html(newValue + '%');

			$('#' + $elem.val() + ' .item').animate({ 
				width: newValue + "%"
			}, 200 );

			//console.log("new value for " + $elem.val() + ": " + newValue);

		}

	};


})();

