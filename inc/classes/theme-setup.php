<?php

declare(strict_types=1);

namespace THEME_NAMESPACE;

class Theme_Setup
{
    use Singleton;

    protected function __construct() {
        // Add other classes
        Assets_Register::get_instance();

        // Hooks
        add_action('after_setup_theme', [$this, 'theme_supports']);
    }

    public function theme_supports(): void {
        /** title tag **/
        add_theme_support( 'title-tag' );

        /** HTML5 support **/
        add_theme_support( 'html5', [ 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ] );

        /** refresh widgest **/
        add_theme_support( 'customize-selective-refresh-widgets' );
    }
}