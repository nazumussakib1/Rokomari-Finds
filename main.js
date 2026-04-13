// ===== ROKOMARI FINDS — MAIN JS =====

let currentLang = 'bn';

// Lang toggle
function toggleLang() {
  currentLang = currentLang === 'bn' ? 'en' : 'bn';
  document.getElementById('langToggle').textContent = currentLang === 'bn' ? 'EN' : 'বা';
  applyLang();
}

function applyLang() {
  const lang = currentLang;
  document.querySelectorAll('[data-bn]').forEach(el => {
    el.textContent = lang === 'bn' ? el.dataset.bn : el.dataset.en;
  });
  if (typeof renderBooks === 'function') renderBooks();
  if (typeof renderReviews === 'function') renderReviews();
  if (typeof renderShop === 'function') renderShop();
  if (typeof renderBlog === 'function') renderBlog();
}

// Navbar scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
function toggleMenu() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// Featured books (homepage)
function renderBooks() {
  const grid = document.getElementById('booksGrid');
  if (!grid) return;
  const featured = BOOKS.filter(b => b.featured);
  grid.innerHTML = featured.map(book => bookCardHTML(book)).join('');
}

function bookCardHTML(book) {
  const lang = currentLang;
  return `
    <div class="book-card" onclick="window.open('${book.rokomari_link}','_blank')">
      <div class="book-cover">
        <div class="book-cover-inner" style="background:${book.color}">
          ${lang === 'bn' ? book.title_bn : book.title_en}
        </div>
      </div>
      <div class="book-info">
        <div class="book-category">${lang === 'bn' ? book.category_bn : book.category_en}</div>
        <div class="book-title">${lang === 'bn' ? book.title_bn : book.title_en}</div>
        <div class="book-author">${lang === 'bn' ? book.author_bn : book.author_en}</div>
        <div class="book-price">
          <span class="price">${book.price}</span>
          <a href="${book.rokomari_link}" target="_blank" class="btn-small" onclick="event.stopPropagation()">
            ${lang === 'bn' ? 'কিনুন' : 'Buy Now'}
          </a>
        </div>
      </div>
    </div>
  `;
}

// Homepage reviews
function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => reviewCardHTML(r)).join('');
}

function reviewCardHTML(r) {
  const lang = currentLang;
  const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
  return `
    <div class="review-card">
      <span class="review-tag">${lang === 'bn' ? r.tag_bn : r.tag_en}</span>
      <div class="review-title">${lang === 'bn' ? r.title_bn : r.title_en}</div>
      <div class="review-book-name">${lang === 'bn' ? r.book_bn : r.book_en}</div>
      <div class="review-excerpt">${lang === 'bn' ? r.excerpt_bn : r.excerpt_en}</div>
      <div class="review-footer">
        <span class="review-stars">${stars}</span>
        <a href="blog.html" class="read-more">${lang === 'bn' ? 'পুরো রিভিউ →' : 'Full Review →'}</a>
      </div>
    </div>
  `;
}

// Newsletter
function subscribeNL() {
  const email = document.getElementById('nlEmail');
  if (!email) return;
  if (!email.value || !email.value.includes('@')) {
    showToast(currentLang === 'bn' ? 'সঠিক ইমেইল দাও!' : 'Enter a valid email!');
    return;
  }
  email.value = '';
  showToast(currentLang === 'bn' ? 'সাবস্ক্রিপশন সম্পন্ন! 🎉' : 'Subscribed successfully! 🎉');
}

// Toast notification
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  renderReviews();
  applyLang();

  // Animate cards on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  setTimeout(() => {
    document.querySelectorAll('.book-card, .review-card, .blog-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }, 100);
});
