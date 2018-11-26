/**
 * Nav
 */

// Custom
import 'protons';

// Module template
import './_nav.twig';
import './_nav-item.twig';

// Import custom sass, includes Bootstrap sass
import './scss/_nav.scss';
import './scss/_nav-utility.scss';

export const name = 'nav';

export function disable() {}

export function enable() {}

export default enable;
