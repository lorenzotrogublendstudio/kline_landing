<?php
// backend/app/Models/Lead.php
namespace App\Models;

use App\Core\Database;

class Lead
{
    public function __construct(private Database $db) {}

    public function create(array $data): int
    {
        $sql = 'INSERT INTO leads (company, email, message, consent) VALUES (:company, :email, :message, :consent)';
        return $this->db->insert($sql, [
            ':company' => $data['company'],
            ':email' => $data['email'],
            ':message' => $data['message'] ?? null,
            ':consent' => $data['consent'] ? 1 : 0,
        ]);
    }
}