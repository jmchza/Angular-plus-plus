<%@ include file="./common/header.jsp"%>

<body ng-app="communityModule" ng-controller="mainCtrl">

<aside>
	<div class="container-fluid" >
		<div class="row">
			<!-- left column -->
			<div class="col-sm-3 col-md-2 sidebar">
				<h3>Project Name</h3>
				<ul class="nav nav-sidebar">
			         <li class="active"><a href="#">Manuel</a></li>
			         <li><a href="#">Peter</a></li>
			         <li><a href="#">John</a></li>
			         <li><a href="#">Steve</a></li>
			    </ul>
			    <ul class="nav nav-sidebar">
			         <li><a href="">Maike</a></li>
			         <li><a href="">Simon</a></li>
			         <li><a href="">Dave</a></li>
			         <li><a href="">Garth</a></li>
			         <li><a href="">Xavier</a></li>
			     </ul>
			</div>
		</div>
	</div>
</aside>
	<!-- top panel -->
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main my-background">
		
		<h2 clas="page-header">Someone's Dashboard</h2>
		<div class="main-box">
			<my-tick class="" 
				items="tasklist" 
				on-save="save()" 
				on-retrieve="getData()" 
				on-display-tick="showTick({newIndex:idx})">
			</my-tick>
		</div>
	</div>
	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main my-background" >
		<h2 class="sub-header" id="agenda">Agenda</h2>
		<!-- button bar -->
		<div class="table-responsive">
			<!-- Today -->
			<div class="col-sm-4 ">
				<my-box tittle="Today"></my-box>
			</div>
			<!-- This Week -->
			<div class="col-sm-4 ">
				<my-box tittle="This-Week"></my-box>
			</div>
			<!-- This Month -->
			<div class="col-sm-4 ">
				<my-box tittle="This-Month"></my-box>
			</div>
		</div>
	</div>

<script src="./static/js/controllers/myCtrl.js" type="text/javascript"></script>
<script src="./static/js/myDir.js" type="text/javascript"></script>
<script src="./static/js/draganddrop.js" type="text/javascript"></script>
</body>
</html>
