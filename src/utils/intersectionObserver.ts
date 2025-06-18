export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
  if (typeof window === "undefined") return;

  const observer = new IntersectionObserver(callback);
  return observer;
};

/**
 * Observa los elementos que coincidan con el selector y ejecuta una animación al entrar en el viewport.
 * @param selector - Selector CSS para los elementos a animar (ej: '[data-animate]')
 * @param options - Opciones de IntersectionObserver (opcional)
 */
export function animateOnView(selector: string, options: IntersectionObserverInit = { threshold: 0.01 }) {
  if (typeof window === "undefined") return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    if (el.classList.contains("in-viewport")) return;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animationDelay = "0s";
            entry.target.classList.add("in-viewport");
            observer.unobserve(entry.target);
          }
        });
      },
      options
    );
    observer.observe(el);
  });
}
