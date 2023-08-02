<?php

//database connection
$host = "localhost";
$dbname = "number_generator";
$username = "numberAdmin";
$password = "vXUK4ze@v@DEzpmN";

$conn = mysqli_connect($host,$username,$password,$dbname);

if(mysqli_connect_errno()){
    die("connection failed : " .mysqli_connect_error());
}