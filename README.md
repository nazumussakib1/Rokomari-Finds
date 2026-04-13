# 📚 Rokomari Finds — BookShop Website

A bilingual (বাংলা + English) book shop & review website for **Rokomari Finds**.

## 🗂️ File Structure

```
rokomari-finds/
├── index.html       ← Homepage (Hero, Featured Books, Reviews)
├── shop.html        ← Book Catalog with search & filter
├── blog.html        ← Book Reviews page
├── about.html       ← About Us page
├── contact.html     ← Contact form
├── style.css        ← All styles (single file)
├── main.js          ← Shared JS (language toggle, render functions)
├── data.js          ← ✏️ EDIT THIS FILE to add/update books & reviews
└── README.md        ← This file
```

## 🚀 GitHub Pages Setup (Free Hosting)

1. Create a new GitHub repository (e.g., `rokomari-finds`)
2. Upload all files to the repository
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch → **/ (root)** → Save
6. Your site will be live at: `https://YOUR-USERNAME.github.io/rokomari-finds/`

## ✏️ How to Add/Edit Books

Open `data.js` and edit the `BOOKS` array:

```js
{
  id: 7,                                    // unique number
  title_bn: "বইয়ের বাংলা নাম",
  title_en: "Book English Title",
  author_bn: "লেখকের নাম",
  author_en: "Author Name",
  category_bn: "ইসলামি ইতিহাস",
  category_en: "Islamic History",
  price: "৳ ৩৫০",
  color: "#1a3a5c",                         // cover background color
  featured: true,                           // show on homepage?
  rokomari_link: "https://www.rokomari.com/book/YOUR-BOOK-ID",
  description_bn: "বাংলায় সংক্ষিপ্ত বিবরণ",
  description_en: "Short description in English"
}
```

## ✏️ How to Add Reviews

Edit the `REVIEWS` array in `data.js`:

```js
{
  id: 4,
  title_bn: "রিভিউর শিরোনাম বাংলায়",
  title_en: "Review Title in English",
  book_bn: "বইয়ের নাম",
  book_en: "Book Name",
  excerpt_bn: "রিভিউর সংক্ষিপ্ত অংশ বাংলায়...",
  excerpt_en: "Short excerpt of review in English...",
  stars: 5,                                 // 1–5
  date: "ডিসেম্বর ২০২৪",
  tag_bn: "বই রিভিউ",
  tag_en: "Book Review"
}
```

## 🌐 Features

- ✅ Bilingual: বাংলা ↔ English toggle
- ✅ Responsive (mobile-friendly)
- ✅ Book catalog with search & category filter
- ✅ Book reviews/blog page
- ✅ Newsletter signup form
- ✅ Contact form
- ✅ Scroll animations
- ✅ GitHub Pages compatible (no backend needed)

## 🎨 Customization

- **Colors**: Edit CSS variables in `style.css` (`:root` block)
- **Social links**: Update footer links in each HTML file
- **Contact info**: Edit `contact.html` directly
- **Logo**: Change `.logo-bn` and `.logo-en` in `style.css`

## 📱 Social Media Links

Update these in `index.html` footer:
```html
<a href="https://facebook.com/YOUR-PAGE" class="social-btn">Facebook</a>
<a href="https://t.me/YOUR-CHANNEL" class="social-btn">Telegram</a>
```
