# Oubyt

A cinematic landing site for Oubyt, the animation studio in the Nartstudio family. The launch build follows Stage A of the site plan: a focused, anchored landing page plus a separate detailed project brief. It does not invent a showreel or client credits; the supplied artwork is presented as original story-world art.

## Run locally

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Build and type-check:

```powershell
npm run typecheck
npm run build
```

## Form delivery

Project and newsletter forms post to `/api/submit`. Configure `OUBYT_FORM_WEBHOOK_URL` with an HTTPS endpoint that routes submissions to the studio's approved CRM and mailing-list workflow. The endpoint receives JSON with a `kind` of `project` or `newsletter`, the submitted fields, and a timestamp. Set `OUBYT_FORM_WEBHOOK_SECRET` to send it as a bearer token. Without a configured endpoint, the API reports that submissions are unavailable; it never reports a false success.

Add rate limiting at the hosting firewall or webhook provider before launch. The app does not load analytics, external video embeds, or other optional cookies by default.

## Before public launch

- Replace the story-art hero treatment with the Creative Director-approved, captioned showreel and a selected poster frame.
- Confirm which NCU worlds are cleared to feature as Oubyt adaptation prospects and add production statuses only when approved.
- Configure and end-to-end test the project and newsletter webhook.
- Confirm the final domain, studio contact routing, legal-entity details, consent language, privacy policy, and cookie requirements.
- Add approved social/profile links and any public studio/team information.

The site links to the Nartstudio and Pylothouse family destinations. Public client work, team biographies, pricing promises, and release dates are intentionally not fabricated.

## Deployment

Import this repository into Vercel and set the environment variables above. Set `NEXT_PUBLIC_SITE_URL` to the final canonical URL when the domain is confirmed.
