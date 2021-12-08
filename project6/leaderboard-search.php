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

// Set our default query
$query = "SELECT fname, lname, networth FROM mydb ORDER BY networth DESC";

// If we have been provided a search term, modify our query...
if (!empty($_POST["search"])) {
    $query = "SELECT fname, lname, networth FROM mydb WHERE lname LIKE '" . $_POST["search"] . "' ORDER BY networth DESC";
    $_POST = array();
}

// Get our results and pack them in a JSON
$results = $conn->query($query);
echo json_encode($results->fetch_all());

// Close the connection
mysqli_close($conn);

?>