// main.js - Main script using ES2025+ features
import { companyData } from './data.js';

// Function to simulate async data fetching
async function fetchServices() {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(companyData.services);
    }, 500);
  });
}

// Function to render services
function renderServices(services) {
  const servicesSection = document.querySelector('.posts');
  servicesSection.innerHTML = '<h3>Our Services</h3>';

  // Render rentals using optional chaining and nullish coalescing
  const rentals = services?.rentals ?? [];
  rentals.forEach(rental => {
    const article = document.createElement('article');
    article.className = 'post';
    article.innerHTML = `
      <img src="${rental?.image ?? 'imgs/default.jpg'}" alt="${rental?.name ?? 'Service'}" class="post-image" />
      <div class="post-content">
        <h3 class="post-title">${rental?.name ?? 'Unnamed Service'}</h3>
        <p class="post-meta">${rental?.price ?? 'Price TBD'}</p>
        <p>${rental?.description ?? 'Description not available.'}</p>
      </div>
    `;
    servicesSection.appendChild(article);
  });

  // Render photobooth using optional chaining
  const photobooth = services?.photobooth;
  if (photobooth) {
    const article = document.createElement('article');
    article.className = 'post';
    article.innerHTML = `
      <img src="${photobooth?.image ?? 'imgs/default.jpg'}" alt="${photobooth?.name ?? 'Photobooth'}" class="post-image" />
      <div class="post-content">
        <h3 class="post-title">${photobooth?.name ?? 'Photobooth Service'}</h3>
        <p class="post-meta">${photobooth?.price ?? 'Price TBD'}</p>
        <p>${photobooth?.description ?? 'No description.'}</p>
        <ul>
          ${photobooth?.features?.map(feature => `<li>${feature}</li>`).join('') ?? '<li>Features not listed</li>'}
        </ul>
      </div>
    `;
    servicesSection.appendChild(article);
  }
}

// Main function
async function init() {
  try {
    console.log('Loading services...');
    const services = await fetchServices();
    console.log('Services loaded:', services);
    renderServices(services);
  } catch (error) {
    console.error('Error loading services:', error);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);