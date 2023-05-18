<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Format the data as a CSV string
  $data = "{$name},{$email},{$message}\n";

  // Append the data to the CSV file
  file_put_contents('contacts.csv', $data, FILE_APPEND | LOCK_EX);

  // Redirect back to the contact page with a success message
  header('Location: contact.html?success=true');
  exit;
}
