<?php

namespace Directus\Api\Routes;

use Directus\Application\Application;
use Directus\Application\Http\Request;
use Directus\Application\Http\Response;
use Directus\Application\Route;
use Directus\Services\AuthService;

class Auth extends Route
{
    /**
     * @param Application $app
     */
    public function __invoke(Application $app)
    {
        $app->post('/authenticate', [$this, 'authenticate']);
        $app->post('/refresh', [$this, 'refresh']);
    }

    /**
     * Sign In a new user, creating a new token
     *
     * @param Request $request
     * @param Response $response
     *
     * @return Response
     */
    public function authenticate(Request $request, Response $response)
    {
        /** @var AuthService $authService */
        $authService = $this->container->get('services')->get('auth');

        $responseData = $authService->loginWithCredentials(
            $request->getParsedBodyParam('email'),
            $request->getParsedBodyParam('password')
        );

        return $this->responseWithData($request, $response, $responseData);
    }

    /**
     * Refresh valid JWT token
     *
     * @param Request $request
     * @param Response $response
     *
     * @return Response
     */
    public function refresh(Request $request, Response $response)
    {
        /** @var AuthService $authService */
        $authService = $this->container->get('services')->get('auth');

        $responseData = $authService->refreshToken(
            $request->getParsedBodyParam('token')
        );

        return $this->responseWithData($request, $response, $responseData);
    }
}