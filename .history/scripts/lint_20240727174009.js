const { execSync } = require('child_process');

console.log('Linting code...');
execSync('yarn lint', { stdio: 'inherit' });

console.log('Linting completed!');
