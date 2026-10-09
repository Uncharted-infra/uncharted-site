export type Entry = { keywords: string[]; answer: string };

export const ENTRIES: Entry[] = [
  {
    keywords: ["price", "pricing", "cost", "free", "pay", "expensive", "subscription", "fee", "charge", "much"],
    answer:
      "Uncharted is free while we're building. We'll announce pricing before anything changes, and early shops keep their terms.",
  },
  {
    keywords: ["signup", "sign", "join", "claim", "onboard", "start", "started", "register", "long", "minutes"],
    answer:
      "Signing up takes about ten minutes. You tell us your hours and pickup details, and your storefront is live.",
  },
  {
    keywords: ["website", "storefront", "menu", "site", "page", "hours", "online"],
    answer:
      "You don't need an existing website. Your Uncharted storefront comes with your menu, hours, and pickup details built in.",
  },
  {
    keywords: ["inventory", "stock", "ingredient", "ingredients", "track", "tracking", "supplies"],
    answer:
      "Every sale decrements the ingredients behind it. Uncharted keeps a live count of what's on hand and how many days each ingredient has left.",
  },
  {
    keywords: ["reorder", "supplier", "order", "out", "ran", "low", "restock"],
    answer:
      "When something is running low, Uncharted tells you what to order and when — based on how fast you're actually using it, not a fixed threshold.",
  },
  {
    keywords: ["flavor", "flavors", "trend", "trends", "trending", "network", "lab", "climbing", "popular"],
    answer:
      "Flavor trends are anonymous, aggregated demand across every shop on Uncharted. You see what's climbing before it's obvious — and get ideas for your next special.",
  },
  {
    keywords: ["privacy", "private", "data", "see", "competitor", "competitors", "other", "shops", "anonymous", "numbers", "safe"],
    answer:
      "Your numbers stay yours. Network trends are anonymous and aggregated — no shop ever sees another shop's sales, items, or customers.",
  },
  {
    keywords: ["pos", "square", "toast", "clover", "integration", "integrations", "register", "system"],
    answer:
      "You can start with Uncharted's ordering today. POS integrations — Square, Toast, and friends — are on the roadmap, so tell us what you use when you sign up.",
  },
  {
    keywords: ["payment", "payments", "stripe", "payout", "payouts", "card", "money", "deposit", "paid"],
    answer:
      "Stripe-backed payouts are planned so sales land in your bank without extra bookkeeping. It's on the roadmap — no date to promise yet.",
  },
  {
    keywords: ["pickup", "ordering", "checkout", "cart", "customer", "customers", "buy"],
    answer:
      "Customers order from your Uncharted storefront and pick up at your counter. You see every order, its status, and its pickup time in the dashboard.",
  },
  {
    keywords: ["delivery", "deliver", "shipping", "ship", "shipping", "driver", "doordash"],
    answer:
      "Uncharted is pickup-first — that's where margins are best for independent shops. Delivery options come later.",
  },
  {
    keywords: ["locations", "location", "team", "staff", "employees", "multiple", "accounts", "second"],
    answer:
      "Multiple locations and staff accounts are on the roadmap. Tell us your setup when you sign up — it helps us prioritize.",
  },
  {
    keywords: ["support", "contact", "help", "email", "question", "talk", "human", "someone"],
    answer:
      "Email hello@uncharted.sh and a human replies. We're small and we read everything.",
  },
  {
    keywords: ["bakery", "bakeries", "ice", "cream", "scoop", "candy", "chocolate", "chocolatier", "donut", "donuts", "patisserie", "cake", "cakes", "cookie", "cookies", "type", "kind", "shop", "shops"],
    answer:
      "Uncharted is built for independent sweet shops: bakeries, scoop shops, candy makers, patisseries, chocolatiers, donut shops — if it has sugar and a counter, it fits.",
  },
];

export const FALLBACK =
  "I don't have a good answer for that yet. Sign up and tell us what you need — we're building this with owners, and the roadmap follows real questions.";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "it", "do", "does", "i", "my", "can", "how",
  "what", "to", "of", "in", "on", "for", "with", "and", "or", "you",
  "your", "we", "our", "be", "are", "there", "this", "that", "will", "if",
]);

export function answer(question: string): string {
  const words = question
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));

  let best: Entry | null = null;
  let bestScore = 0;
  for (const entry of ENTRIES) {
    const score = entry.keywords.filter((k) =>
      words.some((w) => w.includes(k))
    ).length;
    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }
  return best?.answer ?? FALLBACK;
}
