<?php
/**
 * Plugin Name:     Demo
 * Description:     Demo plugin for Gutenberg development
 * Author:          Dmitry Mayorov
 * Author URI:      https://dmtrmrv.com
 * Text Domain:     demo
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Demo
 */

 // Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
};

function demo_block_editor_assets(){
	wp_enqueue_script(
		'demo-editor-script',
		plugin_dir_url( __FILE__ ) . 'build/index.js',
		[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ],
		'1.0.0'
	);
}
add_action( 'enqueue_block_editor_assets', 'demo_block_editor_assets' );

function demo_block_assets(){
	wp_enqueue_style(
		'demo-editor-style',
		plugin_dir_url( __FILE__ ) . 'demo.css',
		[],
		'1.0.0'
	);
}
add_action( 'enqueue_block_assets', 'demo_block_assets' );
