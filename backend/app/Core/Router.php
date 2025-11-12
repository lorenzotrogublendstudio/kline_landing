<?php
// backend/app/Core/Router.php
namespace App\Core;

class Router
{
    private string $method;
    private string $uri;
    private array $routes = [];

    public function __construct(string $method, string $uri)
    {
        $this->method = strtoupper($method);
        $this->uri = parse_url($uri, PHP_URL_PATH);
    }

    public function post(string $path, callable|array $action): void
    {
        $this->routes['POST'][$path] = $action;
    }

    public function dispatch(): void
    {
        $action = $this->routes[$this->method][$this->uri] ?? null;

        if (!$action) {
            http_response_code(404);
            echo json_encode(['message' => 'Not Found']);
            return;
        }

        [$class, $method] = $action;
        $controller = new $class();
        $controller->{$method}();
    }
}