export const createIntersectionObserver = (callback) => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(callback);
    return observer;
};

/**
 * Observa los elementos que coincidan con el selector y ejecuta una animación al entrar en el viewport.
 * @param selector - Selector CSS para los elementos a animar (ej: '[data-animate]')
 * @param options - Opciones de IntersectionObserver (opcional)
 */
export function animateOnView(selector, options = { threshold: 0.3 }) {
    if (typeof window === "undefined") return;
    document.querySelectorAll(selector).forEach((el) => {
        if (el.classList.contains("in-viewport")) return;
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target).style.animationDelay = "0s";
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

// src/utils/animateCount.ts
/**
 * Anima un contador numérico desde 0 hasta el valor final cuando entra en el viewport.
 * Cumple con SOLID: función única, parametrizable, sin efectos secundarios globales.
 */
export function animateCountOnView({ selector, duration = 1000, threshold = 0.5 }) {
    if (typeof window === "undefined") return;
    document.querySelectorAll(selector).forEach((el) => {
        const end = parseInt(el.dataset.value || "0", 10);
        let started = false;
        const animateCount = () => {
            if (started) return;
            started = true;
            let current = 0;
            const startTime = performance.now();
            function update(now) {
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


window.addEventListener('DOMContentLoaded', () => {
    animateOnView('[data-animate]');
    animateOnView(".statistic-value");
    animateCountOnView({ selector: ".statistic-value", duration: 2500, threshold: 0.5 });
});
