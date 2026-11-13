module.exports = {
  apps: [
    {
      name: "client",
      script: "npx",
      error_file: "err.log",
      interpreter: "none",
      args: "serve build -s -l 80",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.cjs --env production",
    },
  },
};
