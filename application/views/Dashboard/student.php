<?php
	$usertype = $this->session->userdata('usertype');
	$group = $this->session->userdata('group');
	$username = $this->session->userdata('username');
	$password = $this->session->userdata('password');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="./assets/favicon.ico" type="image/x-icon"/>
    <title>Test System(Student panel)</title>

    <link href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<link rel="stylesheet" type="text/css" href="../assets/css/share1.css">

    <script src="../assets/student_dashboard.js"></script>
    <script>
    	var usertype = "<?php echo $usertype; ?>";
    	var usergroup = "<?php echo $group; ?>";
    	var username = "<?php echo $username; ?>";
    	var password = "<?php echo $password; ?>";
    </script>

</head>
<body>
	<nav class="navbar navbar-inverse navbar-expand-xl navbar-dark">
		<div class="navbar-header d-flex col">
			<a class="navbar-brand" href="#"><i class="fa fa-cube"></i><b>Teacher Panel</b></a>  		
			<button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle navbar-toggler ml-auto">
				<span class="navbar-toggler-icon"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>
		<!-- Collection of nav links, forms, and other content for toggling -->
		<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
			<ul class="nav navbar-nav navbar-right ml-auto">
				<li class="nav-item active"><a href="#" class="nav-link" id="nav-ranking"><i class="fa fa-home"></i><span>Ranking</span></a></li>
				<li class="nav-item"><a href="#" class="nav-link" id="nav-new"><i class="fa fa-briefcase"></i><span>New Test</span></a></li>
				<li class="nav-item dropdown">
					<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action"><?php echo $this->session->userdata('username') ?> <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><a href="<?php echo base_url();?>" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>

	<div class="container-fluid main-panel">
	</div>
</body>

</html>