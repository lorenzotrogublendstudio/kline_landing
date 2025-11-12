<?php
// backend/app/Core/Controller.php
namespace App\Core;

abstract class Controller
{
    protected function json(mixed $payload, int $status = 200): void
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($payload);
    }

    protected function getJsonBody(): array
    {
        $content = file_get_contents('php://input');
        return json_decode($content, true) ?? [];
    }
}