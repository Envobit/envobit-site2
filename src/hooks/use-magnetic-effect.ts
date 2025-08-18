"use client";

import { useRef, useEffect, type RefObject } from "react";
import { gsap } from "gsap";

type UseMagneticEffectOptions = {
  magneticAreaRef?: RefObject<HTMLElement>;
  disabled?: boolean;
};

export const useMagneticEffect = <T extends HTMLElement>({
  magneticAreaRef,
  disabled = false,
}: UseMagneticEffectOptions = {}) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled) return;

    const area = magneticAreaRef?.current ?? element.parentElement;
    if (!area) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(element, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 1,
        ease: "power3.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });
    };

    area.addEventListener("mousemove", onMouseMove);
    area.addEventListener("mouseleave", onMouseLeave);

    return () => {
      area.removeEventListener("mousemove", onMouseMove);
      area.removeEventListener("mouseleave", onMouseLeave);
      // Reset position when effect is disabled or component unmounts
      gsap.to(element, { x: 0, y: 0, duration: 0.2 });
    };
  }, [magneticAreaRef, disabled]);

  return elementRef;
};
