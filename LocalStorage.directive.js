mainModule.factory('tickService', [ 'localStorageService', function(localStorageService) {
	var clear, save;
		clear = function(){
			localStorageService.clearAll();	
		};
			
   		retrieve = function(){
   			console.log('retrieving');
   			return localStorageService.get('listKey');
   		};
   		
   		save = function(items){
   			if(items.length > 0){
   				console.log('saving items into local storage');
   				localStorageService.add('listKey', items);
   			}
   		};
   		
   		return {
   			retro: retrieve,	
   			clear: clear,
   			save: save
   		};
       		
    }
]);
