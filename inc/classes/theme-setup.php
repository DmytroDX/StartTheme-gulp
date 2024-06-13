<?php

declare(strict_types=1);

namespace TRAINEE_ONE;

class Theme_Setup
{
    use Singleton;

    protected function __construct() {
        // Add other classes
        Assets_Register::get_instance();

        // Hooks
        
    }
}