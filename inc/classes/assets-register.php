<?php

declare(strict_types=1);

namespace BASIC_NAMESPACE;

class Assets_Register
{
    use Singleton;

    protected function __construct() {
        // Add hooks
        add_action('wp_enqueue_scripts', [$this, 'register_styles']);
        add_action('wp_enqueue_scripts', [$this, 'register_scripts']);
    }

    public function register_styles() {

    }

    public function register_scripts() {

    }
}