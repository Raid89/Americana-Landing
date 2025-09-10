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
      const statBlocks = section.querySelectorAll('[data-stat="block"]');
      
      if (statBlocks.length > 0) {
        gsap.set(statBlocks, { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        });

        gsap.to(statBlocks, {
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

        // Animar números
        statBlocks.forEach((block) => {
          const numberElement = block.querySelector('[data-stat="number"]');
          if (numberElement) {
            const finalNumber = parseInt(numberElement.textContent.replace(/\D/g, ''));
            if (finalNumber && !isNaN(finalNumber)) {
              const obj = { number: 0 };

              gsap.to(obj, {
                number: finalNumber,
                duration: 2,
                ease: this.config.easing.smooth,
                onUpdate: () => {
                  numberElement.textContent = `+ ${Math.floor(obj.number).toLocaleString()}`;
                },
                scrollTrigger: {
                  trigger: block,
                  start: this.config.triggers.normal,
                  toggleActions: "play none none reverse"
                }
              });
            }
          }
        });
      }
    });
  }

  // Animación de beneficios
  animateBenefits(selector) {
    const benefitSections = gsap.utils.toArray(selector);
    
    benefitSections.forEach((section) => {
      const header = section.querySelector('[data-grid="header"]');
      const cards = section.querySelectorAll('[data-benefit="card"]');
      
      // Animar header
      if (header) {
        const headerElements = header.querySelectorAll('h2, p, .global-stat');
        gsap.set(headerElements, { opacity: 0, y: 40 });
        
        gsap.to(headerElements, {
          opacity: 1,
          y: 0,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: 0.1,
          scrollTrigger: {
            trigger: header,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }

      // Animar cards
      if (cards.length > 0) {
        gsap.set(cards, { 
          opacity: 0,
          y: 80,
          scale: 0.9
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cards[0],
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }
    });
  }

  // Animación de showcase con 3D effect
  animateShowcase(selector) {
    const showcases = gsap.utils.toArray(selector);
    
    showcases.forEach((showcase) => {
      const header = showcase.querySelector('[data-grid="header"]');
      const items = showcase.querySelectorAll('[data-showcase="item"]');
      
      // Animar header
      if (header) {
        const headerElements = header.querySelectorAll('h2, p');
        gsap.set(headerElements, { opacity: 0, y: 40 });
        
        gsap.to(headerElements, {
          opacity: 1,
          y: 0,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          stagger: 0.1,
          scrollTrigger: {
            trigger: header,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      }
      
      // Animar items
      items.forEach((item, index) => {
        const isEven = index % 2 === 0;
        
        gsap.set(item, { 
          opacity: 0,
          x: isEven ? -100 : 100,
          scale: 0.9
        });

        gsap.to(item, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: this.config.timing.medium,
          ease: this.config.easing.smooth,
          scrollTrigger: {
            trigger: item,
            start: this.config.triggers.normal,
            toggleActions: "play none none reverse"
          }
        });
      });
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
