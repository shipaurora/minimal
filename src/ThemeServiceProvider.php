<?php

namespace Aurora\Minimal;

use Aurora\Support\Themes;
use Illuminate\Support\ServiceProvider;

/**
 * The Minimal admin theme, prebuilt (resources/dist/theme.css), in Aurora's theme registry:
 * picked for the whole admin under Settings › Appearance.
 */
class ThemeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Themes::register(
            'minimal',
            name: 'Minimal',
            description: __('Quiet and flat: neutral greys, thin lines and nothing that glows.'),
            stylesheet: __DIR__.'/../resources/dist/theme.css',
            preview: __DIR__.'/../resources/preview.webp',
            // Published where sites have always loaded it from (public/css/shipaurora/minimal-theme),
            // from before the package was renamed: a site that updates keeps its styles.
            package: 'shipaurora/minimal-theme',
            // Made for both: people switch in the user menu.
            modes: ['light', 'dark'],
        );
    }
}
