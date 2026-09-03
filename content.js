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
   Add or remove paragraphs freely, the layout will adjust.
----------------------------------------------------------------- */
const siteContent_about = {
  eyebrow: "Who I am",
  headline: "An Executive Assistant who understands the bigger picture.",
  paragraphs: [
    "I support founders, executives and growing teams by taking ownership of the systems behind the work, including calendars, inboxes, CRM, documentation, research and project coordination, so decisions move faster and nothing important falls through.",
    "My approach combines traditional executive support with AI-powered workflows, using structured systems that summarize, prioritize and recommend next actions, not just track tasks.",
    "I started my career as a general virtual assistant, and that breadth of experience taught me to look beyond individual tasks and understand how different parts of a business connect. Since then, I've supported founders and CEOs across construction, real estate, AI, and healthcare, and I've found that my strongest work happens when I can bring structure to complexity, anticipate what is needed, and solve the problem rather than simply manage the task."
  ],
  placeholderNote: ""
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
  intro: "Measurable outcomes from my professional experience across past Executive Assistant and Operations roles.",
  items: [
    { stat: "30%", label: "Greater operational efficiency" },
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
   10. FROM MY DESK - manually add LinkedIn posts or professional notes
   -----------------------------------------------------------
   Copy the block below, paste it above "Placeholder 1", and fill
   in your own details. Delete the placeholder entries once you
   have real posts in place.

   Fields:
   - category: short label, e.g. "Workflow", "AI in Ops", "Productivity"
   - title: the headline of your post or note
   - excerpt: one or two sentences, your own words, never a full
     repost of the LinkedIn content
   - date: e.g. "Aug 2026"
   - linkedinUrl: the exact URL of your LinkedIn post
   - image: optional, a filename in /assets, or leave as null
----------------------------------------------------------------- */
const siteContent_desk = {
  eyebrow: "Professional activity",
  headline: "From my desk.",
  intro: "Selected notes and posts on executive operations, workflow design, and working with AI."
};

const fromMyDeskItems = [
  {
    category: "Placeholder",
    title: "Add your first LinkedIn post here",
    excerpt: "Replace this card with a real excerpt from a LinkedIn post you've written on executive operations, workflow design, or AI-powered administration.",
    date: "Add date",
    linkedinUrl: "",
    image: null
  },
  {
    category: "Placeholder",
    title: "Add a second post here",
    excerpt: "Each card in this section is manually added by editing this file. No rebuild of the website is required.",
    date: "Add date",
    linkedinUrl: "",
    image: null
  },
  {
    category: "Placeholder",
    title: "Add a third post here",
    excerpt: "Aim for a short, thoughtful excerpt in your own words rather than a full repost of the LinkedIn content.",
    date: "Add date",
    linkedinUrl: "",
    image: null
  }
];


/* ---------------------------------------------------------------
   11. LET'S CONNECT - the closing section
----------------------------------------------------------------- */
const siteContent_connect = {
  eyebrow: "Let's connect",
  headline: "If you're looking for an Executive Assistant who brings structure, initiative and operational thinking, let's talk.",
  ctaBookLabel: "Book a Clarity Call",
  ctaEmailLabel: "Email me",
  ctaLinkedinLabel: "Connect on LinkedIn"
};


/* ---------------------------------------------------------------
   CONTACT DETAILS & OUTBOUND LINKS
   These links are used across the whole site: Hero, Beyond
   Executive Operations, and Let's Connect all pull from here.
   Update a link once, in this one place, and every button that
   uses it updates automatically.
----------------------------------------------------------------- */
const contactInfo = {
  email: "Progressuchenwa@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/progress-uchenwa/",
  calendlyUrl: "https://calendly.com/progressuchenwa/30min?month=2026-09",
  creativePortfolioUrl: "https://canva.link/6343tfelmxw5k7b"
};


/* ---------------------------------------------------------------
   SITE META - browser tab title and search-engine description
----------------------------------------------------------------- */
const siteContent_meta = {
  pageTitle: "Progress Uchenwa: AI-Powered Executive Assistant | Executive Operations",
  metaDescription: "Progress Uchenwa is an AI-powered Executive Assistant specializing in executive operations, founder support, workflow and project coordination for founders, executives and growing businesses."
};
