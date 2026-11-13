# Personal Website

A personal portfolio site with About Me, Work Experience, Projects and Education pages, a contact form and a downloadable resume.

- **Frontend:** React 19, built with Vite and styled with React Bootstrap. It lives in [`client/`](client/).
- **Backend:** an Express 5 server ([`server.js`](server.js)) that serves the built frontend and two API routes:
  - `POST /api/email` sends contact-form messages through SendGrid SMTP (nodemailer) ([`routes/email.js`](routes/email.js)).
  - `GET /api/resume` downloads [`Resume.pdf`](Resume.pdf) ([`routes/resume.js`](routes/resume.js)).

```
.
├── server.js        Express server (API + static frontend)
├── routes/          API route handlers
├── Resume.pdf       File served by /api/resume
├── .env.example     Template for environment variables
└── client/          React app (Vite)
    └── build/       Production build output (generated)
```

## Running locally (development)

### Prerequisites

- Node.js **22.12 or newer**

### 1. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env`:

| Variable | Required | Description |
|---|---|---|
| `SENDGRID_API_KEY` | For the contact form | SendGrid API key. Without it, `/api/email` returns an error but the rest of the site works. |
| `PORT` | No | Port the Express server listens on. Defaults to `80`; use `5000` locally. |
| `MAIL_TO` / `MAIL_FROM` | No | Override the contact-form recipient and sender addresses. |

### 2. Install dependencies

```bash
npm install
npm --prefix client install
```

### 3. Start the dev servers

Use two terminals:

```bash
npm run dev       # Express API on http://localhost:5000 (restarts on change)
npm run client    # Vite dev server on http://localhost:3000 (hot reload)
```

Open http://localhost:3000. Vite forwards `/api/*` requests to the Express server on port 5000. To use a different backend address, set `API_PROXY_TARGET`.

### Other useful commands

Run these from `client/`:

```bash
npm run lint      # ESLint
npm test          # Vitest
```

### Previewing the production build locally

```bash
npm run build     # Builds the frontend into client/build
npm start         # Express serves the site and API on PORT
```

Then open http://localhost:5000.

## Deploying to production (DigitalOcean droplet)

This guide uses an Ubuntu droplet (tested against 26.04). The Node app runs on port 5000 under **PM2**, which keeps it running and restarts it after reboots. **Nginx** sits in front as a reverse proxy on ports 80 and 443 and handles HTTPS, so Node never needs root privileges.

### 1. Install system packages

SSH into the droplet, then run:

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs nginx git
node -v                     # should be 22.12 or newer
sudo npm install -g pm2
```

### 2. Get the code and build it

```bash
sudo mkdir -p /var/www && sudo chown $USER /var/www
cd /var/www
git clone <your-repo-url> personal-website
cd personal-website

npm install --omit=dev      # server dependencies
npm run build               # installs client dependencies and builds client/build

cp .env.example .env
nano .env                   # set SENDGRID_API_KEY, keep PORT=5000
```

### 3. Run the app with PM2

```bash
pm2 start npm --name website -- start
pm2 save
pm2 startup                 # prints a command; run it so the app starts on boot
curl -I http://localhost:5000   # should return HTTP 200
```

Useful PM2 commands: `pm2 status`, `pm2 logs website`, `pm2 restart website`.

### 4. Configure Nginx as a reverse proxy

Create `/etc/nginx/sites-available/website`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;   # or "_" if you have no domain yet

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/website /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

### 5. Open the firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

The site is now available at `http://<droplet-ip>` (or your domain).

### 6. Enable HTTPS (requires a domain)

First point your domain's DNS **A record** at the droplet's IP address, then run:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot updates the Nginx config and sets up automatic certificate renewal.

### Deploying updates

```bash
cd /var/www/personal-website
git pull
npm install --omit=dev
npm run build
pm2 restart website
```
