# Deploy Instructions

## Pre-deploy checklist
- [ ] Replace `G-XXXXXXXXXX` with real GA4 Measurement ID
- [ ] Replace `DEPLOY_STEP_REPLACE_WITH_VERIFICATION_CODE` with Google Search Console verification code
- [ ] Update sitemap.xml domain to actual domain
- [ ] Update robots.txt sitemap URL to actual domain
- [ ] Update og:url to actual domain

## Deploy command
```bash
cd "Demos/Business-Commerce/Next Generation Downtown/Demo 1"
npm run build && npx wrangler deploy
```

## Custom domain
After initial deploy, add custom domain in Cloudflare dashboard.
