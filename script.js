// Show surprise function with enhanced effects
function showSurprise() {
  const surpriseSection = document.getElementById('surprise');
  
  // Show the surprise section
  surpriseSection.classList.remove('hidden');
  
  // Trigger confetti explosion
  createConfetti();
  
  // Scroll to surprise smoothly
  surpriseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Create enhanced confetti effect
function createConfetti() {
  const confettiContainer = document.getElementById('confetti');
  const colors = ['#ff6b9d', '#c06c84', '#f67280', '#355c7d', '#6c5b7b', '#f8b500', '#00d4ff', '#7f00ff'];
  
  // Create 200 confetti pieces
  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // Random position
      confetti.style.left = Math.random() * 100 + '%';
      
      // Random color
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Random shape
      if (Math.random() > 0.5) {
        confetti.style.borderRadius = '50%';
      }
      
      // Random size
      const size = Math.random() * 12 + 5;
      confetti.style.width = size + 'px';
      confetti.style.height = size + 'px';
      
      // Random animation duration
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      
      // Random delay
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      
      confettiContainer.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }, i * 8);
  }
}

// Handle "Yes" response
function handleYes() {
  // Create massive heart explosion
  createMassiveHeartExplosion();
  
  // Show success message
  showResponseMessage("HeHe 💖 🎉", true);
  
  // Trigger extra confetti
  setTimeout(() => {
    createConfetti();
  }, 500);
  
  // Hide buttons after success
  setTimeout(() => {
    const buttons = document.querySelector('.response-buttons');
    if (buttons) {
      buttons.style.opacity = '0';
      buttons.style.transition = 'opacity 0.5s ease';
    }
  }, 2000);
}

// Track how many times Maybe was clicked
let maybeClickCount = 0;
const maybeMessages = [
  "Are you sure? 🥺",
  "Please reconsider! 💭",
  "Just say yes! 💕",
  "You know you want to! 😊",
  "Come on... 🙏",
  "Pretty please? 💖",
  "Last chance! 😢"
];

// Handle "Maybe" button - it shrinks and Yes grows
function handleMaybe() {
  maybeClickCount++;
  
  const yesBtn = document.getElementById('yesBtn');
  const maybeBtn = document.getElementById('maybeBtn');
  
  // Calculate new scales
  const maybeScale = Math.max(0.3, 1 - (maybeClickCount * 0.15));
  const yesScale = 1 + (maybeClickCount * 0.15);
  
  // Apply transformations
  maybeBtn.style.transform = `scale(${maybeScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;
  
  // Show encouraging message
  if (maybeClickCount <= maybeMessages.length) {
    showResponseMessage(maybeMessages[maybeClickCount - 1] || "Just say yes! 💕", false);
  }
  
  // After 7 clicks, Maybe button becomes too small and disappears
  if (maybeClickCount >= 7) {
    maybeBtn.style.opacity = '0';
    maybeBtn.style.pointerEvents = 'none';
    
    setTimeout(() => {
      showResponseMessage("Just say YES! nigga ✨", true);
    }, 500);
    
    // Make yes button pulse
    yesBtn.style.animation = 'pulse 0.5s ease-in-out infinite';
  }
  
  // Make Maybe button shake when clicked
  maybeBtn.style.animation = 'shake 0.5s ease';
  setTimeout(() => {
    maybeBtn.style.animation = '';
  }, 500);
}

// Create massive heart explosion
function createMassiveHeartExplosion() {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞'];
  
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.position = 'fixed';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.fontSize = (Math.random() * 3 + 2) + 'rem';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '9999';
      
      const angle = (Math.PI * 2 * i) / 30;
      
      document.body.appendChild(heart);
      
      let posX = window.innerWidth / 2;
      let posY = window.innerHeight / 2;
      let opacity = 1;
      let scale = 1;
      let velocityX = Math.cos(angle) * 5;
      let velocityY = Math.sin(angle) * 5;
      
      const animate = () => {
        posX += velocityX;
        posY += velocityY;
        velocityY += 0.2; // Gravity
        opacity -= 0.015;
        scale += 0.03;
        
        heart.style.left = posX + 'px';
        heart.style.top = posY + 'px';
        heart.style.opacity = opacity;
        heart.style.transform = `scale(${scale})`;
        
        if (opacity > 0 && posY < window.innerHeight + 100) {
          requestAnimationFrame(animate);
        } else {
          heart.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }, i * 50);
  }
}

// Show response message
function showResponseMessage(message, isPositive) {
  const messageEl = document.createElement('div');
  messageEl.textContent = message;
  messageEl.style.position = 'fixed';
  messageEl.style.top = '50%';
  messageEl.style.left = '50%';
  messageEl.style.transform = 'translate(-50%, -50%)';
  messageEl.style.fontSize = '1.5rem';
  messageEl.style.color = 'white';
  messageEl.style.background = isPositive 
    ? 'linear-gradient(135deg, #ff6b9d, #ff1493)' 
    : 'linear-gradient(135deg, #667eea, #764ba2)';
  messageEl.style.padding = '25px 40px';
  messageEl.style.borderRadius = '20px';
  messageEl.style.textShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
  messageEl.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4)';
  messageEl.style.zIndex = '10000';
  messageEl.style.pointerEvents = 'none';
  messageEl.style.animation = 'zoomInOut 3s ease-out forwards';
  messageEl.style.textAlign = 'center';
  messageEl.style.maxWidth = '85%';
  
  document.body.appendChild(messageEl);
  
  setTimeout(() => {
    messageEl.remove();
  }, 3000);
}

// Add click effect to photos
document.addEventListener('DOMContentLoaded', function() {
  const photoFrames = document.querySelectorAll('.photo-frame');
  
  photoFrames.forEach(frame => {
    frame.addEventListener('click', function() {
      createHeartExplosion(this);
    });
  });
  
  // Initialize countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

// Create heart explosion effect on photo click
function createHeartExplosion(element) {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.position = 'fixed';
    heart.style.left = rect.left + rect.width / 2 + 'px';
    heart.style.top = rect.top + rect.height / 2 + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    
    const angle = (Math.PI * 2 * i) / 15;
    
    document.body.appendChild(heart);
    
    let posX = rect.left + rect.width / 2;
    let posY = rect.top + rect.height / 2;
    let opacity = 1;
    let scale = 1;
    
    const animate = () => {
      posX += Math.cos(angle) * 4;
      posY += Math.sin(angle) * 4 - 2;
      opacity -= 0.02;
      scale += 0.03;
      
      heart.style.left = posX + 'px';
      heart.style.top = posY + 'px';
      heart.style.opacity = opacity;
      heart.style.transform = `scale(${scale})`;
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        heart.remove();
      }
    };
    
    requestAnimationFrame(animate);
  }
}

// Add floating particles effect
function createFloatingParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '5';
  document.body.appendChild(particlesContainer);
  
  const symbols = ['✨', '⭐', '🌟', '💫', '🎀', '🎈'];
  
  setInterval(() => {
    if (Math.random() > 0.5) {
      const particle = document.createElement('div');
      particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      particle.style.position = 'absolute';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '-50px';
      particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
      particle.style.opacity = Math.random() * 0.6 + 0.3;
      particle.style.animation = `floatParticle ${Math.random() * 5 + 5}s linear forwards`;
      
      particlesContainer.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 10000);
    }
  }, 2500);
}

// Initialize floating particles
createFloatingParticles();

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateY(-40px) scale(0.3);
    }
  }
  
  @keyframes zoomInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    20% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }
    80% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0) scale(var(--current-scale, 1)); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px) scale(var(--current-scale, 1)); }
    20%, 40%, 60%, 80% { transform: translateX(5px) scale(var(--current-scale, 1)); }
  }
  
  @keyframes floatParticle {
    to {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Countdown timer to next birthday
function updateCountdown() {
  // Set next birthday - February 16
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // February 16 - Issai's birthday
  let nextBirthday = new Date(currentYear, 1, 16); // Month is 0-indexed (1 = February)
  
  // If birthday has passed this year, set to next year
  if (now > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, 1, 16);
  }
  
  const diff = nextBirthday - now;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  // Update display
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  
  if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
  if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
  if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
  if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.sparkle');
  
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});