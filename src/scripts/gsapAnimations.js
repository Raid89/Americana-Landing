import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Sistema de animaciones profesional con GSAP ScrollTrigger
 * Optimizado para rendimiento y experiencia de usuario premium
 */
class AdvancedScrollAnimations {
  constructor() {
    this.initConfig();
    this.setupScrollTriggerDefaults();
    this.init();
  }

  initConfig() {
    this.config = {
      // Configuraciones de easing premium
      easing: {
        smooth: "power2.out",
        elastic: "back.out(1.7)",
        bounce: "bounce.out",
        sharp: "power4.out",
        organic: "power3.inOut"
      },
      
      // Duraciones optimizadas
      timing: {
        fast: 0.6,
        medium: 0.8,
        slow: 1.2,
        hero: 1.5
      },
      
      // Offsets de trigger optimizados
      triggers: {
        early: "top 90%",
        normal: "top 80%",
        late: "top 70%",
        center: "center center"
      }
    };
  }

  setupScrollTriggerDefaults() {
    ScrollTrigger.defaults({
      scroller: window,
      start: this.config.triggers.normal,
      end: "bottom top",
      toggleActions: "play none none reverse"
    });
  }

  // Animación de hero sections con parallax sutil
  animateHeroSection(selector) {
    const heroElements = gsap.utils.toArray(selector);
    
    heroElements.forEach((hero) => {
      const textContainer = hero.querySelector('[data-hero="text"]');
      const mediaContainer = hero.querySelector('[data-hero="media"]');

      // Animación de entrada del texto con stagger elegante
      if (textContainer) {
        const textElements = textContainer.querySelectorAll('h1, h2, p, .language-badge, .music-highlight, .language-features, .cta');
        
        gsap.set(textElements, { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        });

        gsap.to(textElements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: 0.15,
          scrollTrigger: {
            trigger: textContainer,
            start: this.config.triggers.early,
            toggleActions: "play none none reverse"
          }
        });
      }

      // Animación del media container con efecto de revelado
      if (mediaContainer) {
        gsap.set(mediaContainer, { 
          opacity: 0, 
          x: 80,
          scale: 0.9
        });

        gsap.to(mediaContainer, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          scrollTrigger: {
            trigger: mediaContainer,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }
    });
  }

  // Animación de grids con reveal progresivo
  animateGridSections(selector) {
    const grids = gsap.utils.toArray(selector);
    
    grids.forEach((grid) => {
      const header = grid.querySelector('[data-grid="header"]');
      const items = grid.querySelectorAll('[data-grid="item"]');
      const cta = grid.querySelector('[data-grid="cta"]');

      // Animación del header
      if (header) {
        const headerTitle = header.querySelector('h2, h3');
        const headerDesc = header.querySelector('p');

        if (headerTitle || headerDesc) {
          gsap.set([headerTitle, headerDesc].filter(Boolean), { 
            opacity: 0, 
            y: 40 
          });

          const headerTl = gsap.timeline({
            scrollTrigger: {
              trigger: header,
              start: this.config.triggers.normal,
              toggleActions: "play none none reverse"
            }
          });

          if (headerTitle) {
            headerTl.to(headerTitle, {
              opacity: 1,
              y: 0,
              duration: this.config.timing.medium,
              ease: this.config.easing.smooth
            });
          }

          if (headerDesc) {
            headerTl.to(headerDesc, {
              opacity: 1,
              y: 0,
              duration: this.config.timing.medium,
              ease: this.config.easing.smooth
            }, "-=0.3");
          }
        }
      }

      // Animación de items con wave effect
      if (items.length > 0) {
        gsap.set(items, { 
          opacity: 0, 
          y: 80,
          scale: 0.9
        });

        gsap.to(items, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: {
            amount: 0.6,
            from: "start"
          },
          scrollTrigger: {
            trigger: items[0],
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }

      // Animación del CTA
      if (cta) {
        gsap.set(cta, { 
          opacity: 0, 
          y: 40
        });

        gsap.to(cta, {
          opacity: 1,
          y: 0,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          scrollTrigger: {
            trigger: cta,
            start: this.config.triggers.late,
            toggleActions: "play none none reverse"
          }
        });
      }
    });
  }

  // Animación de estadísticas con contador animado
  animateStatistics(selector) {
    const statSections = gsap.utils.toArray(selector);
    
    statSections.forEach((section) => {
      const statCards = section.querySelectorAll('[data-stats="card"]');
      
      if (statCards.length > 0) {
        gsap.set(statCards, { 
          opacity: 0, 
          y: 80,
          scale: 0.9
        });

        // Animación de entrada de las cards
        gsap.to(statCards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });

        // Animar números con contador
        statCards.forEach((card) => {
          const numberElement = card.querySelector('[data-stats="number"]');
          if (numberElement) {
            const targetValue = parseInt(numberElement.getAttribute('data-value'));
            if (targetValue && !isNaN(targetValue)) {
              const obj = { number: 0 };

              gsap.to(obj, {
                number: targetValue,
                duration: 2.5,
                ease: this.config.easing.smooth,
                onUpdate: () => {
                  const formattedNumber = Math.floor(obj.number).toLocaleString();
                  numberElement.textContent = `+ ${formattedNumber}`;
                },
                scrollTrigger: {
                  trigger: card,
                  start: this.config.triggers.normal,
                  toggleActions: "play none none reverse"
                }
              });
            }
          }

          // Animar título y texto de la estadística
          const title = card.querySelector('[data-stats="title"]');
          const text = card.querySelector('[data-stats="text"]');
          
          if (title || text) {
            gsap.set([title, text].filter(Boolean), { 
              opacity: 0, 
              y: 20 
            });

            gsap.to([title, text].filter(Boolean), {
              opacity: 1,
              y: 0,
              duration: this.config.timing.fast,
              ease: this.config.easing.smooth,
              stagger: 0.1,
              delay: 0.3,
              scrollTrigger: {
                trigger: card,
                start: this.config.triggers.normal,
                toggleActions: "play none none reverse"
              }
            });
          }
        });
      }
    });
  }

  // Animación de beneficios y formularios de contacto
  animateBenefits(selector) {
    const benefitSections = gsap.utils.toArray(selector);
    
    benefitSections.forEach((section) => {
      const formContainer = section.querySelector('[data-benefit="form"]');
      const listContainer = section.querySelector('[data-benefit="list"]');
      
      // Animar formulario
      if (formContainer) {
        const title = formContainer.querySelector('[data-benefit="title"]');
        const subtitle = formContainer.querySelector('[data-benefit="subtitle"]');
        const content = formContainer.querySelector('[data-benefit="content"]');
        
        const formElements = [title, subtitle, content].filter(Boolean);
        
        gsap.set(formElements, { 
          opacity: 0,
          x: -80,
          scale: 0.95
        });

        gsap.to(formElements, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: 0.15,
          scrollTrigger: {
            trigger: formContainer,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }

      // Animar lista de beneficios
      if (listContainer) {
        const listTitle = listContainer.querySelector('[data-benefit="list-title"]');
        const items = listContainer.querySelectorAll('[data-benefit="item"]');
        
        // Animar título de la lista
        if (listTitle) {
          gsap.set(listTitle, { 
            opacity: 0,
            x: 80,
            scale: 0.95
          });

          gsap.to(listTitle, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: this.config.timing.medium,
            ease: this.config.easing.smooth,
            scrollTrigger: {
              trigger: listTitle,
              start: this.config.triggers.normal,
              toggleActions: "play none none reverse"
            }
          });
        }

        // Animar items de beneficios
        if (items.length > 0) {
          gsap.set(items, { 
            opacity: 0,
            x: 60,
            scale: 0.9
          });

          gsap.to(items, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: this.config.timing.fast,
            ease: this.config.easing.smooth,
            stagger: 0.1,
            scrollTrigger: {
              trigger: items[0],
              start: this.config.triggers.normal,
              toggleActions: "play none none reverse"
            }
          });
        }
      }
    });
  }

  // Animación de showcase con efectos dinámicos (para Information section)
  animateShowcase(selector) {
    const showcases = gsap.utils.toArray(selector);
    
    showcases.forEach((showcase) => {
      const mediaContainer = showcase.querySelector('[data-showcase="media"]');
      const contentContainer = showcase.querySelector('[data-showcase="content"]');
      
      if (mediaContainer) {
        gsap.set(mediaContainer, { 
          opacity: 0,
          x: -100,
          scale: 0.9
        });

        gsap.to(mediaContainer, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          scrollTrigger: {
            trigger: mediaContainer,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }

      if (contentContainer) {
        const title = contentContainer.querySelector('[data-showcase="title"]');
        const subtitle = contentContainer.querySelector('[data-showcase="subtitle"]');
        const text = contentContainer.querySelector('[data-showcase="text"]');
        const cta = contentContainer.querySelector('[data-showcase="cta"]');

        const elements = [title, subtitle, text, cta].filter(Boolean);
        
        gsap.set(elements, { 
          opacity: 0,
          x: 100,
          scale: 0.95
        });

        gsap.to(elements, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: 0.15,
          scrollTrigger: {
            trigger: contentContainer,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }
    });
  }

  // Inicializar todas las animaciones
  init() {
    // Verificar preferencias de movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.initReducedMotion();
      return;
    }

    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initAnimations());
    } else {
      this.initAnimations();
    }
  }

  initAnimations() {
    console.log('Inicializando animaciones GSAP...');
    
    // Agregar clase para indicar que GSAP está activo
    document.body.classList.add('gsap-loading');
    
    // Heroes
    this.animateHeroSection('[data-animate="hero"]');
    
    // Grids (instrumentos, niveles, etc.)
    this.animateGridSections('[data-animate="grid"]');
    
    // Estadísticas
    this.animateStatistics('[data-animate="stats"]');
    
    // Beneficios
    this.animateBenefits('[data-animate="benefits"]');
    
    // Showcases (profesores, instrumentos detallados)
    this.animateShowcase('[data-animate="showcase"]');

    // Refresh ScrollTrigger después de cargar todas las animaciones
    setTimeout(() => {
      ScrollTrigger.refresh();
      document.body.classList.remove('gsap-loading');
      console.log('ScrollTrigger refreshed');
    }, 100);
  }

  initReducedMotion() {
    // Para usuarios que prefieren movimiento reducido
    gsap.set('[data-animate]', { opacity: 1 });
    document.body.classList.add('reduced-motion');
  }

  // Método para limpiar animaciones (útil para navegación SPA)
  destroy() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf('*');
  }

  // Método para refrescar animaciones
  refresh() {
    ScrollTrigger.refresh();
  }
}

// Inicializar el sistema de animaciones
const scrollAnimations = new AdvancedScrollAnimations();

// Exportar para uso global
window.scrollAnimations = scrollAnimations;

export default scrollAnimations;
