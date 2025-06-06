---
layout: page
title: Video Archive
permalink: /video-archive/
description: 
nav: false
nav_order: 3
---

# The Laurence Family Video Archive
Preserving precious family moments and memories in motion

---

<!-- Search Bar -->
<div style="width: 100%; margin: 2rem 0 1.5rem 0; text-align: center;">
  <input id="videoSearchInput" type="text" placeholder="Search videos..." style="width: 100%; padding: 0.7rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid #ccc;">
</div>

<!-- Netflix-style Video Gallery by Category with Carousel -->
<div class="video-gallery-section">


  <!-- Family Events -->
  <h3 style="margin-top:2rem;">📹 Family Events</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Weddings, celebrations, holiday gatherings, birthdays, graduations, and family reunions—cherished moments from our most important events.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="video-carousel" data-category="family-events">
      <div class="video-poster" data-title="Family Reunion 1998" data-synopsis="A heartwarming look back at the 1998 family reunion in the old backyard." data-video="video1.mp4" data-tags="reunion,1998,backyard,family event,celebration">
        <div class="poster-blank">Family Reunion 1998</div>
      </div>
      <div class="video-poster" data-title="Holiday Dinner" data-synopsis="The whole family gathers for a festive holiday meal." data-video="video4.mp4" data-tags="holiday,dinner,celebration,family event,meal">
        <div class="poster-blank">Holiday Dinner</div>
      </div>
      <!-- Add more Family Events posters here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Home Movies -->
  <h3 style="margin-top:2rem;">🏠 Home Movies</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Everyday family life, children growing up, pets, vacations, and candid moments—capturing the heart of home.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="video-carousel" data-category="home-movies">
      <div class="video-poster" data-title="Summer Vacation" data-synopsis="Fun times at the lake during the summer of 2005." data-video="video3.mp4" data-tags="summer,vacation,2005,lake,home movie,travel">
        <div class="poster-blank">Summer Vacation</div>
      </div>
      <!-- Add more Home Movies posters here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Oral Histories -->
  <h3 style="margin-top:2rem;">🎤 Oral Histories</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Interviews with family elders, stories, traditions, and personal testimonies—wisdom and memories passed down.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="video-carousel" data-category="oral-histories">
      <div class="video-poster" data-title="Grandpa's Stories" data-synopsis="Grandpa shares tales from his youth and family history." data-video="video2.mp4" data-tags="grandpa,oral history,stories,elders,interview">
        <div class="poster-blank">Grandpa's Stories</div>
      </div>
      <!-- Add more Oral Histories posters here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Educational Content -->
  <h3 style="margin-top:2rem;">📚 Educational Content</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Family history presentations, genealogy research, historical context, and cultural heritage explained.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="video-carousel" data-category="educational-content">
      <!-- Add Educational Content posters here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>
</div>

<!-- Modal for video details -->
<div id="videoModal" class="video-modal" style="display:none;">
  <div class="video-modal-content">
    <span class="video-modal-close">&times;</span>
    <h3 id="modalTitle">Video Title</h3>
    <p id="modalSynopsis">Video synopsis goes here.</p>
    <button id="modalPlayBtn" style="margin-top:1rem; padding:0.5rem 1.5rem; font-size:1rem;">▶ Play</button>
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
.video-carousel {
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
.video-poster {
  flex: 0 0 180px;
  width: 180px;
  height: 260px;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  align-items: flex-end;
}
.video-poster:hover {
  transform: scale(1.05);
}
.poster-blank {
  background: linear-gradient(135deg, #e0e0e0 60%, #bdbdbd 100%);
  border-radius: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #555;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  text-align: center;
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
.video-modal {
  position: fixed;
  z-index: 1000;
  left: 0; top: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  max-width: 400px;
  width: 90vw;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  position: relative;
  text-align: center;
}
.video-modal-close {
  position: absolute;
  top: 1rem; right: 1.2rem;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
}
#modalPlayBtn {
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
#modalPlayBtn:hover {
  background: #b00610;
}
@media (max-width: 600px) {
  .video-poster {
    flex: 0 0 130px;
    width: 130px;
    height: 180px;
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
  const posters = document.querySelectorAll('.video-poster');
  const modal = document.getElementById('videoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSynopsis = document.getElementById('modalSynopsis');
  const modalPlayBtn = document.getElementById('modalPlayBtn');
  const modalClose = document.querySelector('.video-modal-close');
  let currentVideo = null;

  function slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  posters.forEach(poster => {
    poster.addEventListener('click', function() {
      modalTitle.textContent = poster.getAttribute('data-title');
      modalSynopsis.textContent = poster.getAttribute('data-synopsis');
      currentVideo = poster.getAttribute('data-video');
      modal.style.display = 'flex';
    });
  });

  // Play from hash if present
  function playFromHash() {
    if (window.location.hash.startsWith('#play-')) {
      const slug = window.location.hash.replace('#play-', '');
      let found = false;
      posters.forEach(poster => {
        const title = poster.getAttribute('data-title') || '';
        if (slugify(title) === slug) {
          poster.click();
          found = true;
        }
      });
      // Optionally, clear the hash after playing
      // if (found) window.location.hash = '';
    }
  }
  playFromHash();

  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  modalPlayBtn.addEventListener('click', function() {
    alert('Playing: ' + (modalTitle.textContent || 'Video'));
    // Here you could embed a video player or redirect to a video page
  });

  // Responsive carousel arrow logic
  function updateCarouselArrows() {
    document.querySelectorAll('.carousel-row').forEach(function(row) {
      const carousel = row.querySelector('.video-carousel');
      const leftArrow = row.querySelector('.carousel-arrow.left');
      const rightArrow = row.querySelector('.carousel-arrow.right');
      if (!carousel || !leftArrow || !rightArrow) return;
      // Calculate total scrollable width vs visible width
      const scrollWidth = carousel.scrollWidth;
      const clientWidth = carousel.clientWidth;
      if (scrollWidth > clientWidth + 2) { // +2 for rounding errors
        leftArrow.style.display = '';
        rightArrow.style.display = '';
      } else {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
      }
    });
  }

  // Initial check
  updateCarouselArrows();
  // Update on window resize
  window.addEventListener('resize', updateCarouselArrows);
  // Update on content change (e.g., if you add posters dynamically)
  // Optionally, you could use a MutationObserver for dynamic content

  // Carousel scroll logic
  document.querySelectorAll('.carousel-row').forEach(function(row) {
    const carousel = row.querySelector('.video-carousel');
    const leftArrow = row.querySelector('.carousel-arrow.left');
    const rightArrow = row.querySelector('.carousel-arrow.right');
    if (!carousel || !leftArrow || !rightArrow) return;
    leftArrow.addEventListener('click', function() {
      // Scroll by the width of one poster (plus gap)
      const poster = carousel.querySelector('.video-poster');
      let scrollAmount = poster ? poster.offsetWidth + 24 : 200; // 24px = gap
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', function() {
      const poster = carousel.querySelector('.video-poster');
      let scrollAmount = poster ? poster.offsetWidth + 24 : 200;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    // Optional: update arrows on scroll (e.g., disable if at start/end)
    carousel.addEventListener('scroll', function() {
      // Could add logic to disable arrows if at start/end
    });
  });

  // Video search filter
  const searchInput = document.getElementById('videoSearchInput');
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;
    document.querySelectorAll('.carousel-row').forEach(function(row) {
      const carousel = row.querySelector('.video-carousel');
      let posters = carousel ? carousel.querySelectorAll('.video-poster') : [];
      let visibleCount = 0;
      posters.forEach(function(poster) {
        const title = poster.getAttribute('data-title') || '';
        const synopsis = poster.getAttribute('data-synopsis') || '';
        const tags = poster.getAttribute('data-tags') || '';
        const match = title.toLowerCase().includes(query) || synopsis.toLowerCase().includes(query) || tags.toLowerCase().includes(query);
        poster.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      // Hide carousel row if no visible posters
      row.style.display = (visibleCount > 0) ? '' : 'none';
      if (visibleCount > 0) anyVisible = true;
    });
    // Optionally, show a message if no results
    // (not implemented here for simplicity)
  });
});
</script>

---

## Contribution Guidelines

We welcome contributions to our comprehensive video archive from all family members. For modern digital content, we accept uploads of recent recordings from smartphones, digital cameras, and other devices, including both videos and photo-video combinations from recent family events.

For historical content, we offer digitization services for older media formats. We can help convert old film reels, including 8mm, Super 8, and 16mm formats, as well as VHS tapes and other analog video formats. Please reach out to us to arrange transfer of any physical media.

When submitting videos, we ask that you provide key contextual information including the date and location of the recording, names of people who appear in the video, a description of the event or occasion being captured, and any relevant background details that help tell the story.

To ensure optimal quality in our archive, we recommend submitting videos in MP4, MOV, or AVI format, preferably in HD (1080p) resolution when possible. While we can accommodate large file sizes through special upload arrangements, we maintain strict privacy controls - all videos are only shared with approved family members to protect everyone's privacy.

---

*This archive is a work in progress. Check back regularly for new additions to our video collection.* 