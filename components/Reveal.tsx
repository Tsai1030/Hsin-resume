"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";

interface RevealProps {
  children: ReactNode;
  /** stagger delay: 1, 2 or 3 → .08s / .16s / .24s */
  delay?: 1 | 2 | 3;
  /** render as a different element (default div) */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({ children, delay, as, className = "", style }: RevealProps) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const delayClass = delay ? ` d${delay}` : "";
  const stateClass = shown ? " in" : "";

  return (
    <Tag
      ref={ref as never}
      className={`reveal${delayClass}${stateClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
