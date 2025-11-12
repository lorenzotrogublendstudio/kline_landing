<?php
// backend/app/Core/Database.php
namespace App\Core;

use PDO;
use PDOException;

class Database
{
    private PDO $pdo;

    public function __construct()
    {
        $config = require dirname(__DIR__, 2) . '/config/database.php';

        $dsn = sprintf(
            'mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4',
            $config['host'],
            $config['port'],
            $config['database']
        );

        $this->pdo = new PDO($dsn, $config['username'], $config['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }

    public function insert(string $sql, array $params): int
    {
        $statement = $this->pdo->prepare($sql);
        $statement->execute($params);
        return (int) $this->pdo->lastInsertId();
    }
}