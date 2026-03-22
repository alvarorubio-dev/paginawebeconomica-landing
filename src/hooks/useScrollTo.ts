import { useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useScrollTo() {
  const prefersReducedMotion = useReducedMotion();

  const scrollTo = useCallback(
    (targetId: string) => {
      const el = document.getElementById(targetId);
      if (!el) return;

      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      el.focus({ preventScroll: true });
    },
    [prefersReducedMotion]
  );

  return scrollTo;
}
