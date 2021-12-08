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

// Get fname, lname, and networth
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$networth = $_POST['networth'];

// Sql insertion
if($_POST['contact'] == '1') {
    $email = $_POST['email'];
    $sql = "INSERT INTO myDB (fname, lname, networth, email)
    Values ('$fname', '$lname', '$networth', '$email')";
}
elseif($_POST['contact'] == '2') {
    $addr = $_POST['addr'];
    $country = $_POST['country'];
    $st = $_POST['st'];
    $zipcode = $_POST['zipcode'];
    $sql = "INSERT INTO myDB (fname, lname, networth, addr, country, st, zipcode)
    Values ('$fname', '$lname', '$networth', '$addr', '$country', '$st', '$zipcode')";
}
else {
    $sql = "INSERT INTO myDB (fname, lname, networth)
    Values ('$fname', '$lname', '$networth')";
}

// Let the server lackey know a new entry has been added
if ($conn->query($sql) === TRUE) {
    echo "New sucker scammed successfully";
    header('Location: SuccessPage.html');
    exit;
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

// Close the connection
mysqli_close($conn)

?>