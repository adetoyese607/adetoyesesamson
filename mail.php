<?php
//get data from form
$name = $_POST['name'],
$email = $_POST['email'],
$subject = $_POST['subject'],
$message = $_POST['message'];

$to = "adetoyesesamson@gmail.com";

$subject = "Mail from Portfolio";
$txt = "Name = ". $name . "\r\n Email = " . $email . "\r\n Message =" . $message ."
    \r\n subject = ". $subject;

$headers = "From: noreply@https://adetoyese607.github.io/adetoyesesamson/" . "\r\n" 
"CC: adetoyesesamson@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thank-you.html");
?> 