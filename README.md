# Curiosity Bot

A tiny web app that helps adults stay curious. You tell it when you have 5–10 minutes of free time, and it sends you a daily browser reminder with a surprising animal fact and a chat companion to dig into it.

## Features

- **Free-time onboarding** — describe when you're free and pick a time of day.
- **Animal facts** — frogs drinking through their skin, octopuses with three hearts, dolphins sleeping with half a brain, and more.
- **Curiosity chat** — ask *why?*, request a deeper layer, or share your thoughts. The bot answers with the science, a surprising connection, or a reflective follow-up question.
- **Daily reminder** — browser notification at your chosen time (tab must be open).
- **Remembers you** — your answer and time persist in `localStorage`.

## Running locally

It's a static site — no build step.

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Files

- `index.html` — markup for the welcome page and the home page (fact + chat).
- `styles.css` — gradient background, two-column home layout, chat bubbles.
- `script.js` — page routing, facts data, chat responses, notification scheduling.

## Notes on notifications

Browser notifications fire while the tab is open. For background reminders (closed tab, phone lock screen) the app would need to become a PWA with a service worker and a push server.
