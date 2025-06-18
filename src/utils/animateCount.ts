// src/utils/animateCount.ts
/**
 * Anima un contador numérico desde 0 hasta el valor final cuando entra en el viewport.
 * Cumple con SOLID: función única, parametrizable, sin efectos secundarios globales.
 */
export interface AnimateCountOptions {
  selector: string;
  duration?: number;
  threshold?: number;
}

export function animateCountOnView({ selector, duration = 1000, threshold = 0.5 }: AnimateCountOptions): void {
  if (typeof window === "undefined") return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const end = parseInt(el.dataset.value || "0", 10);
    let started = false;
    const animateCount = () => {
      if (started) return;
      started = true;
      let current = 0;
      const startTime = performance.now();
      function update(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        current = Math.floor(progress * end);
        el.textContent = '+ ' + current.toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = '+ ' + end.toLocaleString();
        }
      }
      requestAnimationFrame(update);
    };
    const observer = new window.IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold });
    observer.observe(el);
  });
}
