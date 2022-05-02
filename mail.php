<?php
//get data from form
$name = $_POST['name'],
$email = $_POST['email'],
$number = $_POST['mobile'],
$message = $_POST['message'];
$to = "adetoyesesamson@gmail.com";
$subject = "Mail from Portfolio";
$txt = "Name = ". $name . "\r\nEmail = " . $email . "\r\nMessage =" . $message ."
    \r\n Mobile number =". $number;
$headers = "From: https://adetoyese607.github.io/adetoyesesamson/" . "\r\n" 
"CC: adetoyesesamson@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thank-you.html");
?> 