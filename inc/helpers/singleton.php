<?php

declare(strict_types=1);

namespace THEME_NAMESPACE;

trait Singleton
{
    private static $instance = null;

    public static function get_instance() {
        if (self::$instance !== null) {
            return self::$instance;
        }

        $calledClass = get_called_class();
        self::$instance = new $calledClass();

        return self::$instance;
    }
}