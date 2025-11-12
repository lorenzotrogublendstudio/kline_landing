<?php
// backend/public/index.php
declare(strict_types=1);

use App\Controllers\LeadController;
use App\Core\Router;
use Dotenv\Dotenv;

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv::createImmutable(dirname(__DIR__));
$dotenv->safeLoad();

$router = new Router($_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI']);
$router->post('/api/leads', [LeadController::class, 'store']);
$router->dispatch();