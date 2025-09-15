<?php
    // Recipient email (Hotel Vannah)
    $to = "hotelvannah@gmail.com";

    // Collect and sanitize input
    $from    = filter_var($_REQUEST['email'], FILTER_SANITIZE_EMAIL);
    $name    = htmlspecialchars($_REQUEST['name']);
    $subject = htmlspecialchars($_REQUEST['subject']);
    $number  = htmlspecialchars($_REQUEST['number']);
    $cmessage = htmlspecialchars($_REQUEST['message']);

    // Email headers
    $headers  = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Subject line
    $mail_subject = "New message from Hotel Vannah website contact form";

    // Logo and link (optional)
    $logo = 'img/logo-vannah.png';
    $link = 'https://hotelvannah.com';

    // Email body
    $body  = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Hotel Vannah Contact</title></head><body>";
    $body .= "<table style='width: 100%; border-collapse: collapse;'>";
    $body .= "<thead style='text-align: center;'><tr><td colspan='2' style='border:none;'>";
    $body .= "<a href='{$link}'><img src='{$logo}' alt='Hotel Vannah Logo' style='max-width:150px;'></a><br><br>";
    $body .= "</td></tr></thead><tbody>";
    $body .= "<tr><td style='border:none;'><strong>Name:</strong> {$name}</td></tr>";
    $body .= "<tr><td style='border:none;'><strong>Email:</strong> {$from}</td></tr>";
    $body .= "<tr><td style='border:none;'><strong>Phone:</strong> {$number}</td></tr>";
    $body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$subject}</td></tr>";
    $body .= "<tr><td colspan='2' style='border:none; padding-top:15px;'><strong>Message:</strong><br>{$cmessage}</td></tr>";
    $body .= "</tbody></table>";
    $body .= "</body></html>";

    // Send email
    $send = mail($to, $mail_subject, $body, $headers);

    if($send){
        echo "Thank You!";
    } else {
        echo "Oops!";
    }
?>
