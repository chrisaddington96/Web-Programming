<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "myDB";

// Create the connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT fname, lname, networth FROM mydb ORDER BY networth DESC";
if (!empty($_POST["search"])) {
    $query = "SELECT fname, lname, networth FROM mydb WHERE lname LIKE '" . $_POST["search"] . "' ORDER BY networth DESC";
    $_POST = array();
}

$results = $conn->query($query);
echo json_encode($results->fetch_all());

// Close the connection
mysqli_close($conn);

?>