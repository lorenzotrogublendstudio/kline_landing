<?php
// backend/app/Services/MailService.php
namespace App\Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailService
{
    private array $config;

    public function __construct()
    {
        $this->config = require dirname(__DIR__, 2) . '/config/mail.php';
    }

    public function notifyLead(array $payload): void
    {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = $this->config['host'];
        $mail->SMTPAuth = true;
        $mail->Username = $this->config['username'];
        $mail->Password = $this->config['password'];
        $mail->SMTPSecure = $this->config['encryption'];
        $mail->Port = $this->config['port'];

        $mail->setFrom($this->config['from_address'], $this->config['from_name']);
        $mail->addAddress($this->config['to_address']);

        $mail->isHTML(true);
        $mail->Subject = 'Nuovo lead landing K•LINE Terziario';
        $mail->Body = sprintf(
            '<p>Azienda: <strong>%s</strong></p><p>Email: %s</p><p>Messaggio:<br>%s</p>',
            htmlspecialchars($payload['company']),
            htmlspecialchars($payload['email']),
            nl2br(htmlspecialchars($payload['message'] ?? '—'))
        );

        $mail->send();
    }
}