const bubbleContainer = document.getElementById('bubble-container');

document.addEventListener('mousemove', (e) => {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  
  // Set the bubble's position
  bubble.style.left = `${e.clientX + Math.random() * 10 - 5}px`; // Slightly randomize position
  bubble.style.top = `${e.clientY + Math.random() * 10 - 5}px`;

  // Randomize size, colors, and animation duration
  const size = Math.random() * 6 + 6; // Bubble size between 6px and 12px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  const duration = Math.random() * 3 + 2; // Duration between 3s and 5s
  bubble.style.animationDuration = `${duration}s`;

  // Randomize bubble color
  const colors = [
    'rgba(255, 0, 100, 0.6)',   // Pink
    'rgba(0, 150, 255, 0.6)',   // Light Blue
    'rgba(255, 255, 0, 0.6)',   // Yellow
  ];
  const shadowColors = [
    'rgba(255, 0, 100, 0.5)', 
    'rgba(0, 150, 255, 0.5)', 
    'rgba(255, 255, 0, 0.5)',
  ];
  const colorIndex = Math.floor(Math.random() * colors.length);

  bubble.style.background = `radial-gradient(circle, ${colors[colorIndex]}, rgba(255, 255, 255, 0.2))`;
  bubble.style.boxShadow = `0 0 10px ${shadowColors[colorIndex]}, 0 0 20px ${shadowColors[colorIndex]}`;

  // Add the bubble to the container
  bubbleContainer.appendChild(bubble);

  // Remove the bubble after the animation ends
  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
});
