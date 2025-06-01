// Animaciones para la sección Hero de SONAR
document.addEventListener('DOMContentLoaded', function() {
  
  // Elementos a animar
  const heroHeading = document.querySelector('[data-w-id="hero-heading"]');
  const heroParagraph = document.querySelector('[data-w-id="hero-paragraph"]');
  const heroButtons = document.querySelector('[data-w-id="hero-buttons"]');
  const heroImage = document.querySelector('[data-w-id="hero-image"]');
  
  // Función para animar entrada con fade in y slide up
  function animateElement(element, delay) {
    if (!element) return;
    
    setTimeout(() => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100);
    }, delay);
  }
  
  // Animar elementos en secuencia
  animateElement(heroHeading, 300);
  animateElement(heroParagraph, 600);
  animateElement(heroButtons, 900);
  animateElement(heroImage, 1200);
  
  // Efecto de hover para los botones
  const primaryButtons = document.querySelectorAll('.primary-button');
  const outlineButtons = document.querySelectorAll('.outline-button');
  
  primaryButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 10px 20px rgba(255, 107, 107, 0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'none';
    });
  });
  
  outlineButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.backgroundColor = 'transparent';
    });
  });
  
  // Efecto de texto con gradiente animado
  const gradientTexts = document.querySelectorAll('.sonar-gradient-text');
  
  gradientTexts.forEach(text => {
    text.style.backgroundSize = '200% auto';
    
    // El resto de la animación se maneja con CSS
  });
  
}); 