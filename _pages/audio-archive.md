---
layout: page
title: Audio Archive
permalink: /audio-archive/
description: 
nav: false
nav_order: 4
---

# The Laurence Family Audio Archive
Capturing voices, stories, and sounds from our family's history

---

<!-- Search Bar -->
<div style="width: 100%; margin: 2rem 0 1.5rem 0; text-align: center;">
  <input id="audioSearchInput" type="text" placeholder="Search audio..." style="width: 100%; padding: 0.7rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid #ccc;">
</div>

<!-- Netflix-style Audio Gallery by Category with Carousel -->
<div class="audio-gallery-section">


  <!-- Oral Histories -->
  <h3 style="margin-top:2rem;">🎙️ Oral Histories</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Life story interviews, personal accounts of history, immigration stories, career narratives, and childhood memories from family elders.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="audio-carousel" data-category="oral-histories">
      <div class="audio-cover" data-title="Grandma's Life Story" data-description="An in-depth interview with Grandma about her childhood and family origins." data-audio="audio1.mp3" data-tags="grandma,oral history,life story,interview,elders,origins">
        <div class="cover-blank">Grandma's Life Story</div>
      </div>
      <!-- Add more Oral Histories covers here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Family Conversations -->
  <h3 style="margin-top:2rem;">📞 Family Conversations</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Holiday phone calls, casual discussions, children's voices, family traditions, and spontaneous laughter—capturing the sound of family life.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="audio-carousel" data-category="family-conversations">
      <div class="audio-cover" data-title="Holiday Phone Call 2002" data-description="A joyful holiday phone call with relatives across the country." data-audio="audio2.mp3" data-tags="holiday,phone call,2002,conversation,relatives">
        <div class="cover-blank">Holiday Phone Call 2002</div>
      </div>
      <!-- Add more Family Conversations covers here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Musical Heritage -->
  <h3 style="margin-top:2rem;">🎵 Musical Heritage</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Family members singing, playing instruments, traditional songs, musical performances, and lullabies—our family's musical legacy.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="audio-carousel" data-category="musical-heritage">
      <div class="audio-cover" data-title="Family Band Performance" data-description="A recording of the family band playing at the 1995 reunion." data-audio="audio3.mp3" data-tags="family band,performance,1995,reunion,music,heritage">
        <div class="cover-blank">Family Band Performance</div>
      </div>
      <!-- Add more Musical Heritage covers here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>

  <!-- Historical Recordings -->
  <h3 style="margin-top:2rem;">📻 Historical Recordings</h3>
  <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
    Radio broadcasts, news events, speeches, ceremonies, and anniversary recordings—audio snapshots of our family's place in history.
  </div>
  <div class="carousel-row">
    <button class="carousel-arrow left" aria-label="Scroll left">&#8592;</button>
    <div class="audio-carousel" data-category="historical-recordings">
      <div class="audio-cover" data-title="Radio Broadcast 1969" data-description="A radio news broadcast from the day of the moon landing." data-audio="audio4.mp3" data-tags="radio,broadcast,1969,moon landing,history,news">
        <div class="cover-blank">Radio Broadcast 1969</div>
      </div>
      <!-- Add more Historical Recordings covers here -->
    </div>
    <button class="carousel-arrow right" aria-label="Scroll right">&#8594;</button>
  </div>
</div>

<!-- Modal for audio details -->
<div id="audioModal" class="audio-modal" style="display:none;">
  <div class="audio-modal-content">
    <span class="audio-modal-close">&times;</span>
    <h3 id="modalTitle">Audio Title</h3>
    <p id="modalDescription">Audio description goes here.</p>
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
.audio-carousel {
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
.audio-cover {
  flex: 0 0 160px;
  width: 160px;
  height: 160px;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  align-items: flex-end;
}
.audio-cover:hover {
  transform: scale(1.05);
}
.cover-blank {
  background: linear-gradient(135deg, #e0e0e0 60%, #bdbdbd 100%);
  border-radius: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.05rem;
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
.audio-modal {
  position: fixed;
  z-index: 1000;
  left: 0; top: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.audio-modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  max-width: 400px;
  width: 90vw;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  position: relative;
  text-align: center;
}
.audio-modal-close {
  position: absolute;
  top: 1rem; right: 1.2rem;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
}
#audioModal #modalPlayBtn {
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
#audioModal #modalPlayBtn:hover {
  background: #b00610;
}
@media (max-width: 600px) {
  .audio-cover {
    flex: 0 0 90px;
    width: 90px;
    height: 90px;
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
  // Modal logic
  const covers = document.querySelectorAll('.audio-cover');
  const modal = document.getElementById('audioModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalPlayBtn = document.getElementById('modalPlayBtn');
  const modalClose = document.querySelector('.audio-modal-close');
  let currentAudio = null;

  covers.forEach(cover => {
    cover.addEventListener('click', function() {
      modalTitle.textContent = cover.getAttribute('data-title');
      modalDescription.textContent = cover.getAttribute('data-description');
      currentAudio = cover.getAttribute('data-audio');
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

  modalPlayBtn.addEventListener('click', function() {
    alert('Playing: ' + (modalTitle.textContent || 'Audio'));
    // Here you could embed an audio player or redirect to an audio page
  });

  // Responsive carousel arrow logic
  function updateCarouselArrows() {
    document.querySelectorAll('.carousel-row').forEach(function(row) {
      const carousel = row.querySelector('.audio-carousel');
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
    const carousel = row.querySelector('.audio-carousel');
    const leftArrow = row.querySelector('.carousel-arrow.left');
    const rightArrow = row.querySelector('.carousel-arrow.right');
    if (!carousel || !leftArrow || !rightArrow) return;
    leftArrow.addEventListener('click', function() {
      const cover = carousel.querySelector('.audio-cover');
      let scrollAmount = cover ? cover.offsetWidth + 24 : 160;
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', function() {
      const cover = carousel.querySelector('.audio-cover');
      let scrollAmount = cover ? cover.offsetWidth + 24 : 160;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    carousel.addEventListener('scroll', function() {
      // Could add logic to disable arrows if at start/end
    });
  });

  // Audio search filter
  const searchInput = document.getElementById('audioSearchInput');
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;
    document.querySelectorAll('.carousel-row').forEach(function(row) {
      const carousel = row.querySelector('.audio-carousel');
      let covers = carousel ? carousel.querySelectorAll('.audio-cover') : [];
      let visibleCount = 0;
      covers.forEach(function(cover) {
        const title = cover.getAttribute('data-title') || '';
        const description = cover.getAttribute('data-description') || '';
        const tags = cover.getAttribute('data-tags') || '';
        const match = title.toLowerCase().includes(query) || description.toLowerCase().includes(query) || tags.toLowerCase().includes(query);
        cover.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });
      // Hide carousel row if no visible covers
      row.style.display = (visibleCount > 0) ? '' : 'none';
      if (visibleCount > 0) anyVisible = true;
    });
    // Optionally, show a message if no results
    // (not implemented here for simplicity)
  });
});
</script>

## How to Contribute

We welcome contributions to our family audio archive in several ways. For new recordings, we encourage you to conduct interviews with family members, capture meaningful conversations at gatherings, document our stories and traditions, and share significant voicemails or audio messages.

For historical audio content, we offer digitization services for a variety of formats. We can convert cassette tapes, reel-to-reel recordings, vinyl records containing family-related content, old answering machine messages, audio CDs, and other legacy formats into digital files for preservation.

To ensure the highest quality recordings, we recommend using WAV, MP3, or M4A formats at high bitrates (256kbps or higher). When making new recordings, choose a quiet environment for optimal clarity and use quality microphones when possible. Recordings of any length are welcome in our archive.

We take privacy seriously in managing these precious family memories. All recordings are only shared with approved family members, and we handle sensitive content with appropriate discretion. Contributors retain rights to their recordings, and we can customize access levels for individual items to ensure proper privacy controls.

---

*Every voice tells a story. Help us preserve the soundtrack of our family's journey.* 