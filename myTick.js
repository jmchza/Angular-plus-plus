.controller('myTickCtrl', function($scope){
	
	$scope.items = [];
	$scope.fixHeight = 39;
	
	$('.lines').css("height", $scope.items.length * $scope.fixHeight + 'px');
	  
		  
	 // dragand drop for global items --------------   
    $scope.dropOutSuccessHandler = function($event,index,array){
    	console.log('dropOut');
    	console.log($event);
//		array.splice(index,1);
	};
	
	$scope.onDropIn = function($event,$data,array){
		console.log(array.indexOfId($data));
		//avoiding duplicates
		if(array.indexOfId($data.id) < 0){
			$data.scope = 'today';
			array.push($data);
		}
	};

	$scope.keyDownHandler = function(idx, event, size){
		if( event.keyCode === 9 || event.keyCode === 13 ){
			if(size == (idx + 1) ){ // means this is the last item and the focus has to have an special
				$scope.addLine(true);
				$scope.innerDisplayTick(idx+1);
//				item.isFocus=true;
			}else{
				// set the focus to the next existent row 
				$scope.items[idx].isFocus=true;
			}
			
		};
	};
	
	$scope.refreshVerticalLine = function(){
    	$('.lines').css("height", $scope.items.length * $scope.fixHeight + 'px');
    };
	
    $scope.delLine = function(idx){
    	$scope.items.splice(-1, 1);
    	
    	$scope.refreshVerticalLine();
    };
	
	$scope.addLine = function(focus) {
		var obj = {'id':$scope.items.length, 'visible':true, 'text':'', 'isFocus':focus, 'checked':false, 'scope':'global'};
		
        $scope.items.push(obj);
        console.log($scope);
        //update the vertical red line as the grid grows
        $scope.refreshVerticalLine();
    };
    
    $scope.innerDisplayTick = function(idx){
    	console.log(idx);
    	$scope.items[idx].visible = true;
    };
})

.directive('myTick', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			items:'=',
			onSave:'&',
			retrieve: '&onRetrieve',
			displayTick:'&',
			onDisplayTick:'&',
		},
		controller: 'myTickCtrl',
		templateUrl:'my-tick.html'
	};
})
