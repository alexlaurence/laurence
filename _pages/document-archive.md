---
layout: page
title: Document Archive
permalink: /document-archive/
description: 
nav: false
nav_order: 6
---

# The Laurence Family Document Archive
Preserving our family's important papers, certificates, and keepsakes

---

<!-- Search Bar -->
<div style="width: 100%; margin: 2rem 0 1.5rem 0; text-align: center;">
  <input id="documentSearchInput" type="text" placeholder="Search documents..." style="width: 100%; padding: 0.7rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid #ccc;">
</div>

<!-- Document Gallery by Category with Carousel -->
<div class="document-gallery-section">

  <!-- Certificates & Awards -->
  <h3 style="margin-top:2rem;">📜 Certificates & Awards</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Diplomas, degrees, awards, and certificates of achievement.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="document-carousel" data-category="certificates-awards">
      <!-- Example document card -->
      <div class="document-card" data-title="High School Diploma" data-description="Alexander's high school diploma, 2002." data-image="certificate1.jpg" data-tags="diploma,certificate,school,2002,award">
        <img src="/assets/img/certificate1.jpg" alt="High School Diploma" class="document-thumb"/>
        <div class="document-title">High School Diploma</div>
      </div>
      <!-- Add more Certificates & Awards documents here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Letters & Correspondence -->
  <h3 style="margin-top:2rem;">✉️ Letters & Correspondence</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Family letters, postcards, and personal correspondence.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="document-carousel" data-category="letters-correspondence">
      <!-- Add Letters & Correspondence documents here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Legal & Official Documents -->
  <h3 style="margin-top:2rem;">📑 Legal & Official Documents</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Birth certificates, marriage licenses, immigration papers, and other official records.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="document-carousel" data-category="legal-official">
      <!-- Add Legal & Official Documents here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Heirlooms & Keepsakes -->
  <h3 style="margin-top:2rem;">🏺 Heirlooms & Keepsakes</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Scans or photos of treasured family artifacts, heirlooms, and keepsakes.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="document-carousel" data-category="heirlooms-keepsakes">
      <!-- Add Heirlooms & Keepsakes here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Miscellaneous -->
  <h3 style="margin-top:2rem;">🗂️ Miscellaneous</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Other important or interesting documents that don't fit the above categories.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="document-carousel" data-category="miscellaneous">
      <!-- Add Miscellaneous documents here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>
</div>

<!-- Modal for document details -->
<div id="documentModal" class="document-modal" style="display:none;">
  <div class="document-modal-content">
    <span class="document-modal-close">&times;</span>
    <img id="modalDocumentImage" src="" alt="Document" style="max-width:100%; max-height:350px; border-radius:10px; margin-bottom:1rem;"/>
    <h3 id="modalDocumentTitle">Document Title</h3>
    <p id="modalDocumentDescription">Document description goes here.</p>
  </div>
</div>

<style>
.carousel-row {
  display: flex;
  align-items: center;
  margin: 1.5rem 0 2.5rem 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.document-carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1.5rem;
  padding: 1rem 0;
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.document-card {
  flex: 0 0 180px;
  width: 180px;
  height: 220px;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.document-card:hover {
  transform: scale(1.05);
}
.document-thumb {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin-bottom: 0.5rem;
}
.document-title {
  font-size: 1.08rem;
  font-weight: 600;
  color: #555;
  text-align: center;
  margin-bottom: 0.5rem;
}
.carousel-arrow {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  transition: background 0.2s, color 0.2s;
  z-index: 2;
}
.carousel-arrow:hover {
  background: #e50914;
  color: #fff;
}
.carousel-arrow[disabled] {
  opacity: 0.3;
  pointer-events: none;
}
.document-modal {
  position: fixed;
  z-index: 1000;
  left: 0; top: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.document-modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  max-width: 400px;
  width: 90vw;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  position: relative;
  text-align: center;
}
.document-modal-close {
  position: absolute;
  top: 1rem; right: 1.2rem;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
}
@media (max-width: 600px) {
  .document-card {
    flex: 0 0 110px;
    width: 110px;
    height: 130px;
  }
  .document-thumb {
    height: 70px;
  }
}
.category-desc {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.document-card');
  const modal = document.getElementById('documentModal');
  const modalTitle = document.getElementById('modalDocumentTitle');
  const modalDescription = document.getElementById('modalDocumentDescription');
  const modalImage = document.getElementById('modalDocumentImage');
  const modalClose = document.querySelector('.document-modal-close');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      modalTitle.textContent = card.getAttribute('data-title');
      modalDescription.textContent = card.getAttribute('data-description');
      modalImage.src = '/assets/img/' + card.getAttribute('data-image');
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Responsive carousel arrow logic
  function updateCarouselArrows() {
    document.querySelectorAll('.carousel-row').forEach(function(row) {
      const carousel = row.querySelector('.document-carousel');
      const leftArrow = row.querySelector('.carousel-arrow.left');
      const rightArrow = row.querySelector('.carousel-arrow.right');
      if (!carousel || !leftArrow || !rightArrow) return;
      const scrollWidth = carousel.scrollWidth;
      const clientWidth = carousel.clientWidth;
      if (scrollWidth > clientWidth + 2) {
        leftArrow.style.display = '';
        rightArrow.style.display = '';
      } else {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
      }
    });
  }
  updateCarouselArrows();
  window.addEventListener('resize', updateCarouselArrows);

  // Carousel scroll logic
  document.querySelectorAll('.carousel-row').forEach(function(row) {
    const carousel = row.querySelector('.document-carousel');
    const leftArrow = row.querySelector('.carousel-arrow.left');
    const rightArrow = row.querySelector('.carousel-arrow.right');
    if (!carousel || !leftArrow || !rightArrow) return;
    leftArrow.addEventListener('click', function() {
      const card = carousel.querySelector('.document-card');
      let scrollAmount = card ? card.offsetWidth + 24 : 180;
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', function() {
      const card = carousel.querySelector('.document-card');
      let scrollAmount = card ? card.offsetWidth + 24 : 180;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    carousel.addEventListener('scroll', function() {
      // Could add logic to disable arrows if at start/end
    });
  });

  // Document search filter
  const searchInput = document.getElementById('documentSearchInput');
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;
    document.querySelectorAll('.carousel-row').forEach(function(row) {
      const carousel = row.querySelector('.document-carousel');
      let cards = carousel ? carousel.querySelectorAll('.document-card') : [];
      let visibleCount = 0;
      cards.forEach(function(card) {
        const title = card.getAttribute('data-title') || '';
        const description = card.getAttribute('data-description') || '';
        const tags = card.getAttribute('data-tags') || '';
        const match = title.toLowerCase().includes(query) || description.toLowerCase().includes(query) || tags.toLowerCase().includes(query);
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      row.style.display = (visibleCount > 0) ? '' : 'none';
      if (visibleCount > 0) anyVisible = true;
    });
    // Optionally, show a message if no results
  });
});
</script>

---

## How to Add a New Document to the Archive

If you want to add a new document to the archive yourself, follow these steps:

1. **Prepare your document scan or photo:**
   - Convert your document to `.jpg`, `.jpeg`, or `.png` format for best compatibility.
   - Place the document image file in the `assets/img/` folder (create this folder if it doesn't exist).
   - Example: `assets/img/certificate1.jpg`

2. **Add a document entry to the archive page:**
   - Open the file `_pages/document-archive.md` in a text editor.
   - Find the section for the correct category (Certificates & Awards, Letters & Correspondence, etc.).
   - Add a new block like this inside the appropriate `<div class="document-carousel" ...>`:
     ```html
     <div class="document-card"
          data-title="High School Diploma"
          data-description="Alexander's high school diploma, 2002."
          data-image="certificate1.jpg"
          data-tags="diploma,certificate,school,2002,award">
       <img src="/assets/img/certificate1.jpg" alt="High School Diploma" class="document-thumb"/>
       <div class="document-title">High School Diploma</div>
     </div>
     ```
   - **data-title**: The display title of the document.
   - **data-description**: A short description of the document.
   - **data-image**: The filename of your document image (should match the file you placed in `assets/img/`).
   - **data-tags**: Comma-separated keywords for search (include year, type, people, location, etc.).
   - The `<img ...>` tag displays the document thumbnail in the gallery.

3. **Test your addition:**
   - Run the site locally (see instructions above).
   - Search for your document using the search bar.
   - Click the document card to open the modal and verify the title, description, and tags.

4. **Commit and push your changes:**
   - After confirming everything works, save your changes and upload them to the repository.

**Summary Checklist:**
- [ ] Place document image file in the `assets/img/` folder
- [ ] Add a `<div class="document-card" ...>` block in `_pages/document-archive.md` under the correct category
- [ ] Fill in `data-title`, `data-description`, `data-image`, and `data-tags`
- [ ] Test locally
- [ ] Commit and push your changes

If you want to automate or further enhance this process (e.g., with automatic OCR or a CMS), ask Alexander or another technical family member for help!

---

*Every document tells a story. Help us preserve the written history of our family for generations to come.* 