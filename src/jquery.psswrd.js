(function($){ 
  $.fn.extend({ 
  	psswrd: function() { 
      return $(this).each(function(){
      	console.log("  each: ",$(this));
      	var $input					= $(this);
  			var $checkbox 			= $($input.data('typetoggle'));
  			
  			// Bind onchange events to the checkboxes
  			$checkbox.change(function() {
  				$input[0].type = $checkbox.is(':checked') ? 'text' : 'password';
  			});
      });
    }
  }); 
})(jQuery);