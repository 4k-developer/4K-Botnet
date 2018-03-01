<?php 
$ip = $_SERVER['REMOTE_ADDR'];
$browser = $_SERVER['HTTP_USER_AGENT'];
$dateTime = date('Y/m/d G:i:s');
$file = "ip.txt";
$file = fopen($file, "a");
$data = "User IP: $ip 
Browser: $browser
Time : $dateTime";
fwrite($file, $data);
fclose($file);
echo "<h1>Just Wait For It...</h1>";
?>
