/* =========================================================
   CONTENT.JS
   -----------------------------------------------------------
   This is the ONLY file you should need to open to update the
   words on your website. Nothing in here controls colors,
   fonts, spacing or layout, that all lives safely in
   css/style.css and stays untouched no matter what you edit
   here.

   HOW TO EDIT
   Every piece of text below sits inside quotes "like this".
   Change the words between the quotes, save the file, and
   refresh the website in your browser. Do not delete the
   quotes, commas, or curly braces { } - those hold the
   structure together.

   If you're ever unsure, copy this whole file, make your
   change in the copy, and send both to Claude to check before
   replacing the real file.
========================================================= */


/* ---------------------------------------------------------------
   1. HERO - the very first thing a visitor sees
----------------------------------------------------------------- */
const siteContent_hero = {
  eyebrow: "AI-Powered Executive Assistant",
  name: "Progress Uchenwa",
  subline: "Executive Operations · Founder Support · Workflow & Project Coordination",
  body: "I bring structure, initiative and operational thinking to founders and executives who need more than tasks completed. They need someone who understands the bigger picture.",
  ctaPrimaryLabel: "View my work",
  ctaPrimaryHref: "#work",
  ctaSecondaryLabel: "Book a Clarity Call",
  ctaSecondaryHref: "calendly"
};


/* ---------------------------------------------------------------
   2. POSITIONING STRIP - the moving text band under the hero
----------------------------------------------------------------- */
const siteContent_positioningWords = [
  "Executive Support",
  "Operations",
  "Workflow Design",
  "AI-Enabled Systems",
  "Project Coordination",
  "Decision Support"
];


/* ---------------------------------------------------------------
   3. ABOUT / WHO I AM
   introParagraphs sit beside the photograph. storyParagraphs run
   at full width underneath it, once the intro paragraphs end.
   Add or remove paragraphs from either array freely.
----------------------------------------------------------------- */
const siteContent_about = {
  eyebrow: "Who I am",
  headline: "An Executive Assistant who understands the bigger picture.",
  introParagraphs: [
    "I support founders, executives and growing teams by taking ownership of the systems behind the work, including calendars, inboxes, CRM, documentation, research and project coordination, so decisions move faster and nothing important falls through.",
    "My approach combines traditional executive support with AI-powered workflows, using structured systems that summarize, prioritize and recommend next actions, not just track tasks.",
    "I started my career as a general virtual assistant, taking on whatever a business needed done. That early exposure to different tasks, tools and industries taught me to look beyond individual requests and understand how the different parts of a business connect. As my experience grew, I moved into Executive Assistant and Executive Operations work, supporting founders, CEOs and executives who needed someone to think alongside them, not just carry out instructions."
  ],
  storyParagraphs: [
    "Somewhere in that transition, I noticed the trait that shapes most of how I work: I am resourceful. When an executive gives me a problem, my instinct is to figure it out. If I do not know something, I research it. If information is scattered, I find it and bring it together. If a process is unclear, I work through it until it makes sense. If something needs following up, I follow it through until it is done. This is a large part of why executives trust me with a wide range of responsibilities.",
    "But that same resourcefulness can quietly become a weakness. Being comfortable figuring things out can make it tempting to want to handle everything personally, simply because I know I can. Over time I learned that being an effective Executive Assistant is not about proving I can do it all. It is about knowing what I should handle myself, what should be delegated, what can be automated, what technology can help with, and what genuinely needs the executive's direct attention.",
    "That shift changed how I think about the work. I no longer measure executive support only by tasks completed. I think about understanding the bigger picture, identifying what actually matters, building better systems for recurring work, organizing information so it is usable, closing loops instead of leaving them open, and making sure the important things keep moving even when I am not the one moving them. In practice, that means solving the problem rather than simply managing the task."
  ],
  placeholderNote: ""
};


/* ---------------------------------------------------------------
   3B. WHAT CLIENTS SAY - a real, complete testimonial
   Add more entries later by copying the object inside "items".
   Only ever use testimonials you have actually received; never
   invent a quote or attribute a name to a made-up person.
----------------------------------------------------------------- */
const siteContent_testimonial = {
  eyebrow: "What clients say",
  headline: "A few words from someone I've supported.",
  items: [
    {
      quote: "Progress has been a trusted member of our team, providing executive support while contributing to AI systems and process development. She has experience with calendar and inbox management, meeting coordination, research, CRM updates, project tracking, travel coordination, documentation and client follow-up and much more. She handles confidential information carefully, communicates clearly and keeps priorities moving. Progress also supports AI projects by reviewing business processes, identifying repetitive work, developing prompts, testing AI workflows and documenting systems through clear SOPs. She learns new tools quickly, asks thoughtful questions and applies feedback well. I confidently recommend her for executive support, operations and AI workflow projects.",
      name: "Monica M."
    }
  ]
};


/* ---------------------------------------------------------------
   4. MY APPROACH - the 5-step workflow
   Each step needs a title and a short description. Order matters.
----------------------------------------------------------------- */
const siteContent_approach = {
  eyebrow: "My approach",
  headline: "How I handle executive work.",
  intro: "Every engagement follows the same operating rhythm, built from real systems, not improvised task by task.",
  steps: [
    { title: "Capture requests", description: "Gather essential information, requests and priorities for efficient management." },
    { title: "Organize systems", description: "Structure calendars, inboxes and documents for optimal workflow." },
    { title: "Prioritize tasks", description: "Assess urgency and importance to manage deadlines effectively." },
    { title: "Execute plans", description: "Coordinate communication and conduct research to achieve goals." },
    { title: "Follow up", description: "Ensure actions are completed, updates provided and next steps defined, work that has driven up to 40% higher on-time task completion in past roles." }
  ]
};


/* ---------------------------------------------------------------
   5. EXECUTIVE CAPABILITIES
   "image" is optional, leave it out entirely if a capability has
   no supporting visual. Order controls the order they appear on
   the page.
----------------------------------------------------------------- */
const siteContent_capabilities = {
  eyebrow: "What I help with",
  headline: "Executive capabilities.",
  items: [
    { title: "Executive Support", detail: "Calendar structuring, inbox management, meeting preparation and follow-through: the daily work that keeps an executive's time protected. This has cut scheduling conflicts by 35 to 40% and administrative delays by 30% in past roles." },
    { title: "Strategy & Workflow", detail: "Designing the operating rhythm behind a team or founder's work: the systems that turn ad hoc requests into a repeatable process.", image: "assets/support-strategy.png" },
    { title: "SOPs & Process Documentation", detail: "Turning informal processes into documented, repeatable SOPs so knowledge doesn't live in one person's head. In past roles, this has cut documentation turnaround time by 25%.", image: "assets/support-sop.png" },
    { title: "Process Optimization", detail: "Identifying friction in existing workflows and redesigning them for speed, clarity and fewer dropped handoffs." },
    { title: "CRM Management", detail: "Structuring and maintaining CRM systems: relationship status, priority and follow-up ownership, so no stakeholder relationship goes cold." },
    { title: "Data Management", detail: "Organizing and maintaining the data behind decisions, clean, structured and easy for an executive to act on quickly, with 100% record accuracy maintained in past roles." },
    { title: "Data Cleaning & Transformation", detail: "Turning messy, inconsistent spreadsheets into clean, structured data using Excel and Power Query, ready for analysis or reporting.", image: "assets/case-data-clean.png" },
    { title: "AI-Powered Executive Operations", detail: "Building AI-assisted systems that summarize activity, flag priorities and recommend next actions, so nothing important gets missed as the workload grows." },
    { title: "Project Coordination", detail: "Coordinating projects from kickoff to completion: timelines, ownership, dependencies and keeping every stakeholder updated on status. This work has cut project delays by up to 40% in past roles." },
    { title: "Invoice & Payment Coordination", detail: "Tracking invoices, following up with vendors and service providers, collecting missing documentation, confirming payment-related information, and coordinating invoice submission with accounting." },
    { title: "Executive Decision Support", detail: "Preparing structured comparisons and recommendations, not just information, but a clear point of view an executive can act on." },
    { title: "Research & Information Management", detail: "Research and information management: turning scattered inputs into a clear, organized brief." }
  ]
};


/* ---------------------------------------------------------------
   6. SELECTED RESULTS
   A small, curated set of your strongest measurable results.
   Only use verified numbers, never estimate or invent one.
   Keep this list short (4 to 8 items) so it reads as a
   considered selection rather than a wall of statistics.
----------------------------------------------------------------- */
const siteContent_results = {
  eyebrow: "Selected results",
  headline: "Results at a glance.",
  intro: "Selected, verified outcomes from across my Executive Assistant and Operations roles. These are not from a single client or project, and they are not averages, they are individual results I can stand behind.",
  items: [
    { stat: "30%", label: "Greater operational efficiency" },
    { stat: "30%", label: "Reduction in administrative delays" },
    { stat: "40%", label: "Fewer scheduling conflicts" },
    { stat: "40%", label: "Higher on-time task completion" },
    { stat: "25%", label: "Reduction in bid and documentation turnaround time" },
    { stat: "100%", label: "Record accuracy" },
    { stat: "40%", label: "Reduction in project delays" }
  ]
};


/* ---------------------------------------------------------------
   7. PROJECT SAMPLES
   Each project needs 1 or more images (first image is the
   large/primary one) and the four narrative fields. Set
   "reverse": true to flip the layout so image and text swap
   sides, use this to alternate rhythm between projects.

   This list is built to grow. To add a new project later, copy
   one full block from { tag: ... } to the closing }, and paste
   it above or below an existing one, then fill in your own
   details. No design changes are needed to add more.
----------------------------------------------------------------- */
const siteContent_work = {
  eyebrow: "Evidence",
  headline: "Project samples.",
  intro: "Real work, selected to show how I organize, prioritize and support executive decision-making. Portfolio samples are labeled as such.",
  caseStudies: [
    {
      tag: "Sample system",
      title: "AI-Powered Executive Operations",
      images: [
        { src: "assets/case-ai-ops.png", alt: "Monday.com board titled AI-Powered Executive Operations System, showing tasks grouped by status with an AI Summary and Recommended Action generated for each item" }
      ],
      challenge: "Manual task tracking tells you what's due. It doesn't tell you what matters or what to do next.",
      approach: "Built an operations board where every task carries an AI-generated summary and a recommended next action, grouped by priority and decision status.",
      tools: "Monday.com, AI-assisted summarization",
      outcome: "A system that surfaces what needs executive attention first, rather than a flat list of tasks.",
      reverse: false
    },
    {
      tag: "Sample system",
      title: "Executive CRM & Relationship Management",
      images: [
        { src: "assets/case-crm.png", alt: "Monday.com board titled Executive CRM and Relationship Management, showing stakeholders grouped by Nurture, Follow-Up Required, Active Relationships and High Priority" }
      ],
      challenge: "Stakeholder relationships lose momentum when follow-up ownership isn't clear.",
      approach: "Designed a relationship-management system tracking status, priority, last interaction and next follow-up, grouped for daily triage.",
      tools: "Monday.com",
      outcome: "A single source of truth for who needs outreach, and who owns it.",
      reverse: true
    },
    {
      tag: "Sample project",
      title: "Website Rebranding Project Coordination",
      images: [
        { src: "assets/case-project-dashboard.png", alt: "Asana dashboard for the Website Rebranding Project showing completed, incomplete and overdue task counts" },
        { src: "assets/case-project-board.png", alt: "Asana board view of the Website Rebranding Project with columns Review, Completed, In Progress and Backlog" },
        { src: "assets/case-project-list.png", alt: "Asana list view of the Website Rebranding Project grouped into Review, Completed and In Progress sections" }
      ],
      challenge: "Cross-functional projects need visibility at both the detail level and the status level.",
      approach: "Coordinated the project across dashboard, board and list views: planning in one, executing in another, reporting from a third.",
      tools: "Asana",
      outcome: "Every stakeholder could check progress in the view that suited them, without asking for a status update. This kind of coordination has cut project delays by up to 40% in past roles.",
      reverse: false
    },
    {
      tag: "Sample system",
      title: "Executive Decision Support",
      images: [
        { src: "assets/case-decision-support.png", alt: "Google Sheets travel booking tracker with a cost comparison table across three travel-pass options and a written recommendation" }
      ],
      challenge: "A recurring travel program needed a clear answer: is the current booking arrangement still worth it?",
      approach: "Tracked every trip leg, then built a side-by-side comparison of three booking options with cost-per-trip math.",
      tools: "Google Sheets",
      outcome: "A direct recommendation grounded in the numbers, not just a spreadsheet of options.",
      reverse: true
    },
    {
      tag: "Sample itinerary",
      title: "Executive Travel & Itinerary Management",
      images: [
        { src: "assets/case-travel-1.jpg", alt: "TripIt itinerary overview for a multi-week Greece trip, showing lodging, flights and car rental plans on a day-by-day timeline" },
        { src: "assets/case-travel-3.jpg", alt: "TripIt itinerary detail showing sequential lodging checkouts, flights and hotel check-ins across multiple stops in Greece" },
        { src: "assets/case-travel-2.jpg", alt: "TripIt itinerary detail showing a ferry transfer, hotel changes and return flight across the final days of the trip" }
      ],
      challenge: "A multi-stop international trip involves many moving parts: flights, lodging changes, car rentals and inter-island transfers, all of which need to line up correctly.",
      approach: "Built a complete day-by-day itinerary in TripIt covering every leg of a multi-week trip, sequencing lodging, flights, car rentals and ferry transfers so nothing overlapped or fell through.",
      tools: "TripIt",
      outcome: "A single, organized itinerary the traveler could follow city to city without re-checking bookings across multiple sources.",
      reverse: false
    },
    {
      tag: "Sample dataset",
      title: "Data Cleaning & Transformation",
      images: [
        { src: "assets/case-data-messy.png", alt: "Raw personal finance spreadsheet with inconsistent categories, mismatched subcategory and category-type labels" },
        { src: "assets/case-data-clean.png", alt: "Cleaned and consistently formatted version of the same spreadsheet, with a Clean Data tab alongside Calculated Metrics, Pivot Table and Dashboard tabs" }
      ],
      challenge: "A raw transaction export had duplicate entries, inconsistent formatting and mismatched category labels, making it unusable for analysis.",
      approach: "Cleaned and standardized the dataset using Excel and Power Query, correcting mismatched categories and inconsistent formatting, then structured it to support further analysis.",
      tools: "Excel, Power Query",
      outcome: "A clean, consistently formatted dataset that fed directly into calculated metrics, a pivot table and a dashboard in the same workbook.",
      reverse: true
    }
  ]
};


/* ---------------------------------------------------------------
   8. TOOLS & SYSTEMS
   Only list tools you actually use and can demonstrate.
----------------------------------------------------------------- */
const siteContent_tools = {
  eyebrow: "How I work",
  headline: "Tools & systems.",
  items: [
    "Monday.com",
    "Asana",
    "Google Workspace",
    "Google Sheets",
    "Excel",
    "Power Query",
    "TripIt",
    "Canva",
    "Google Drive",
    "Google Calendar"
  ]
};


/* ---------------------------------------------------------------
   9. BEYOND EXECUTIVE OPERATIONS
----------------------------------------------------------------- */
const siteContent_beyond = {
  eyebrow: "Beyond executive operations",
  headline: "A versatile professional, when it's useful to you.",
  body: "Alongside executive operations, I also work across social media management, content coordination and Canva design, work that has cut content production time by 40% and grown engagement by 20% in past roles. This work lives in a separate portfolio.",
  ctaLabel: "View My Creative Work"
};


/* ---------------------------------------------------------------
   10B. FINAL CTA - the closing value statement, right before
   the contact section
----------------------------------------------------------------- */
const siteContent_closing = {
  eyebrow: "Why work with me",
  headline: "More structure behind the work. More room for the work that matters.",
  paragraphs: [
    "When you are managing a growing business, the details can quickly compete with the decisions that actually need your attention.",
    "I help founders and executives take control of the moving parts behind their work, from calendars and communication to projects, research, documentation, CRM, follow-ups and AI-assisted workflows.",
    "The goal is simple: you have a reliable person making sure the details are handled, the information is organized and the important things keep moving.",
    "If that is the kind of support you are looking for, let's have a conversation."
  ]
};


/* ---------------------------------------------------------------
   11. LET'S CONNECT - the closing contact section
----------------------------------------------------------------- */
const siteContent_connect = {
  eyebrow: "Let's connect",
  headline: "If you're looking for an Executive Assistant who brings structure, initiative and operational thinking, let's talk.",
  ctaBookLabel: "Book a Clarity Call",
  ctaEmailLabel: "Email Me",
  ctaLinkedinLabel: "View LinkedIn",
  ctaUpworkLabel: "View My Upwork Profile"
};


/* ---------------------------------------------------------------
   CONTACT DETAILS & OUTBOUND LINKS
   These links are used across the whole site: Hero, Beyond
   Executive Operations, and Let's Connect all pull from here.
   Update a link once, in this one place, and every button that
   uses it updates automatically.

   linkedinVisible is now true: Peeamaka has regained access to her
   LinkedIn account, so the "View LinkedIn" button in Let's Connect
   uses this URL.
----------------------------------------------------------------- */
const contactInfo = {
  email: "Progressuchenwa@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/ukamaka/",
  linkedinVisible: true,
  calendlyUrl: "https://calendly.com/progressuchenwa/30min?month=2026-09",
  creativePortfolioUrl: "https://canva.link/6343tfelmxw5k7b",
  upworkUrl: "https://www.upwork.com/freelancers/~0174956771173a3a84?mp_source=share"
};


/* ---------------------------------------------------------------
   12. BEHIND THE EA DESK - ongoing LinkedIn story series
   -----------------------------------------------------------
   The final content section before the footer: short, personal,
   professional reflections that live first on LinkedIn, shown as
   a slow-moving editorial carousel.

   This list is designed to hold about five stories at a time.
   Two kinds of entries:

   1. A REAL STORY - an object with these fields:
      - category: short label, e.g. "Executive Support · Problem Solving"
      - title: the headline of your post or reflection
      - excerpt: one or two sentences, your own words, never a full
        repost of the LinkedIn content
      - date: e.g. "Sep 2026", or "" to leave it off the card
      - linkedinUrl: the exact URL of that specific LinkedIn post
        (not your general profile link)
      - image: a filename in /assets, or null if you don't have
        one yet

   2. AN EMPTY SLOT - just { empty: true }. This renders as a
      quiet "more stories coming soon" card instead of a real
      story card, so the carousel never shows fake content
      dressed up as real. To add your next real story, replace
      one { empty: true } line with a full story object above.
----------------------------------------------------------------- */
const siteContent_behindDesk = {
  eyebrow: "Behind the EA desk",
  headline: "What it's really like behind the EA desk.",
  intro: "Ongoing reflections on executive support, workflow design and working alongside AI, shared first on LinkedIn."
};

const behindDeskItems = [
  {
    category: "Executive Support · Problem Solving · Resourcefulness",
    title: "The Courier Failed. I Recovered $220 for My Executive.",
    excerpt: "A real EA story about taking ownership when something went wrong and finding a way to recover the money.",
    date: "",
    linkedinUrl: "https://lnkd.in/p/eivh4Bts",
    image: "assets/behind-desk-01.jpg"
  },
  {
    category: "Executive Support · Problem Solving · Logistics Coordination",
    title: "How I moved 50 bottles of wine without leaving my desk.",
    excerpt: "My executive's wine storage move ran into a 30-day cancellation window that had already been charged for the coming month. Rather than treating that as the end of the conversation, I focused on the real objective: getting the wine moved. I coordinated a new pickup date with the storage facility and brought in a courier to handle the rest, all from my laptop.",
    date: "",
    linkedinUrl: "https://lnkd.in/p/eGGT8Sze",
    image: "assets/behind-desk-02.jpg"
  },
  {
    category: "Executive Support · Problem Solving · Anticipatory Planning",
    title: "How I Held Two Flights for a Trip Nobody Had Decided On Yet.",
    excerpt: "An event was already on the calendar, but the travel dates were not confirmed, with two different days both still possible. Rather than wait for a final answer, I checked the calendar and held flight options for both. When the plan changed, the flights were already covered and the next step could be handled immediately, with no scrambling and no lost options.",
    date: "",
    linkedinUrl: "https://lnkd.in/p/eP5eRcG7",
    image: "assets/behind-desk-03.jpg"
  },
  {
    category: "Executive Support · Problem Solving · Travel Coordination",
    title: "How I Narrow Down the Options Before They Ever Reach My Executive.",
    excerpt: "A multi-day trip was coming up, but the travel details were scattered across conversations, with flights, hotels, train options and changing meeting times all being discussed separately. Instead of sending my executive a pile of options to sort through, I pulled everything together, checked what actually worked around his schedule, and narrowed it down to a clear proposal. Within 48 hours, the flights and hotel were booked and confirmed.",
    date: "",
    linkedinUrl: "https://lnkd.in/p/erx5wa3e",
    image: "assets/behind-desk-04.jpg"
  },
  {
    category: "Executive Support · Problem Solving · Stakeholder Communication",
    title: "How I realized a referral isn't always enough.",
    excerpt: "My executive was considering joining a professional network after being referred by an existing member. When the initial route to an introduction failed, I kept looking for another way to get the right contact, verify the information, coordinate the conversation, and get everything onto my executive's calendar.",
    date: "",
    linkedinUrl: "https://lnkd.in/p/eq4BGb-b",
    image: "assets/behind-desk-05.jpg"
  }
];


/* ---------------------------------------------------------------
   SITE META - browser tab title and search-engine description
----------------------------------------------------------------- */
const siteContent_meta = {
  pageTitle: "Progress Uchenwa: AI-Powered Executive Assistant | Executive Operations",
  metaDescription: "Progress Uchenwa is an AI-powered Executive Assistant specializing in executive operations, founder support, workflow and project coordination for founders, executives and growing businesses."
};
