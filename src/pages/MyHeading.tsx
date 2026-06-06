'use client';
import React from 'react';
import { WavePath } from "@/components/ui/wave-path";
import { cn } from '@/lib/utils';
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import AnimatedTextCycle from '@/components/ui/animated-text-cycle';

export default function MyHeadLine() {
	return (
		<div className="relative w-full flex min-h-[40vh] flex-col items-center justify-center">
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
					'blur-[30px]',
				)}
			/>

			<div className="flex w-[70vw] flex-col items-end">
				<div className="flex w-full flex-col items-center">
					<GooeyTextDemo></GooeyTextDemo>
                    <WavePath className="mb-10" />
				</div>
			</div>
		</div>

        
	);
}


function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center">
      <GooeyText
        texts={["This", "is", "Amar"]}
        morphTime={3}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}

export { GooeyTextDemo };


export function AnimatedTextCycleDemo() {
  return (
    <div className="p-4 max-w-full">
        <h1 className="text-4xl font-light text-center text-muted-foreground">
            I Create <AnimatedTextCycle 
                words={[
                    "modern applications",
                    "scalable solutions",
                    "seamless experiences",
                    "responsive interfaces"
                ]}
                interval={3000}
                className={"text-foreground font-semi-bold"} 
            />  !
        </h1>
    </div>
  );
}