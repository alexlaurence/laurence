---
layout: page
title: 画像アーカイブ
permalink: /ja/image-archive/
description: 
nav: true
nav_order: 5
lang: ja
---

# ローレンス家族画像アーカイブ
写真と画像で家族の歴史を保存しています

---

<!-- Search Bar -->
<div style="width: 100%; margin: 2rem 0 1.5rem 0; text-align: center;">
  <input id="imageSearchInput" type="text" placeholder="アルバムを検索..." style="width: 100%; padding: 0.7rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid #ccc;">
</div>

<!-- Netflix-style Album Gallery by Category with Carousel -->
<div class="image-gallery-section">
  {% for category_key in site.data.images.categories %}
    {% assign category = category_key[1] %}
    {% assign category_id = category_key[0] %}
    
    <h3 style="margin-top:2rem;">{{ category.ja.title }}</h3>
    <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
      {{ category.ja.description }}
    </div>
    <div class="carousel-row">
      <button class="carousel-arrow left" aria-label="左にスクロール">&#8592;</button>
      <div class="album-carousel" data-category="{{ category_id }}">
        {% for album in site.data.images.albums %}
          {% if album.category == category_id %}
            <div class="album-card" 
                 data-title="{{ album.ja.title }}" 
                 data-description="{{ album.ja.description }}" 
                 data-cover="{{ album.cover }}" 
                 data-images='{{ album.images | jsonify }}' 
                 data-tags="{{ album.ja.tags }}">
              <img src="{{ '/assets/img/' | append: album.cover | relative_url }}" alt="{{ album.ja.title }}" class="album-thumb"/>
              <div class="album-title">{{ album.ja.title }}</div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
      <button class="carousel-arrow right" aria-label="右にスクロール">&#8594;</button>
    </div>
  {% endfor %}
</div>

<!-- Modal for album images -->
<div id="albumModal" class="image-modal" style="display:none;">
  <div class="image-modal-content" style="max-width:700px; width:95vw;">
    <span class="image-modal-close">&times;</span>
    <h3 id="modalAlbumTitle">アルバムタイトル</h3>
    <p id="modalAlbumDescription">アルバムの説明がここに入ります。</p>
    <div class="album-image-carousel-row">
      <button class="carousel-arrow left" id="albumLeftArrow" aria-label="左にスクロール">&#8592;</button>
      <div class="album-image-carousel" id="albumImageCarousel">
        <!-- Images will be injected here -->
      </div>
      <button class="carousel-arrow right" id="albumRightArrow" aria-label="右にスクロール">&#8594;</button>
    </div>
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
.album-carousel {
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
.album-card {
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
.album-card:hover {
  transform: scale(1.05);
}
.album-thumb {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  margin-bottom: 0.5rem;
}
.album-title {
  font-size: 1.08rem;
  font-weight: 600;
  color: #555;
  text-align: center;
  margin-bottom: 0.5rem;
}
.album-image-carousel-row {
  display: flex;
  align-items: center;
  margin: 1.2rem 0 0.5rem 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.album-image-carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1.2rem;
  padding: 0.5rem 0;
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.album-image-card {
  flex: 0 0 160px;
  width: 160px;
  height: 120px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  background: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  transition: transform 0.2s;
}
.album-image-card:hover {
  transform: scale(1.05);
}
.album-image-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.image-modal {
  position: fixed;
  z-index: 1000;
  left: 0; top: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-modal-content {
  background: #fff;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  max-width: 700px;
  width: 95vw;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  position: relative;
  text-align: center;
}
.image-modal-close {
  position: absolute;
  top: 1rem; right: 1.2rem;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
}
@media (max-width: 600px) {
  .album-card {
    flex: 0 0 110px;
    width: 110px;
    height: 130px;
  }
  .album-thumb {
    height: 70px;
  }
  .album-image-card {
    flex: 0 0 80px;
    width: 80px;
    height: 60px;
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
  // Album modal logic
  const albumCards = document.querySelectorAll('.album-card');
  const albumModal = document.getElementById('albumModal');
  const modalAlbumTitle = document.getElementById('modalAlbumTitle');
  const modalAlbumDescription = document.getElementById('modalAlbumDescription');
  const albumImageCarousel = document.getElementById('albumImageCarousel');
  const albumClose = document.querySelector('.image-modal-close');
  const albumLeftArrow = document.getElementById('albumLeftArrow');
  const albumRightArrow = document.getElementById('albumRightArrow');

  let currentAlbumImages = [];
  let currentScroll = 0;

  albumCards.forEach(card => {
    card.addEventListener('click', function() {
      modalAlbumTitle.textContent = card.getAttribute('data-title');
      modalAlbumDescription.textContent = card.getAttribute('data-description');
      const images = JSON.parse(card.getAttribute('data-images'));
      currentAlbumImages = images;
      albumImageCarousel.innerHTML = '';
      images.forEach(img => {
        const imgCard = document.createElement('div');
        imgCard.className = 'album-image-card';
        imgCard.innerHTML = `<img src="{{ '/assets/img/' | relative_url }}${img}" alt="${img}" class="album-image-thumb"/>`;
        imgCard.addEventListener('click', function(e) {
          window.open(`{{ '/assets/img/' | relative_url }}${img}`, '_blank');
          e.stopPropagation();
        });
        albumImageCarousel.appendChild(imgCard);
      });
      albumModal.style.display = 'flex';
      albumImageCarousel.scrollLeft = 0;
      currentScroll = 0;
      updateAlbumArrows();
    });
  });

  albumClose.addEventListener('click', function() {
    albumModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === albumModal) {
      albumModal.style.display = 'none';
    }
  });

  function updateAlbumArrows() {
    // Show/hide arrows based on scroll position
    if (!albumImageCarousel) return;
    const scrollWidth = albumImageCarousel.scrollWidth;
    const clientWidth = albumImageCarousel.clientWidth;
    if (scrollWidth > clientWidth + 2) {
      albumLeftArrow.style.display = '';
      albumRightArrow.style.display = '';
    } else {
      albumLeftArrow.style.display = 'none';
      albumRightArrow.style.display = 'none';
    }
  }
  updateAlbumArrows();
  window.addEventListener('resize', updateAlbumArrows);

  albumLeftArrow.addEventListener('click', function() {
    const card = albumImageCarousel.querySelector('.album-image-card');
    let scrollAmount = card ? card.offsetWidth + 18 : 160;
    albumImageCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  albumRightArrow.addEventListener('click', function() {
    const card = albumImageCarousel.querySelector('.album-image-card');
    let scrollAmount = card ? card.offsetWidth + 18 : 160;
    albumImageCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Album search filter
  const searchInput = document.getElementById('imageSearchInput');
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;
    document.querySelectorAll('.carousel-row').forEach(function(row) {
      const carousel = row.querySelector('.album-carousel');
      let cards = carousel ? carousel.querySelectorAll('.album-card') : [];
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

## アーカイブに新しいアルバムを追加する方法

新しいアルバムを追加するには、`_data/images.json`ファイルを編集するだけです：

1. **画像ファイルの準備:**
   - 画像を`.jpg`、`.jpeg`、または`.png`形式に変換してください。
   - アルバムのすべての画像を`assets/img/`フォルダに置いてください。

2. **JSONデータにアルバムエントリを追加:**
   - `_data/images.json`ファイルをテキストエディタで開いてください。
   - `albums`配列に新しいアルバムオブジェクトを追加してください：
     ```json
     {
       "id": "あなたのアルバムID",
       "category": "family-events",
       "cover": "カバー画像.jpg",
       "images": ["画像1.jpg", "画像2.jpg", "画像3.jpg"],
       "en": {
         "title": "Your Album Title",
         "description": "Description of your album.",
         "tags": "tag1,tag2,tag3"
       },
       "ja": {
         "title": "アルバムのタイトル",
         "description": "アルバムの説明。",
         "tags": "タグ1,タグ2,タグ3"
       }
     }
     ```

3. **ローカルでテストして変更をプッシュしてください。**

この変更により、画像アーカイブの英語版と日本語版の両方が自動的に更新されます！

---

*すべての写真に物語があります。将来の世代のために家族の視覚的歴史を保存しましょう。* 