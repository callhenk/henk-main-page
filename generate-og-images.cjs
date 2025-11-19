const fs = require('fs');
const { createCanvas } = require('canvas');

// Register fonts if needed (using system fonts)
function createHomepageImage() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // White background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  // Subtle gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f8fafc');
  gradient.addColorStop(0.5, '#ffffff');
  gradient.addColorStop(1, '#f1f5f9');
  ctx.globalAlpha = 0.4;
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1.0;

  // Add subtle noise texture
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 10 - 5;
    data[i] += noise;
    data[i + 1] += noise;
    data[i + 2] += noise;
  }
  ctx.putImageData(imageData, 0, 0);

  // Henk logo/wordmark
  ctx.fillStyle = '#1a202c';
  ctx.font = 'bold 140px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Henk', width / 2, 280);

  // Tagline
  ctx.fillStyle = '#64748b';
  ctx.font = '32px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('AI-Powered Voice Fundraising Platform', width / 2, 380);

  // Accent line
  ctx.strokeStyle = '#3b82f6';
  ctx.globalAlpha = 0.3;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(400, 420);
  ctx.lineTo(800, 420);
  ctx.stroke();
  ctx.globalAlpha = 1.0;

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/og-image.png', buffer);
  console.log('✅ Created og-image.png');
}

function createGrantsImage() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // White background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  // Subtle gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f8fafc');
  gradient.addColorStop(0.5, '#ffffff');
  gradient.addColorStop(1, '#f1f5f9');
  ctx.globalAlpha = 0.4;
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1.0;

  // Add subtle noise texture
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 10 - 5;
    data[i] += noise;
    data[i + 1] += noise;
    data[i + 2] += noise;
  }
  ctx.putImageData(imageData, 0, 0);

  // Henk logo - smaller
  ctx.fillStyle = '#1a202c';
  ctx.font = 'bold 72px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Henk', width / 2, 180);

  // Main title
  ctx.font = 'bold 64px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('Voice AI Grant', width / 2, 300);

  ctx.fillStyle = '#3b82f6';
  ctx.fillText('for Charities', width / 2, 370);

  // Subtitle
  ctx.fillStyle = '#64748b';
  ctx.font = '500 28px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('£10K Worth of Free AI Voice Credits', width / 2, 460);

  // Badge
  ctx.strokeStyle = '#cbd5e1';
  ctx.fillStyle = '#f1f5f9';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(460, 500, 280, 60, 30);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.font = '600 22px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('35,000 Minutes Included', width / 2, 530);

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/grants-hero.png', buffer);
  console.log('✅ Created grants-hero.png');
}

try {
  createHomepageImage();
  createGrantsImage();
  console.log('\n✨ All OG images generated successfully!');
} catch (error) {
  console.error('Error generating images:', error);
  process.exit(1);
}
