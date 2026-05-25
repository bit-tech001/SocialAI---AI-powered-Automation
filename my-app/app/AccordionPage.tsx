import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["shipping"]} className="max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>How does the AI generate platform-specific content?</AccordionTrigger>
        <AccordionContent>
         SocialAI doesnt just copy-paste text across platforms. Our context-aware core agent analyzes your initial prompt and reformats it natively for each network. It breaks down long thoughts into optimized, high-engagement threads for X (Twitter), creates clean, bold professional updates for LinkedIn, and suggests visual framing hooks for Instagram.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Is my account security compromised by automating posts?</AccordionTrigger>
        <AccordionContent>
        Not at all. SocialAI operates using isolated, official OAuth 2.0 application protocols. Your social media passwords are never intercepted or stored
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How does the smart queue optimize my posting schedule?</AccordionTrigger>
        <AccordionContent>
      Instead of blindly dropping content or forcing you to pick an exact minute for every post, our scheduling engine uses dynamic timing telemetry.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
