<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Core\Database;
use App\Models\Lead;
use App\Services\MailService;

class LeadController extends Controller
{
    public function __construct(
        private Lead $lead = new Lead(new Database()),
        private MailService $mailer = new MailService()
    ) {}

    public function store(): void
    {
        $data = $this->getJsonBody();

        $errors = $this->validate($data);
        if ($errors) {
            $this->json(['errors' => $errors], 422);
            return;
        }

        $leadId = $this->lead->create($data);
        $this->mailer->notifyLead($data);

        $this->json(['id' => $leadId, 'message' => 'Lead registrato con successo'], 201);
    }

    private function validate(array $data): array
    {
        $errors = [];

        if (empty($data['company'])) {
            $errors['company'] = 'La ragione sociale è obbligatoria.';
        }

        if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = "L'email non è valida.";
        }

        if (empty($data['consent'])) {
            $errors['consent'] = 'È necessario accettare la privacy policy.';
        }

        return $errors;
    }
}