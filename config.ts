// ============================================================================
// config.ts — Edit everything about the site's content from this one file.
// ============================================================================

export const profile = {
  name: "Nazla K",
  // Circular headshot used on the About page and in the sidebar/hero.
  // Swap the file in /public to update it everywhere at once.
  photo: "/profile-nazla.png",
  displayName: "Nazla.K",
  role: "Data Analyst | Economics Graduate",
  tagline: "Turning data into insights that drive better decisions.",
  location: "Kannur, Kerala, India",
  education: {
    degree: "BA Economics",
    college: "Nirmalagiri College, Kannur University",
    years: "2023 – 2026",
  },
  bio:
    "I'm Nazla K, a Data Analyst from Kannur who transforms raw, messy data into boardroom-ready insights using SQL, Python, Power BI, Excel and Google Analytics. My background in Economics and Statistics shapes how I think about data — always tying numbers back to the real-world decision they're meant to inform.",
  heroSubtext:
    "I'm Nazla, a Data Analyst who turns raw, messy data into boardroom-ready insight — using SQL, Python, Power BI, Excel and Google Analytics.",
  aboutStory: [
    "I've been obsessed with data since my BA Economics with Statistics degree — what started as curiosity with spreadsheets and regression tables turned into a growing toolkit spanning SQL, Python, and executive dashboards.",
    "My economics background means I don't just clean and chart data — I think about the decision it's meant to support, the incentives behind the numbers, and the story a stakeholder actually needs to hear.",
    "What I enjoy most is explaining complexity simply — turning 10,000 rows into a one-page story that supports a real, data-driven decision.",
  ],
  aboutBullets: [
    "3+ end-to-end case studies across e-commerce, retail & economic research",
    "7+ tools: Excel, Power BI, Tableau, SQL, Python, Google Analytics, AWS",
    "Certified by Google & AWS",
  ],
  socials: {
    github:  "https://github.com/Nazla-naaz", // TODO: replace with your GitHub URL
    linkedin: "https://www.linkedin.com/in/nazla-k-090561428", // TODO: replace with your LinkedIn URL
    email: "mailto:knazlaofficial@gmail.com", // TODO: replace with your email
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/#insights" },
  { label: "Library", href: "/library" },
  { label: "Certifications", href: "/certifications" },
  { label: "Framework", href: "/framework" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = [
  { label: "Case Studies", value: "3+" },
  { label: "Certifications", value: "3+" },
  { label: "Tools", value: "7+" },
  { label: "Domains", value: "3" },
];

export const dashboardMock = {
  windowTitle: "executive_dashboard — Power BI",
  totalRevenue: "$699K",
  rowsAnalyzed: "500K+",
  accuracy: "98.2%",
  revenueGrowth: "+24.3%",
  querySpeed: "0.012s",
  trend: [12, 18, 15, 22, 20, 28, 26, 34, 31, 40, 38, 46],
  sql: `WITH top_regions AS (
  SELECT region,
  SUM(sales) AS revenue
  FROM transactions
  GROUP BY 1
)
SELECT * FROM top_regions
ORDER BY revenue DESC`,
};

export const domains = ["E-commerce", "Retail", "Economic Research"];

export const tools = [
  "Excel (VLOOKUP, Pivot)",
  "Power BI",
  "Tableau",
  "SQL",
  "Python (Pandas)",
  "Google Analytics",
  "AWS",
];

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  domain: string;
  tools: string[];
  headlineStat: { label: string; value: string };
  year: string;
  summary: string;
  coverGradient: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    category: "Power BI",
    domain: "Retail",
    tools: ["Excel", "Power BI", "DAX"],
    headlineStat: { label: "Records Analyzed", value: "500+" },
    year: "2026",
    summary:
      "An interactive Power BI dashboard built from a 500+ record retail sales export, tracking revenue, regional performance and product-level trends for store managers.",
    coverGradient: "from-blue-600/40 via-blue-900/30 to-black",
    sections: [
      {
        heading: "Business Problem",
        body: "Store managers were reviewing sales in static monthly Excel exports, which made it slow to spot underperforming regions or products in time to act. Leadership wanted a single dashboard that could answer 'where are we losing revenue this month?' in under a minute.",
      },
      {
        heading: "Data Cleaning",
        body: "Consolidated 500+ transaction records from multiple Excel exports into one clean table using VLOOKUP and Power Query — standardising date formats, removing duplicate order IDs, and fixing inconsistent region and category labels.",
      },
      {
        heading: "Analysis",
        body: "Built pivot tables to break down revenue by region, category and month-over-month growth, then used DAX measures in Power BI to calculate running totals, growth rate, and average order value.",
      },
      {
        heading: "Visualisation",
        body: "Designed a single-page Power BI dashboard with KPI cards for total revenue and growth, a regional map, a top-products bar chart, and a monthly trend line — all filterable by region and date range.",
      },
      {
        heading: "Insight",
        body: "Two regions were driving 60% of total growth while a third was flat for three straight months. Flagging this let the sales lead reallocate a promotional budget toward the underperforming region the following quarter.",
      },
    ],
  },
  {
    slug: "amazon-walmart-sales-analysis",
    title: "Amazon & Walmart Sales Analysis",
    category: "Python & SQL",
    domain: "E-commerce",
    tools: ["Python", "Pandas", "SQL"],
    headlineStat: { label: "Revenue Compared", value: "$699K" },
    year: "2026",
    summary:
      "A comparative analysis of e-commerce sales data from Amazon and Walmart listings, exploring pricing, category performance and seasonal demand shifts using Python and SQL.",
    coverGradient: "from-amber-500/30 via-orange-900/30 to-black",
    sections: [
      {
        heading: "Business Problem",
        body: "A small e-commerce seller wanted to know whether their product mix and pricing were more competitive on Amazon or Walmart, and which categories deserved more ad spend on each platform.",
      },
      {
        heading: "Data Cleaning",
        body: "Loaded raw Amazon and Walmart sales exports into Pandas, handled missing prices and mismatched category names between the two platforms, and merged both datasets into one normalised schema using SQL joins.",
      },
      {
        heading: "Analysis",
        body: "Used SQL window functions to rank categories by revenue per platform, and Pandas groupby operations to compare average order value, return rate and seasonal demand curves between Amazon and Walmart.",
      },
      {
        heading: "Visualisation",
        body: "Built comparison charts in Python (Matplotlib/Seaborn) showing category-level revenue share and monthly demand seasonality side-by-side for both platforms.",
      },
      {
        heading: "Insight",
        body: "Walmart converted better on everyday-essentials categories while Amazon outperformed on higher-margin electronics accessories — pointing to a platform-specific ad budget split rather than a one-size-fits-all strategy.",
      },
    ],
  },
  {
    slug: "website-traffic-analysis",
    title: "Website Traffic Analysis",
    category: "Google Analytics",
    domain: "Economic Research",
    tools: ["Google Analytics", "Excel", "SQL"],
    headlineStat: { label: "Platform", value: "Google Analytics" },
    year: "2026",
    summary:
      "An analysis of website traffic and user behaviour using Google Analytics , identifying acquisition channels and content that drove the most engaged sessions.",
    coverGradient: "from-emerald-500/30 via-emerald-900/30 to-black",
    sections: [
      {
        heading: "Business Problem",
        body: "The site owner didn't know which traffic sources were actually bringing in engaged visitors versus which were inflating raw visit counts without contributing to meaningful engagement.",
      },
      {
        heading: "Data Cleaning",
        body: "Pulled session, channel and engagement data from Google Analytics (ID 192852264), filtered out bot traffic and internal visits, and exported the cleaned data into Excel for further segmentation.",
      },
      {
        heading: "Analysis",
        body: "Segmented sessions by acquisition channel, landing page and device type, then calculated engagement rate and average session duration per channel to separate high-value traffic from low-value traffic.",
      },
      {
        heading: "Visualisation",
        body: "Built an Excel dashboard summarising channel performance, top landing pages, and a weekly traffic trend line, designed to be reviewed in a five-minute stakeholder check-in.",
      },
      {
        heading: "Insight",
        body: "Organic search brought the most visits, but referral traffic had nearly double the engagement rate — a case for investing more in the two referral partners driving that traffic rather than chasing raw search volume alone.",
      },
    ],
  },
];

export const frameworkSteps = [
  {
    step: "01",
    title: "Business Understanding",
    body: "Every analysis begins with the business question, not the data. I start by understanding what decision needs to be made, who needs to make it, and what information would change their course of action.",
    outputs: ["Problem statement", "Success metrics", "Stakeholder map", "Decision context"],
    tools: ["Stakeholder interviews", "Business documents", "KPI frameworks"],
  },
  {
    step: "02",
    title: "Data Collection",
    body: "Identify all relevant data sources — databases, APIs, flat files, third-party exports. I document source systems and assess data availability before writing a single query.",
    outputs: ["Data inventory", "Source documentation", "ERD diagram"],
    tools: ["SQL", "Excel", "Google Analytics", "APIs"],
  },
  {
    step: "03",
    title: "Data Cleaning",
    body: "Raw data is rarely usable as-is. I handle missing values, duplicates, inconsistent formats and outliers, documenting every transformation so the process stays reproducible.",
    outputs: ["Cleaning log", "Validation checks", "Clean dataset"],
    tools: ["Python (Pandas)", "Power Query", "SQL"],
  },
  {
    step: "04",
    title: "Exploratory Analysis",
    body: "Before modelling anything, I explore distributions, correlations and anomalies to build intuition for what the data can and can't tell me.",
    outputs: ["Summary statistics", "Distribution charts", "Early hypotheses"],
    tools: ["Python", "Excel", "Tableau"],
  },
  {
    step: "05",
    title: "Analysis & Modelling",
    body: "I apply the right technique for the question — from pivot tables and SQL aggregations to statistical tests and lightweight predictive models — and no further.",
    outputs: ["Analysis notebook", "Model results", "Statistical validation"],
    tools: ["Python", "SQL", "Excel"],
  },
  {
    step: "06",
    title: "Visualisation",
    body: "I design charts and dashboards around the decision they need to support, not around what looks impressive — clarity always wins over decoration.",
    outputs: ["Dashboard", "Chart set", "Interaction design"],
    tools: ["Power BI", "Tableau", "Excel"],
  },
  {
    step: "07",
    title: "Insight Generation",
    body: "Numbers alone aren't insight. I translate patterns into plain-language findings tied directly back to the original business question.",
    outputs: ["Key findings", "Insight summary"],
    tools: ["Written analysis", "Stakeholder review"],
  },
  {
    step: "08",
    title: "Recommendation",
    body: "Every insight ends with a recommended action — specific enough that a stakeholder can act on it without needing to re-interpret the data themselves.",
    outputs: ["Recommendation memo", "Prioritised actions"],
    tools: ["Business documents", "Decision frameworks"],
  },
  {
    step: "09",
    title: "Implementation Support",
    body: "I stay involved after the handoff — tracking whether the recommended action moved the metric it was meant to, and adjusting the analysis if not.",
    outputs: ["Tracking plan", "Follow-up review"],
    tools: ["Dashboards", "Google Analytics"],
  },
  {
    step: "10",
    title: "Documentation",
    body: "Every project is documented so it can be reproduced, audited or handed off — from data sources through to final recommendation.",
    outputs: ["Case study writeup", "Technical documentation"],
    tools: ["Markdown", "GitHub", "Portfolio site"],
  },
];

export const certifications = {
  completed: [
    {
      issuer: "Google",
      title: "Google Analytics Certified",
      meta: "ID: 192852264 · 2026",
      tags: ["Google Analytics", "Web Analytics", "Reporting"],
    },
    {
      issuer: "AWS",
      title: "AWS Data Engineering Certified",
      meta: "2026",
      tags: ["AWS", "Data Pipelines", "Cloud"],
    },
    {
      issuer: "Deloitte",
      title: "Data Analyst",
      meta: "2026",
      tags: ["SQL", "Python", "Power BI", "Excel"],
    },
  ],
};

export type Book = {
  title: string;
  author: string;
  category: string;
  rating: number;
  blurb: string;
};

export const libraryCategories = [
  "All",
  "Communication",
  "Statistics",
  "Behaviour",
  "Forecasting",
  "Data Engineering",
  "Economics",
];

export const books: Book[] = [
  {
    title: "Storytelling with Data",
    author: "Cole Nussbaumer Knaflic",
    category: "Communication",
    rating: 5,
    blurb: "A practical playbook for turning charts into narratives that actually change a decision-maker's mind.",
  },
  {
    title: "Naked Statistics",
    author: "Charles Wheelan",
    category: "Statistics",
    rating: 4,
    blurb: "Statistical thinking without the academic armor — a great refresher on the ideas behind every test I run.",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Behaviour",
    rating: 5,
    blurb: "Every analyst should understand the biases of the humans who will read their charts.",
  },
  {
    title: "The Signal and the Noise",
    author: "Nate Silver",
    category: "Forecasting",
    rating: 4,
    blurb: "Where prediction works, where it fails, and why probabilistic thinking matters more than false certainty.",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "Data Engineering",
    rating: 5,
    blurb: "The reference that turned me from someone who just queries the warehouse into someone who understands it.",
  },
  {
    title: "Freakonomics",
    author: "Levitt & Dubner",
    category: "Economics",
    rating: 4,
    blurb: "A reminder that the most interesting insights usually come from asking an unexpected question of ordinary data.",
  },
];

export const portfolioGrowth = {
  growthRate: "+24.3%",
  score: "78%",
  trend: [10, 14, 12, 18, 22, 20, 26, 30, 28, 34],
};
