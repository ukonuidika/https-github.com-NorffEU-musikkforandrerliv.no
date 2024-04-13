<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "recipents email";

    $email_message = "Name: " . $name . "\n";
    $email_message = "Email: " . $email . "\n";
    $email_message = "Subject: " . $subject . "\n";
    $email_message = "Message: " . $message;

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    if (mail($to, $subject, $email_message, $headers)) {
        $response = array("success" => true, "message" => "Thank you for your message we will get back to you soon");
    }
    
    else {
        $response = array("success" => false, "message" => "Oops! something went wrong. Please try again later");
    }

    header("Content-type: application/json");
    echo json_encode($response);
    
}

else {
    header("Location: /");
}
?>