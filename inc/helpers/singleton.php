<?php

declare(strict_types=1);

namespace TRAINEE_ONE;

trait Singleton
{
    static private $instance = null;

    static public function get_instance() : static {
        if (static::$instance !== null) {
            return static::$instance;
        }

        static::$instance = new (get_called_class());

        return static::$instance;
    }
}