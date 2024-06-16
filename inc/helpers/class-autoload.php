<?php

spl_autoload_register( function ( $class ) {
    if (str_contains($class, BASIC_NAMESPACE)) {
        $basePath = 'inc/classes/';

        if( str_contains($class, 'Singleton') ) {
            $basePath = 'inc/helpers/';
        }
    
        $fileName = str_replace('_', '-', strtolower(explode('\\', $class)[1]));
    
        $path = TEMPLATE_DIRECTORY_PATH . $basePath . $fileName . '.php';
    
        include_once($path);
    }
});