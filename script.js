/**
 * MORART Dataset Portal - Interactive Logic
 * Supports class filtering and live search across the 16 final classes,
 * modal lightbox image viewer, and 1-click citation copying.
 */

// Dataset Categories and Classes metadata
const DATASET_CLASSES = [
  {
    id: 1,
    number: "1",
    name: "Ait Ben Haddou",
    localName: "قصر آيت بن حدو",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/04. Ait Ben Haddou_34.jpg",
    page: "class_pages/04.Aitbenhaddou.html",
    description: "UNESCO World Heritage fortified earthen ksar along the ancient trans-Saharan trade route in Ouarzazate."
  },
  {
    id: 2,
    number: "2",
    name: "Babouche Souss F",
    localName: "إدوكان - بلغة سوسية نسائية",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/09. Babouche Souss F_52.jpg",
    page: "class_pages/09.BabouchesoussF.html",
    description: "Traditional Amazigh leather footwear from the Souss region embellished with vivid embroidered floral motifs."
  },
  {
    id: 3,
    number: "3",
    name: "Berrad",
    localName: "البراد المغربي",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/05. Berrad_245.jpg",
    page: "class_pages/05.Berrad.html",
    description: "Handcrafted metal teapot with curved spout, central to the ceremonial pouring of Moroccan mint tea."
  },
  {
    id: 4,
    number: "4",
    name: "Couscous",
    localName: "الكسكس المغربي بالسبع خضار",
    category: "food",
    categoryLabel: "Culinary Heritage",
    image: "images/11. Couscous_68.jpg",
    page: "class_pages/11.Couscous.html",
    description: "UNESCO-recognized national dish of steamed semolina granules served with seven savory vegetables, tender meat, and broth."
  },
  {
    id: 5,
    number: "5",
    name: "Djellaba",
    localName: "الجلابة المغربية",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/14. Djellaba_59.jpg",
    page: "class_pages/14.Djellaba.html",
    description: "Long hooded Moroccan outer robe with deep sleeves and decorative sfifa trim, worn across all seasons."
  },
  {
    id: 6,
    number: "6",
    name: "Fountain",
    localName: "السقاية المغربية",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/18. Fountain_35.jpg",
    page: "class_pages/18.Fountain.html",
    description: "Elaborate public fountain clad in cut-enamel geometric zellige tiles, providing fresh water in historical medinas."
  },
  {
    id: 7,
    number: "7",
    name: "Fouqiyya",
    localName: "الفوقية",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/15. Fouqiyya_77.jpg",
    page: "class_pages/15.Fouqiyya.html",
    description: "Collarless lightweight inner tunic worn under the djellaba or gandora for festive and formal occasions."
  },
  {
    id: 8,
    number: "8",
    name: "Hassan 2",
    localName: "مسجد الحسن الثاني",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/02. Hassan 2_3.jpg",
    page: "class_pages/02.Hassan2.html",
    description: "Monumental Casablanca landmark with a 210m minaret overlooking the Atlantic, showcasing master zellige and carved wood."
  },
  {
    id: 9,
    number: "9",
    name: "Hassan Tower",
    localName: "صومعة حسان",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/03. Hassan Tower_5.jpg",
    page: "class_pages/03.Hassantower.html",
    description: "Historic 12th-century red sandstone minaret and pillar ruins standing above Rabat."
  },
  {
    id: 10,
    number: "10",
    name: "Ifnouzen",
    localName: "إفنووزن بالأعشاب",
    category: "food",
    categoryLabel: "Culinary Heritage",
    image: "images/13. Ifnouzen_48.jpg",
    page: "class_pages/13.Ifnouzen.html",
    description: "Authentic Amazigh rustic specialty prepared by steaming barley couscous with fresh wild mountain herbs."
  },
  {
    id: 11,
    number: "11",
    name: "Kasbah Door",
    localName: "باب القصبة الخشبي",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/17. Kasbah Door_112.jpg",
    page: "class_pages/17.Kasbahdoor.html",
    description: "Massive solid cedar door reinforced with wrought iron studs and carved with traditional Amazigh protective motifs."
  },
  {
    id: 12,
    number: "12",
    name: "Koutoubia",
    localName: "صومعة الكتبية",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/01. Koutoubia_1.jpg",
    page: "class_pages/01.Koutoubia.html",
    description: "Iconic 12th-century Almohad minaret and timeless architectural emblem of Marrakech."
  },
  {
    id: 13,
    number: "13",
    name: "Moorish Arc",
    localName: "القوس الأندلسي المغربي",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/16. Moorish Arc_18.jpg",
    page: "class_pages/16.Moorisharc.html",
    description: "Characteristic Moorish curved arch carved with intricate stucco arabesques and geometric muqarnas."
  },
  {
    id: 14,
    number: "14",
    name: "Tajine Food",
    localName: "طاجين المأكولات",
    category: "food",
    categoryLabel: "Culinary Heritage",
    image: "images/12. Tajine Food_95.jpg",
    page: "class_pages/12.Tajinefood.html",
    description: "Quintessential slow-cooked Moroccan stew prepared with poultry or lamb, seasonal vegetables, olives, and fragrant spices."
  },
  {
    id: 15,
    number: "15",
    name: "Tajine Pot",
    localName: "إناء الطاجين الطيني",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/19. Tajine Pot_69.jpg",
    page: "class_pages/19.Tajinepot.html",
    description: "Traditional earthenware pot with conical lid engineered to trap and circulate aromatic steam during slow cooking."
  },
  {
    id: 16,
    number: "16",
    name: "Zerbiyya",
    localName: "الزربية المغربية",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/21. Zerbiyya 1_29.jpg",
    page: "class_pages/21.Zerbiyya1.html",
    description: "Moroccan carpets photographed by the dataset author for the personal Zerbiyya image collection."
  }
];

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initSearchAndFilters();
  initModal();
  initCitationCopy();
  initCodeSnippetCopy();
  initNavScroll();
});

/**
 * Render the gallery grid
 */
function renderGallery() {
  const grid = document.getElementById('classes-grid');
  const countDisplay = document.getElementById('displayed-count');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = DATASET_CLASSES.filter(item => {
    // Category filter
    if (currentFilter !== 'all' && item.category !== currentFilter) {
      return false;
    }

    // Search query
    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchLocal = item.localName.toLowerCase().includes(q);
      const matchCategory = item.categoryLabel.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchNum = item.number.includes(q);
      return matchName || matchLocal || matchCategory || matchDesc || matchNum;
    }

    return true;
  });

  if (countDisplay) {
    countDisplay.textContent = `${filtered.length} class${filtered.length === 1 ? '' : 'es'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No classes found</h3>
        <p>No classes matched your query "${escapeHtml(currentSearch)}". Try resetting your filter or searching for another keyword like "Tajine", "Babouche", or "Mosque".</p>
        <button class="btn btn-sm btn-secondary" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'class-card';
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-category', item.category);

    card.innerHTML = `
      <div class="card-media" onclick="openModal(${item.id})">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" />
        <div class="card-badges">
          <span class="badge-num">#${item.number}</span>
        </div>
        <div class="card-overlay">
          <span class="view-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Quick View
          </span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-cat-tag ${item.category}">${item.categoryLabel}</div>
        <h3 class="card-title">${escapeHtml(item.name)}</h3>
        <div class="card-local-name">${escapeHtml(item.localName)}</div>
        <p class="card-desc">${escapeHtml(item.description)}</p>
        <div class="card-footer">
          <a href="${item.page}" class="card-link" title="Class sources & attributions">
            <span>Attributions</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/**
 * Initialize Gallery and render
 */
function initGallery() {
  renderGallery();
}

/**
 * Initialize Category pills and live search input
 */
function initSearchAndFilters() {
  const filterButtons = document.querySelectorAll('.filter-pill');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderGallery();
    });
  });

  const searchInput = document.getElementById('class-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = currentSearch ? 'flex' : 'none';
      }
      renderGallery();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        currentSearch = '';
        clearBtn.style.display = 'none';
        renderGallery();
        searchInput.focus();
      }
    });
  }
}

/**
 * Reset all filters helper
 */
window.resetFilters = function() {
  currentFilter = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('class-search-input');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.style.display = 'none';

  const filterButtons = document.querySelectorAll('.filter-pill');
  filterButtons.forEach(b => {
    if (b.getAttribute('data-filter') === 'all') b.classList.add('active');
    else b.classList.remove('active');
  });

  renderGallery();
};

/**
 * Modal Lightbox logic
 */
let currentModalId = null;

function initModal() {
  const modal = document.getElementById('class-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (modal && modal.classList.contains('open')) {
      if (e.key === 'ArrowRight') navigateModal(1);
      if (e.key === 'ArrowLeft') navigateModal(-1);
    }
  });

  const nextBtn = document.getElementById('modal-next-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  if (nextBtn) nextBtn.addEventListener('click', () => navigateModal(1));
  if (prevBtn) prevBtn.addEventListener('click', () => navigateModal(-1));
}

window.openModal = function(classId) {
  const item = DATASET_CLASSES.find(c => c.id === classId);
  if (!item) return;

  currentModalId = classId;
  const modal = document.getElementById('class-modal');
  if (!modal) return;

  document.getElementById('modal-img').src = item.image;
  document.getElementById('modal-img').alt = item.name;
  document.getElementById('modal-title').textContent = item.name;
  document.getElementById('modal-local').textContent = item.localName;
  document.getElementById('modal-num').textContent = `#${item.number}`;
  document.getElementById('modal-category').textContent = item.categoryLabel;
  document.getElementById('modal-category').className = `card-cat-tag ${item.category}`;
  document.getElementById('modal-desc').textContent = item.description;
  
  const pageLink = document.getElementById('modal-page-link');
  if (pageLink) {
    pageLink.href = item.page;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const modal = document.getElementById('class-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  currentModalId = null;
};

function navigateModal(direction) {
  if (currentModalId === null) return;
  // Get active list of classes
  const activeList = DATASET_CLASSES;
  const currentIndex = activeList.findIndex(c => c.id === currentModalId);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = activeList.length - 1;
  if (newIndex >= activeList.length) newIndex = 0;

  openModal(activeList[newIndex].id);
}

/**
 * 1-Click Copy Citation (BibTeX)
 */
function initCitationCopy() {
  const copyBtn = document.getElementById('copy-citation-btn');
  const citationTextEl = document.getElementById('bibtex-code');
  if (!copyBtn || !citationTextEl) return;

  copyBtn.addEventListener('click', () => {
    const text = citationTextEl.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Copied to Clipboard!</span>
      `;
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.remove('copied');
      }, 2400);
    }).catch(err => {
      console.error('Failed to copy citation:', err);
    });
  });
}

/**
 * 1-Click Copy Code snippet
 */
function initCodeSnippetCopy() {
  const copyCodeBtn = document.getElementById('copy-code-btn');
  const codeBlock = document.getElementById('usage-code');
  if (!copyCodeBtn || !codeBlock) return;

  copyCodeBtn.addEventListener('click', () => {
    const text = codeBlock.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const original = copyCodeBtn.innerHTML;
      copyCodeBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Copied!</span>
      `;
      setTimeout(() => {
        copyCodeBtn.innerHTML = original;
      }, 2000);
    });
  });

  // Code Tab switching (PyTorch vs HuggingFace vs Python)
  const tabButtons = document.querySelectorAll('.code-tab-btn');
  const codeSnippets = {
    pytorch: `# Load MORART-1K with PyTorch torchvision
import torchvision.datasets as datasets
import torchvision.transforms as transforms
from torch.utils.data import DataLoader

transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])

# Extracted dataset directory structured by class folders
dataset = datasets.ImageFolder(root='path/to/morart-1k/', transform=transform)
dataloader = DataLoader(dataset, batch_size=32, shuffle=True, num_workers=4)

print(f"Loaded {len(dataset)} images across {len(dataset.classes)} Moroccan classes.")`,
    zenodo: `# Download dataset directly via Zenodo API or curl
# Record DOI: 10.5281/zenodo.14869076

pip install zenodo_get
zenodo_get 10.5281/zenodo.14869076

# Or download via direct curl:
curl -L -O https://zenodo.org/records/14869076/files/MORART-1K.zip
unzip MORART-1K.zip -d ./morart-1k/`,
    python: `# Query classes and paths programmatically
import os
from pathlib import Path

DATASET_ROOT = Path("./morart-1k")
classes = sorted([d.name for d in DATASET_ROOT.iterdir() if d.is_dir()])

print(f"Total categories: {len(classes)}")
for idx, cls in enumerate(classes, 1):
    img_count = len(list((DATASET_ROOT / cls).glob("*.jpg")))
    print(f"[{idx:02d}] {cls}: {img_count} images")`
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      if (codeSnippets[tab] && codeBlock) {
        codeBlock.textContent = codeSnippets[tab];
      }
    });
  });
}

/**
 * Smooth scrolling for navigation anchors
 */
function initNavScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.remove('active');
      }
    });
  });

  // Mobile menu button
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

/**
 * HTML escaper helper
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
