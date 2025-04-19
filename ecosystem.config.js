module.exports = {
  apps: [{
    name: 'stoffeerbeer',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    exec_mode: 'cluster',
    instances: 'max'  // Voor betere performance
  }]
} 