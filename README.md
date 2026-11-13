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

## Deploying to production (DigitalOcean App Platform)

App Platform builds and runs the app straight from this Git repository. There are no servers to manage, and HTTPS is set up for you.

### 1. Create the app

1. In the DigitalOcean control panel, go to **Create → App Platform**.
2. Connect your Git provider and pick this repository and the branch to deploy, for example `main`.
3. Leave **Source directory** as `/` (the repo root). The Express server builds and serves the React app, so this is a single web service.

### 2. Deployment settings

| Setting | Value |
|---|---|
| Build strategy | Buildpack (auto-detected Node.js) |
| Build command | *(leave empty)* |
| Run command | `npm start` |
| Public HTTP port | `8080` |

How these settings fit together:

- The Node.js buildpack runs `npm install`, then runs the root `build` script automatically. That script installs the client dependencies and builds the React app into `client/build`.
- App Platform sets `NODE_ENV=production` during the build. The `build` script passes `--include=dev` when it installs the client dependencies, so Vite (a devDependency) is still installed.
- App Platform passes the HTTP port to the app as the `PORT` environment variable, and `server.js` listens on it.

### 3. Environment variables

The `.env` file is not committed, so set these in the app's component under **Settings → Environment Variables**:

| Variable | Required | Notes |
|---|---|---|
| `SENDGRID_API_KEY` | For the contact form | Tick **Encrypt**. Without it, the site works but `/api/email` returns an error. |
| `MAIL_TO` / `MAIL_FROM` | No | Override the contact-form recipient and sender addresses. |

Do **not** set `PORT`; App Platform provides it.

### 4. Deploy

Click **Create Resources**. App Platform builds the app and gives you a `*.ondigitalocean.app` URL.

### 5. Custom domain with Cloudflare DNS

Follow these steps if your domain's nameservers point to Cloudflare. In the examples, replace `yourdomain.com` with your domain and `your-app.ondigitalocean.app` with your app's default URL.

#### a. Add the domains in App Platform

1. Go to the app's **Settings → Domains → Add Domain**.
2. Enter `yourdomain.com` and choose **You manage your domain** (keep your existing nameservers).
3. App Platform shows a **CNAME alias**, which is your app's `*.ondigitalocean.app` URL. Copy it.
4. Repeat for `www.yourdomain.com`. Each hostname must be added separately, or App Platform won't serve it.

App Platform also lists A records. You don't need them on Cloudflare, because Cloudflare supports a CNAME on the root domain (CNAME flattening).

#### b. Add the DNS records in Cloudflare

In Cloudflare, open the domain and go to **DNS → Records**. Delete any existing `A`, `AAAA` or `CNAME` records for `@` or `www`, then click **Add record** to create:

| Type | Name | Target | Proxy status | TTL |
|---|---|---|---|---|
| CNAME | `@` | `your-app.ondigitalocean.app` | **DNS only** (grey cloud) | Auto |
| CNAME | `www` | `your-app.ondigitalocean.app` | **DNS only** (grey cloud) | Auto |

#### c. Wait for the domains to become active

Back in App Platform under **Settings → Domains**, wait until both domains show **Active**. That means the DNS records were found and the HTTPS certificate was issued. It usually takes a few minutes. Then check that `https://yourdomain.com` and `https://www.yourdomain.com` both load.

#### d. Optional: Cloudflare proxy

DNS only (grey cloud) is the simplest and most reliable setup. To use Cloudflare's proxy (orange cloud) for caching and protection:

- Turn it on only **after** both domains are Active.
- Set **SSL/TLS → Overview** to **Full (strict)**. Do **not** use **Flexible**: App Platform redirects HTTP to HTTPS, so Flexible causes an endless redirect loop.
- If App Platform reports a problem renewing the certificate, switch the records back to DNS only until the renewal finishes.

### Deploying updates

Push to the deployed branch. If **Autodeploy** is on (the default), App Platform rebuilds and redeploys automatically. Otherwise, click **Actions → Force Rebuild and Deploy**.
