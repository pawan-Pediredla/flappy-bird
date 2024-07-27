
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';


import '../src/css/flappy-bird-styles.css'; // Path to your CSS file or global styles

// You can also add decorators and parameters here
export const parameters = {
  // Define global parameters here if needed
};
addDecorator(withKnobs);