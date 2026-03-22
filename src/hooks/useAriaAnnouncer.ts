import { useCallback, useEffect, useRef } from 'react';

export function useAriaAnnouncer() {
  const regionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (regionRef.current) return;

    const el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    el.className = 'sr-only';
    document.body.appendChild(el);
    regionRef.current = el;

    return () => {
      el.remove();
      regionRef.current = null;
    };
  }, []);

  const announce = useCallback((message: string) => {
    if (!regionRef.current) return;
    regionRef.current.textContent = '';
    requestAnimationFrame(() => {
      if (regionRef.current) {
        regionRef.current.textContent = message;
      }
    });
  }, []);

  return announce;
}
