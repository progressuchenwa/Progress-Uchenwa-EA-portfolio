# Progress Uchenwa: Executive Assistant Portfolio

Plain HTML/CSS/JavaScript. No build step, open `index.html` directly
in a browser, or deploy the folder as-is to Vercel later.

## Folder structure

```
index.html        page structure only, layout containers, no wording
css/style.css       all visual design: colors, type, spacing, motion
js/content.js        EVERY piece of website text lives here, edit this
js/main.js           reads content.js and builds the page, no editing needed
assets/              your real photos and work-sample screenshots
```

## Editing the website

Open `js/content.js`. Every section of the site has its own clearly
labeled block with plain-English instructions above it:

1. Hero wording
2. Positioning strip words
3. About / Who I Am text
4. My Approach steps
5. Executive Capabilities
6. Selected Results (your verified stats)
7. Project Samples (add new ones any time, see below)
8. Tools & Systems list
9. Beyond Executive Operations
10. From My Desk (LinkedIn posts)
11. Let's Connect wording
12. Contact details (email, LinkedIn, Calendly, creative portfolio link)
13. Page title / meta description

Change the text between the quotes, save, refresh the browser. You
never need to open `index.html`, `style.css` or `main.js` for routine
wording updates, only `content.js`.

## Adding a new Project Sample later

In `js/content.js`, find `siteContent_work.caseStudies`. Copy one
full project block (from its opening `{` to closing `}`), paste it
above or below an existing one in the list, and fill in your own
title, images, and the four narrative fields (challenge, approach,
tools, outcome). No design or layout changes are needed, the section
is built to keep growing as you add real AI systems, web apps, or
other work.

## Adding a new "From My Desk" post

In `js/content.js`, find `fromMyDeskItems`. Copy one entry, paste it
above the placeholder entries, and fill in your category, title,
excerpt, date and LinkedIn URL. Delete the placeholder entries once
you have three or more real posts.

## Before this goes live, still needs your review

- Real "From My Desk" posts (currently 3 placeholder cards, each shows
  "Link pending" until you add a linkedinUrl)

All contact and outbound links (email, LinkedIn, Calendly, creative
portfolio) are already filled in with your real details in
`contactInfo`, at the bottom of the "content" sections in
`js/content.js`. Update any of them there, in one place, any time
they change, and every button using that link updates automatically.

## Photography

- `assets/hero-portrait.png`: background removed from your original
  high-resolution photo, used in the Hero
- `assets/about-portrait.jpg`: your original office photo, natural
  background kept, used in About
- `assets/connect-portrait.png`: a closer crop of the hero cutout,
  available if you want a second portrait moment in Let's Connect

## Next step

See Claude's message for what to review, then we move to GitHub and
Vercel once you've signed off on this pass.
