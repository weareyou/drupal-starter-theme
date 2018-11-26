/**
 * Carousel
 */

import $ from 'jquery';

// Module dependencies
import 'protons';
import 'atoms/image';

// Module template
import './_carousel.twig';

// Module styles
import './_carousel.scss';

export const name = 'carousel';

export function disable() {}

export function enable($context) {
  $('.carousel', $context).carousel({
    interval: 3000,
  });
}

export default enable;
