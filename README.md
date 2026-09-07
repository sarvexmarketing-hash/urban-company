# Apex Media

A mobile-first web application for **Apex Media** featuring on-demand services, 3D category cards, verified gig worker matching, in-app direct calling, and instant booking workflows.

## Features

- **Header & Location Bar**: Signature purple gradient background with interactive location selector modal and rotating search queries.
- **3D Service Categories**: 6-grid core categories (Women's Salon, Men's Salon, Cleaning, Painting, AC Repair, Electrician/Plumber) with 3D illustration icons.
- **Native Smart Products & Spotlight Carousel**: Showcases Native M3 Pro Water Purifiers, Smart Locks, and seasonal promotional banners with scroll snapping indicators.
- **Verified Gig Worker Profiles**: Tapping any service displays real-time available professionals with ratings, completed job counts, skill tags, and live ETA.
- **📞 Direct Call Simulation**: In-app secure call screen with timer, mute/end controls, and direct tel dialing fallback.
- **⚡ Instant Worker Booking**: One-tap date/time slot selection and booking confirmation screen.

## Project Structure

```
├── index.html       # DOM structure and interactive bottom sheets / modals
├── style.css        # Responsive styling and design system tokens
├── app.js           # Interactive state, gig workers DB, calling & booking logic
└── images/          # 3D category icons, banners, and service assets
```

## Running Locally

Simply open `index.html` in any browser or serve with a local HTTP server:

```bash
# Using Python
python3 -m http.server 5173

# Or using Node
npx serve
```
