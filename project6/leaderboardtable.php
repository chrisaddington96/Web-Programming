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

$results = $conn->query("SELECT fname, lname, networth FROM mydb ORDER BY networth DESC");
while($row = $results->fetch_row()) {
    printf("<tr>");
    printf("<td>%s</td>", $row[0]);
    printf("<td>%s</td>", $row[1]);
    printf("<td>%s</td>", $row[2]);
    printf("</tr>");
}

// Close the connection
mysqli_close($conn);

?>