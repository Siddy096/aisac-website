import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// register the actual plugins we use
gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // ms
  duration?: number; // s
  ease?: string;
  splitType?: string;
  from?: { opacity?: number; y?: number };
  to?: { opacity?: number; y?: number };
  threshold?: number;
  rootMargin?: string;
  tag?: keyof JSX.IntrinsicElements;
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const animationCompletedRef = useRef<boolean>(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if ((document as any).fonts?.status === "loaded") {
      setFontsLoaded(true);
    } else {
      (document as any).fonts?.ready?.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      // allow access to plugin-specific private properties
      const el: any = ref.current;

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {
          // ignore
        }
        el._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets: any;
      const assignTargets = (self: any) => {
        if (splitType.includes("chars") && self.chars?.length) targets = self.chars;
        if (!targets && splitType.includes("words") && self.words?.length) targets = self.words;
        if (!targets && splitType.includes("lines") && self.lines?.length) targets = self.lines;
        if (!targets) targets = self.chars || self.words || self.lines;
      };

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === "lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
        onSplit: (self: any) => {
          assignTargets(self);
          const tween = gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              },
              force3D: true,
            }
          );
          return tween;
        },
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = null;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete,
      ],
      scope: ref,
    }
  );

  const classes = `split-parent ${className}`.trim();

  const Tag = tag as any;

  return <Tag ref={ref as any} className={classes}>{text}</Tag>;
};

export default SplitText;
