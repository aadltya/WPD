import { ThreeDCard } from "../3d-card";
import { RevealCard } from "../Reveal-card";

export function DotBackground() {
  return (
    <div className="h-[50rem] w-full dark:bg-neutral-950 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
      <div className="h-screen w-11/12 grid grid-cols-2 gap-6 " >
            <div className="" >
                <ThreeDCard />
            </div>
                    
            <div className="" >
                <RevealCard />
            </div>
        </div>
    </div>
  );
}
