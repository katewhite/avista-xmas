onBackButtonClick = function() {
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

onNextButtonClick = function() {
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
},

onCharacterHeadClick = function(button) {
	console.log('onCharacterHeadClick');
	console.log(button);
	id = button.id;
	
	// Remove the selected attribute from all buttons, then re-add it to the one we selected
	$('.character-button').each( function(index, element) {
		// Toggle all instruction containers off
		if ($(this).attr('selected')) {
			if ($(this).attr('id') != id) {
				$(this).removeAttr('selected');
			} 
		}
		else {
			if ($(this).attr('id') == id) {
				$(this).attr('selected', true);
			} 
		}
	})

	headContainer = $('#head-container');
	switch(id) {
		case 'default':
			headContainer[0].className = 'default-head';
			break;
		case 'snowman':
			headContainer[0].className = 'snowman-head';
			break;
		case 'bear':
			headContainer[0].className = 'bear-head';
			break;
		case 'owl':
			headContainer[0].className = 'owl-head';
			break;
		case 'salmon':
			headContainer[0].className = 'salmon-head';
			break;
	}
},

onCreateTextClick = function() {
	text = $('.sweater-text').val()
	$('#decoration-text-container').html(text);
}