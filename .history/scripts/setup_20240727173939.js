
const { execSync } = require('child_process');

console.log('Installing dependencies...');
execSync('yarn install', { stdio: 'inherit' });

console.log('Setting up project...');
execSync('yarn build', { stdio: 'inherit' });

console.log('Project setup completed!');
