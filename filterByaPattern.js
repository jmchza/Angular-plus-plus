mainModule.filter('listFiltered', function() {
	  return function(list, pattern) {
		  var out = [];
		  if(pattern){
			  for (var i = 0; i < list.length; i++) {
				  if(list[i].scope === pattern){
					  out.push(list[i]);
				  }
			  }
		  }
	      return out;
	  };
});
