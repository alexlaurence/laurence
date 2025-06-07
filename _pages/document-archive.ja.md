---
layout: page
title: ドキュメントアーカイブ
permalink: /ja/document-archive/
description: 
nav: true
nav_order: 6
lang: ja
---

# ローレンス家族ドキュメントアーカイブ
家族の重要な書類、証明書、記念品を保存します

---

<!-- Search Bar -->
<div style="width: 100%; margin: 2rem 0 1.5rem 0; text-align: center;">
  <input id="documentSearchInput" type="text" placeholder="文書を検索..." style="width: 100%; padding: 0.7rem 1rem; font-size: 1.1rem; border-radius: 8px; border: 1px solid #ccc;">
</div>

<!-- Document Gallery by Category with Carousel -->
<div class="document-gallery-section">
  {% for category_key in site.data.documents.categories %}
    {% assign category = category_key[1] %}
    {% assign category_id = category_key[0] %}
    
    <h3 style="margin-top:2rem;">{{ category.ja.title }}</h3>
    <div class="category-desc" style="color:#666; font-size:0.98rem; margin-bottom:0.2rem;">
      {{ category.ja.description }}
    </div>
    <div class="carousel-row">
      <button class="carousel-arrow left" aria-label="左にスクロール">&#8592;</button>
      <div class="document-carousel" data-category="{{ category_id }}">
        {% for document in site.data.documents.documents %}
          {% if document.category == category_id %}
            <div class="document-card" 
                 data-title="{{ document.ja.title }}" 
                 data-description="{{ document.ja.description }}" 
                 data-image="{{ document.filename }}" 
                 data-tags="{{ document.ja.tags }}">
              <img src="{{ '/assets/documents/' | append: document.filename | relative_url }}" alt="{{ document.ja.title }}" class="document-thumb"/>
              <div class="document-title">{{ document.ja.title }}</div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
      <button class="carousel-arrow right" aria-label="右にスクロール">&#8594;</button>
    </div>
  {% endfor %}
</div>

<!-- Modal for document details -->
<div id="documentModal" class="document-modal" style="display:none;">
  <div class="document-modal-content">
    <span class="document-modal-close">&times;</span>
    <img id="modalDocumentImage" src="" alt="Document" style="max-width:100%; max-height:350px; border-radius:10px; margin-bottom:1rem;"/>
    <h3 id="modalDocumentTitle">文書タイトル</h3>
    <p id="modalDocumentDescription">文書の説明がここに入ります。</p>
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
  // Document modal logic
  const documentCards = document.querySelectorAll('.document-card');
  const documentModal = document.getElementById('documentModal');
  const modalDocumentImage = document.getElementById('modalDocumentImage');
  const modalDocumentTitle = document.getElementById('modalDocumentTitle');
  const modalDocumentDescription = document.getElementById('modalDocumentDescription');
  const documentClose = document.querySelector('.document-modal-close');

  documentCards.forEach(card => {
    card.addEventListener('click', function() {
      modalDocumentTitle.textContent = card.getAttribute('data-title');
      modalDocumentDescription.textContent = card.getAttribute('data-description');
      const imageSrc = card.getAttribute('data-image');
      modalDocumentImage.src = '{{ "/assets/documents/" | relative_url }}' + imageSrc;
      modalDocumentImage.alt = card.getAttribute('data-title');
      documentModal.style.display = 'flex';
    });
  });

  documentClose.addEventListener('click', function() {
    documentModal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === documentModal) {
      documentModal.style.display = 'none';
    }
  });

  // Carousel arrow logic
  const leftArrows = document.querySelectorAll('.carousel-arrow.left');
  const rightArrows = document.querySelectorAll('.carousel-arrow.right');

  leftArrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
      const carousel = arrow.parentNode.querySelector('.document-carousel');
      const card = carousel.querySelector('.document-card');
      let scrollAmount = card ? card.offsetWidth + 24 : 200;
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });

  rightArrows.forEach(arrow => {
    arrow.addEventListener('click', function() {
      const carousel = arrow.parentNode.querySelector('.document-carousel');
      const card = carousel.querySelector('.document-card');
      let scrollAmount = card ? card.offsetWidth + 24 : 200;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
  });
});
</script>

---

## アーカイブに新しい文書を追加する方法

新しい文書を追加するには、`_data/documents.json`ファイルを編集するだけです：

1. **文書ファイルの準備:**
   - 文書をスキャンまたは撮影し、`.jpg`、`.png`、または`.pdf`として保存してください。
   - 文書ファイルを`assets/documents/`フォルダに配置してください。

2. **JSONデータに文書エントリを追加:**
   - `_data/documents.json`ファイルをテキストエディタで開いてください。
   - `documents`配列に新しい文書オブジェクトを追加してください：
     ```json
     {
       "id": "あなたの文書ID",
       "category": "genealogy",
       "filename": "あなたの文書.jpg",
       "en": {
         "title": "Your Document Title",
         "description": "Description of your document.",
         "tags": "tag1,tag2,tag3"
       },
       "ja": {
         "title": "文書のタイトル",
         "description": "文書の説明。",
         "tags": "タグ1,タグ2,タグ3"
       }
     }
     ```

3. **ローカルでテストして変更をプッシュしてください。**

この変更により、文書アーカイブの英語版と日本語版の両方が自動的に更新されます！

---

*家族の書類記録を保存する—私たちの遺産の物語を語る重要な文書、証明書、大切な記念品。* 