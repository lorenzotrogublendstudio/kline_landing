<?php
// backend/config/mail.php
return [
    'host' => $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com',
    'port' => (int) ($_ENV['SMTP_PORT'] ?? 587),
    'username' => $_ENV['SMTP_USERNAME'] ?? '',
    'password' => $_ENV['SMTP_PASSWORD'] ?? '',
    'encryption' => $_ENV['SMTP_ENCRYPTION'] ?? PHPMailer::ENCRYPTION_STARTTLS,
    'from_address' => $_ENV['MAIL_FROM_ADDRESS'] ?? 'noreply@kline.it',
    'from_name' => $_ENV['MAIL_FROM_NAME'] ?? 'K•LINE Landing',
    'to_address' => $_ENV['MAIL_TO_ADDRESS'] ?? 'marketing@kline.it',
];