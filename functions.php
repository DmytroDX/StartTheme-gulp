<?php

// Визначення констант для зручності
if ( !defined('TEMPLATE_DIRECTORY_PATH') ) {
    define('TEMPLATE_DIRECTORY_PATH', get_template_directory() . '/');
}

if ( !defined('TEMPLATE_DIRECTORY_URI') ) {
    define('TEMPLATE_DIRECTORY_URI', get_template_directory_uri() . '/');
}

// Підключення файлу з функцією автоматичного підключення файлів із класами.
require_once('inc/helpers/class-autoload.php');

TRAINEE_ONE\Theme_Setup::get_instance();