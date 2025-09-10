// Debugging script para verificar animaciones GSAP
console.log('=== GSAP Debug Script ===');

// Verificar si GSAP está disponible
setTimeout(() => {
  if (typeof gsap !== 'undefined') {
    console.log('✅ GSAP disponible');
    console.log('✅ ScrollTrigger disponible:', typeof ScrollTrigger !== 'undefined');
    
    // Contar elementos con data-animate
    const animatedElements = document.querySelectorAll('[data-animate]');
    console.log(`📊 Elementos con data-animate encontrados: ${animatedElements.length}`);
    
    animatedElements.forEach((el, index) => {
      const type = el.getAttribute('data-animate');
      const computedStyle = window.getComputedStyle(el);
      console.log(`${index + 1}. ${el.tagName} [data-animate="${type}"] - opacity: ${computedStyle.opacity}`);
    });
    
    // Verificar ScrollTriggers activos
    const triggers = ScrollTrigger.getAll();
    console.log(`🎯 ScrollTriggers activos: ${triggers.length}`);
    
  } else {
    console.error('❌ GSAP no está disponible');
  }
}, 2000);
