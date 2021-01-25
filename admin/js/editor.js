/**
 * Disable specific Gutenberg editor blocks on all post types.
 * @link https://www.billerickson.net/how-to-remove-core-wordpress-blocks/
 * @link List of core blocks: https://gist.github.com/megclaypool/39dac8a1bd4e2b4cadd3af0021c1017d
 */
wp.domReady( () => {
	wp.blocks.unregisterBlockType( 'core/media-text' );
	wp.blocks.unregisterBlockType( 'core/search' );
	wp.blocks.unregisterBlockType( 'core/column' );
	wp.blocks.unregisterBlockType( 'core/columns' );
	wp.blocks.unregisterBlockType( 'core/text-columns' );
	wp.blocks.unregisterBlockType( 'core/heading' );
} );