$(function(){

    	var $scrollSelect = $('.controller > select');
    	var $scrollBar1Data = $('#progress1 > label');
    	var $scrollBar2Data = $('#progress2 > label');
    	var $scrollBar3Data = $('#progress3 > label');
    	var $btn_minus25 = $('.controller > input[type="button"]:nth-of-type(1)');
    	var $btn_minus10 = $('.controller > input[type="button"]:nth-of-type(2)');
    	var $btn_plus10 = $('.controller > input[type="button"]:nth-of-type(3)');
    	var $btn_plus25 = $('.controller > input[type="button"]:nth-of-type(4)');


    describe('Progress bar 1', function() {


        beforeEach(function() {
        	// initialisation (make sure dropdown points to 'progress 1')
			$scrollSelect.val('progress1').trigger('change');

        });

        it('Progressbar 1: value should be 25', function () {
        	expect($scrollBar1Data.data('existing-value')).toBe(25);
        });


        it('Progressbar 1: trigger [-25] button twice (make sure the value should be 0 or more)', function () {

			for(var i = 0; i< 2; i++){
				$btn_minus25.click();
			}


        	expect($scrollBar1Data.data('existing-value')).toBe(0);

 
        });

        it('Progressbar 1: trigger [+25] button to make the value 75 and trigger [+10] button to make the value more than 100', function () {

			for(var i = 0; i< 3; i++){
				$btn_plus25.click();
			}

			for(var i = 0; i< 3; i++){
				$btn_plus10.click();
			}


        	expect($scrollBar1Data.data('existing-value')).toBeGreaterThan(100);

 
        });

    });


    describe('Progress bar 2', function() {


        beforeEach(function() {
        	// initialisation (make sure dropdown points to 'progress 1')
			$scrollSelect.val('progress2').trigger('change');

        });

        it('Progressbar 2: value should be 50 (initial value)', function () {
        	expect($scrollBar2Data.data('existing-value')).toBe(50);
        });


        it('Progressbar 2: trigger [-25] every bottons (50 should be expected)', function () {

			$btn_minus25.click();
			$btn_minus10.click();
			$btn_plus10.click();
			$btn_plus25.click();

        	expect($scrollBar2Data.data('existing-value')).toBe(50);
 
        });


    });


    describe('Progress bar 3', function() {


        beforeEach(function() {
        	// initialisation (make sure dropdown points to 'progress 1')
			$scrollSelect.val('progress3').trigger('change');

        });

        it('Progressbar 3: value should be 75 (initial value)', function () {
        	expect($scrollBar3Data.data('existing-value')).toBe(75);
        });


        it('Progressbar 3: trigger [+25] twice, [+10], [-10], and [-25] (100 should be expected)', function () {

			for(var i = 0; i< 2; i++){
				$btn_plus25.click();
			}

			$btn_plus10.click();
			$btn_minus10.click();
			$btn_minus25.click();
			
        	expect($scrollBar3Data.data('existing-value')).toBe(100);
 
        });


    });



});