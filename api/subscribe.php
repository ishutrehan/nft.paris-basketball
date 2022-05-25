<?php 

	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	require 'database.php';

	$con = connect();
	$json = file_get_contents('php://input');
                  
    // Converts it into a PHP object
	$_POST = (array)json_decode($json);
	if($_POST['receive_news'] == "") $_POST['receive_news'] = intval(false);
	// Create.
	$getuser = "SELECT * from `subscriptions` WHERE email='".$_POST['email']."'";
	$fetch = mysqli_query($con, $getuser);
	if($fetch->num_rows > 0){
		$res = [
	      'error' => true,
	      'message' => "Cette adresse e-mail est déjà abonnée."
	    ];
	 	echo json_encode($res);
	}
	if($fetch->num_rows == 0){

 		$sql = "INSERT INTO `subscriptions`(first_name, last_name, email, receive_news) VALUES ('".$_POST['first_name']."', '".$_POST['last_name']."', '".$_POST['email']."', '".$_POST['receive_news']."')";
		$insert = mysqli_query($con, $sql);
		if($insert)
		{	
			$customer_to = $_POST['email'];
			$admin_to = 'admin@parisbasketball.paris';
			$subject = "Félicitations! Vous avez été abonné avec succès à Paris Basketball NFT.";
			$mail_content = '<p>Félicitations! Vous avez été abonné avec succès à Paris Basketball NFT.</p>';
			$headers = 'From: Paris Basketball NFT <noreply@parisbasketball.paris' . "\r\n"."Content-type:text/html;charset=UTF-8" . "\r\n";
			$mail = mail($customer_to, $subject, $mail_content, $headers);
			$res = [
		      'success' => true,
		      'email' => $_POST['email'],
		      'is_mail_sent' => $mail
		    ];
		    echo json_encode($res);
		}else{
			$res = [
		      'error' => true,
		      'message' => '<b>Database Error:</b> '.mysqli_error($con)
		    ];
		 	echo json_encode($res);
			
		}
	}
?>