onBackButtonClick = function(button) {
	console.log('onBackButtonClick');
	jButtonBack = $('#back-button');
	jButtonNext = $('#next-button');
	rel = jButtonBack.attr('rel');

	switch(rel)
	{
	case 'step-1':
		console.log('step-1');
		// self.toggleSidebar('step-1');
		break;
	case 'step-2':
	  	console.log('step-2');
	  	self.toggleSidebar('step-1');
	  	// Update the button's rel attribute
	  	jButtonBack.attr('rel', 'step-1');
	  	jButtonNext.attr('rel', 'step-1');
	  	break;
  	case 'step-3':
	    console.log('step-3');
	    self.toggleSidebar('step-2');
	    // Update the button's rel attribute
	    jButtonBack.attr('rel', 'step-2');
	    jButtonNext.attr('rel', 'step-2');
	    break;
	}
},

onNextButtonClick = function(button) {
	console.log('onNextButtonClick');
	jButtonBack = $('#back-button');
	jButtonNext = $('#next-button');
	rel = jButtonBack.attr('rel');

	switch(rel)
	{
	case 'step-1':
		console.log('step-1');
		self.toggleSidebar('step-2');
		// Update the button's rel attribute
		jButtonNext.attr('rel', 'step-2');
		jButtonBack.attr('rel', 'step-2');
		break;
	case 'step-2':
	  	console.log('step-2');
	  	self.toggleSidebar('step-3');
	  	// Update the button's rel attribute
	  	jButtonNext.attr('rel', 'step-3');
	  	jButtonBack.attr('rel', 'step-3');
	  	break;
  	case 'step-3':
	    console.log('step-3');
	    break;
	}
},

toggleSidebar = function(step) {
	$('.information-container').each( function(index, element) {
		// Toggle all instruction containers off
		if ($(this).attr('class').indexOf('hidden') != -1) {
			console.log('Has class hidden');
		}
		else {
			$(this).addClass('hidden');
			console.log('No Hidden');
		}
		// Remove hidden class from provided step container
		selector = '#' + step;
		$(selector).removeClass('hidden');
	})
}