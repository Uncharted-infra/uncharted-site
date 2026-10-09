import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { AskUncharted } from "./ask-uncharted";

export type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "What is Uncharted?",
    a: "A platform for independent sweet shops — bakeries, scoop shops, candy makers, patisseries. Your storefront, orders, inventory, and flavor insights in one dashboard.",
  },
  {
    q: "Do I need a website already?",
    a: "No. Signing up gives you a storefront with your menu, hours, and pickup details in about ten minutes.",
  },
  {
    q: "What does it cost?",
    a: "Free while we're building. We'll announce pricing before anything changes, and early shops keep their terms.",
  },
  {
    q: "How does inventory work?",
    a: "Every sale decrements the ingredients behind it. When something is running low, Uncharted tells you what to order and when.",
  },
  {
    q: "What are flavor trends?",
    a: "Anonymous, aggregated demand across every shop on Uncharted. You see what's climbing before it's obvious, without seeing any other shop's numbers.",
  },
  {
    q: "Can I use my own POS?",
    a: "You can start with Uncharted's ordering today. POS integrations are on the roadmap — tell us what you use when you sign up.",
  },
];

export function Faq({
  items = FAQS,
  title = "Questions",
}: {
  items?: FaqItem[];
  title?: string;
}) {
  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xs font-medium text-muted-foreground text-pretty">
            The short ones are here. For anything else, ask below.
          </p>
        </Reveal>
        <Reveal delay={100} className="-mt-4">
          <Accordion className="flex flex-col gap-4">
            {items.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="px-4 text-base font-bold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-medium text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <AskUncharted />
        </Reveal>
      </div>
    </section>
  );
}
