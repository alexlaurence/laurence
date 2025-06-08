---
layout: page
title: ビデオアーカイブ
permalink: /ja/video-archive/
description: 
nav: false
nav_order: 3
lang: ja
---

# ローレンス家族ビデオアーカイブ
貴重な家族の瞬間と動く思い出を保存します

---

<!-- Search Bar -->
<div style="width: 100%; margin: 2rem 0 1.5rem 0; text-align: center;">
  <input id="videoSearchInput" type="text" placeholder="ビデオを検索..." style="width: 100%; padding: 0.7rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid #ccc;">
</div>

<!-- Netflix-style Video Gallery by Category with Carousel -->
<div class="video-gallery-section">
  {% for category_key in site.data.videos.categories %}
    {% assign category = category_key[1] %}
    {% assign category_id = category_key[0] %}
    
    <h3 style="margin-top:2rem;">{{ category.ja.title }}</h3>
    <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
      {{ category.ja.description }}
    </div>
    <div class="carousel-row">
      <button class="carousel-arrow left" aria-label="左にスクロール">&#8592;</button>
      <div class="video-carousel" data-category="{{ category_id }}">
        {% for video in site.data.videos.videos %}
          {% if video.category == category_id %}
            <div class="video-poster" 
                 data-title="{{ video.ja.title }}" 
                 data-synopsis="{{ video.ja.synopsis }}" 
                 data-video="{{ video.filename }}" 
                 data-tags="{{ video.ja.tags }}">
              <div class="poster-blank">{{ video.ja.title }}</div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
      <button class="carousel-arrow right" aria-label="右にスクロール">&#8594;</button>
    </div>
  {% endfor %}
</div>

<!-- Modal for video details -->
<div id="videoModal" class="video-modal" style="display:none;">
  <div class="video-modal-content">
    <span class="video-modal-close">&times;</span>
    <h3 id="modalTitle">ビデオタイトル</h3>
    <p id="modalSynopsis">ビデオの概要がここに入ります。</p>
    <button id="modalPlayBtn" style="margin-top:1rem; padding:0.5rem 1.5rem; font-size:1rem;">▶ 再生</button>
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
  border-radius: 5px;
  cursor: pointer;
}
@media (max-width: 600px) {
  .video-poster {
    flex: 0 0 110px;
    width: 110px;
    height: 160px;
  }
  .poster-blank {
    font-size: 0.9rem;
    padding: 0.5rem;
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
  // Video modal logic
  const videoPosters = document.querySelectorAll('.video-poster');
  const videoModal = document.getElementById('videoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSynopsis = document.getElementById('modalSynopsis');
  const modalPlayBtn = document.getElementById('modalPlayBtn');
  const videoClose = document.querySelector('.video-modal-close');

  videoPosters.forEach(poster => {
    poster.addEventListener('click', function() {
      modalTitle.textContent = poster.getAttribute('data-title');
      modalSynopsis.textContent = poster.getAttribute('data-synopsis');
      const videoFile = poster.getAttribute('data-video');
      
      modalPlayBtn.onclick = function() {
        // For now, just show an alert. In the future, you could implement actual video playback
        alert('ビデオ再生がここで開きます: ' + videoFile);
        // Example of what you could do:
        // window.open('{{ "/assets/videos/" | relative_url }}' + videoFile, '_blank');
      };
      
      videoModal.style.display = 'flex';
    });
  });

  videoClose.addEventListener('click', function() {
    videoModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === videoModal) {
      videoModal.style.display = 'none';
    }
  });

  // Carousel arrow logic
  const leftArrows = document.querySelectorAll('.carousel-arrow.left');
  const rightArrows = document.querySelectorAll('.carousel-arrow.right');

  leftArrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
      const carousel = arrow.parentNode.querySelector('.video-carousel');
      const poster = carousel.querySelector('.video-poster');
      let scrollAmount = poster ? poster.offsetWidth + 24 : 200;
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });

  rightArrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
      const carousel = arrow.parentNode.querySelector('.video-carousel');
      const poster = carousel.querySelector('.video-poster');
      let scrollAmount = poster ? poster.offsetWidth + 24 : 200;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
      row.style.display = (visibleCount > 0) ? '' : 'none';
      if (visibleCount > 0) anyVisible = true;
    });
  });
});
</script>

---

## アーカイブに新しいビデオを追加する方法

新しいビデオを追加するには、`_data/videos.json`ファイルを編集するだけです：

1. **ビデオファイルの準備:**
   - ビデオを`.mp4`形式に変換してください。
   - ビデオファイルを`assets/videos/`フォルダに配置してください。

2. **JSONデータにビデオエントリを追加:**
   - `_data/videos.json`ファイルをテキストエディタで開いてください。
   - `videos`配列に新しいビデオオブジェクトを追加してください：
     ```json
     {
       "id": "あなたのビデオID",
       "category": "family-events",
       "filename": "あなたのビデオ.mp4",
       "en": {
         "title": "Your Video Title",
         "synopsis": "Description of your video.",
         "tags": "tag1,tag2,tag3"
       },
       "ja": {
         "title": "ビデオのタイトル",
         "synopsis": "ビデオの説明。",
         "tags": "タグ1,タグ2,タグ3"
       }
     }
     ```

3. **ローカルでテストして変更をプッシュしてください。**

この変更により、ビデオアーカイブの英語版と日本語版の両方が自動的に更新されます！

---

*動く思い出を捉える—将来の世代のために家族の声、笑い声、貴重な瞬間を保存します。* 