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

// Sql insertion
if('$_POST[contact]' == 1) {
    $sql = "INSERT INTO myDB (fname, lname, networth, email)
    Values ('$_POST[fname]', '$_POST[lname]', '$_POST[networth]', '$_POST[email]')";
}
elseif('$_POST[contact]' == 2) {
    $sql = "INSERT INTO myDB (fname, lname, networth, addr, country, st, zipcode)
    Values ('$_POST[fname]', '$_POST[lname]', '$_POST[networth]', '$_POST[addr]', '$_POST[country]', '$_POST[st]', '$_POST[zipcode]')";
}
else {
    $sql = "INSERT INTO myDB (fname, lname, networth)
    Values ('$_POST[fname]', '$_POST[lname]', '$_POST[networth]')";
}

// Let the server lackey know a new entry has been added
if ($conn->query($sql) === TRUE) {
    echo "New sucker scammed successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

// Close the connection
mysqli_close($conn)

?>