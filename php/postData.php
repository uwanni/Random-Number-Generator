<?php
    require_once 'connection.php';

//insert data to database
$additionResults = filter_input(INPUT_POST,"addition",FILTER_VALIDATE_INT);
$multiplicationResults = filter_input(INPUT_POST,"multiplication",FILTER_VALIDATE_INT);

$sql = "INSERT INTO calculations (addition, multiplication)
        VALUES (?,?)";

$stmt = mysqli_stmt_init($conn);

if(!mysqli_stmt_prepare($stmt,$sql)){
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ii", $additionResults, $multiplicationResults);

mysqli_stmt_execute($stmt);

header("Location: successPage.php");
exit();