---
layout: page
title: オーディオアーカイブ
permalink: /ja/audio-archive/
description: 
nav: false
nav_order: 4
lang: ja
---

# ローレンス家族オーディオアーカイブ
家族の歴史から声、物語、音を捉えます

---

<!-- Search Bar -->
<div style="width: 100%; margin: 2rem 0 1.5rem 0; text-align: center;">
  <input id="audioSearchInput" type="text" placeholder="音声を検索..." style="width: 100%; padding: 0.7rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid #ccc;">
</div>

<!-- Netflix-style Audio Gallery by Category with Carousel -->
<div class="audio-gallery-section">
  {% for category_key in site.data.audio.categories %}
    {% assign category = category_key[1] %}
    {% assign category_id = category_key[0] %}
    
    <h3 style="margin-top:2rem;">{{ category.ja.title }}</h3>
    <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
      {{ category.ja.description }}
    </div>
    <div class="carousel-row">
      <button class="carousel-arrow left" aria-label="左にスクロール">&#8592;</button>
      <div class="audio-carousel" data-category="{{ category_id }}">
        {% for recording in site.data.audio.recordings %}
          {% if recording.category == category_id %}
            <div class="audio-cover" 
                 data-title="{{ recording.ja.title }}" 
                 data-description="{{ recording.ja.synopsis }}" 
                 data-audio="{{ recording.filename }}" 
                 data-tags="{{ recording.ja.tags }}">
              <div class="cover-blank">{{ recording.ja.title }}</div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
      <button class="carousel-arrow right" aria-label="右にスクロール">&#8594;</button>
    </div>
  {% endfor %}
</div>

<!-- Modal for audio details -->
<div id="audioModal" class="audio-modal" style="display:none;">
  <div class="audio-modal-content">
    <span class="audio-modal-close">&times;</span>
    <h3 id="modalTitle">音声タイトル</h3>
    <p id="modalDescription">音声の説明がここに入ります。</p>
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
  border-radius: 5px;
  cursor: pointer;
}
@media (max-width: 600px) {
  .audio-cover {
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
  }
  .cover-blank {
    font-size: 0.85rem;
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
  // Audio modal logic
  const audioCovers = document.querySelectorAll('.audio-cover');
  const audioModal = document.getElementById('audioModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalPlayBtn = document.getElementById('modalPlayBtn');
  const audioClose = document.querySelector('.audio-modal-close');

  audioCovers.forEach(cover => {
    cover.addEventListener('click', function() {
      modalTitle.textContent = cover.getAttribute('data-title');
      modalDescription.textContent = cover.getAttribute('data-description');
      const audioFile = cover.getAttribute('data-audio');
      
      modalPlayBtn.onclick = function() {
        // For now, just show an alert. In the future, you could implement actual audio playback
        alert('音声再生がここで開きます: ' + audioFile);
        // Example of what you could do:
        // window.open('{{ "/assets/audio/" | relative_url }}' + audioFile, '_blank');
      };
      
      audioModal.style.display = 'flex';
    });
  });

  audioClose.addEventListener('click', function() {
    audioModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === audioModal) {
      audioModal.style.display = 'none';
    }
  });

  // Carousel arrow logic
  const leftArrows = document.querySelectorAll('.carousel-arrow.left');
  const rightArrows = document.querySelectorAll('.carousel-arrow.right');

  leftArrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
      const carousel = arrow.parentNode.querySelector('.audio-carousel');
      const cover = carousel.querySelector('.audio-cover');
      let scrollAmount = cover ? cover.offsetWidth + 24 : 180;
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });

  rightArrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
      const carousel = arrow.parentNode.querySelector('.audio-carousel');
      const cover = carousel.querySelector('.audio-cover');
      let scrollAmount = cover ? cover.offsetWidth + 24 : 180;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
      row.style.display = (visibleCount > 0) ? '' : 'none';
      if (visibleCount > 0) anyVisible = true;
    });
  });
});
</script>

---

## アーカイブに新しい音声録音を追加する方法

新しい音声録音を追加するには、`_data/audio.json`ファイルを編集するだけです：

1. **音声ファイルの準備:**
   - 音声を`.mp3`形式に変換してください。
   - 音声ファイルを`assets/audio/`フォルダに配置してください。

2. **JSONデータに音声エントリを追加:**
   - `_data/audio.json`ファイルをテキストエディタで開いてください。
   - `recordings`配列に新しい録音オブジェクトを追加してください：
     ```json
     {
       "id": "あなたの音声ID",
       "category": "oral-histories",
       "filename": "あなたの音声.mp3",
       "en": {
         "title": "Your Audio Title",
         "synopsis": "Description of your audio recording.",
         "tags": "tag1,tag2,tag3"
       },
       "ja": {
         "title": "音声のタイトル",
         "synopsis": "音声録音の説明。",
         "tags": "タグ1,タグ2,タグ3"
       }
     }
     ```

3. **ローカルでテストして変更をプッシュしてください。**

この変更により、音声アーカイブの英語版と日本語版の両方が自動的に更新されます！

---

*家族の声と音を保存する—会話、笑い声、将来の世代が聞いて大切にする物語を捉えます。* 