
const { execSync } = require('child_process');

console.log('Building the project...');
execSync('webpack --config webpack.config.js', { stdio: 'inherit' });

console.log('Build completed!');
