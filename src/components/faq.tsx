"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./ui/container";
import { useRef } from "react";
import { useInView } from "framer-motion";
import WordPullUp from "./ui/word-pull-up";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Container>
      <div ref={ref}>
        {isInView && (
          <WordPullUp className="text-2xl lg:text-3xl w-full 2xl:text-5xl" words="FAQ" />
        )}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mt-20">
        <img className="flex-1 flex border border-blue-500 h-[340px] w-full" src={""} alt={""}/>
        <Accordion type="single" collapsible className="w-full lg:w-1/2">
          <AccordionItem value="item-1" className="bg-blue-300 px-4 rounded-sm">
            <AccordionTrigger className="text-white font-bold">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="bg-blue-300 px-4 rounded-sm text-white">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="bg-blue-300 px-4 rounded-sm">
            <AccordionTrigger className="text-white font-bold">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="bg-blue-300 px-4 rounded-sm text-white">
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-blue-300 px-4 rounded-sm">
            <AccordionTrigger className="text-white font-bold">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="bg-blue-300 px-4 rounded-sm text-white">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Container>
  );
}
