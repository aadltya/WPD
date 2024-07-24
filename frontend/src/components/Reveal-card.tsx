import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export function RevealCard() {
  return (
    <div className="flex items-center justify-end h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="What is in your mind?"
        revealText="say it loud on WPL"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to say it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over me to reveal
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
