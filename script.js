/**
 * MORART Dataset Portal - Interactive Logic
 * Supports class filtering, live search, 16 vs 26 class toggling,
 * modal lightbox image viewer, and 1-click citation copying.
 */

// Dataset Categories and Classes metadata
const DATASET_CLASSES = [
  {
    id: 1,
    number: "01",
    name: "Koutoubia Mosque",
    localName: "صومعة الكتبية",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/01. Koutoubia_1.jpg",
    page: "class_pages/01.Koutoubia.html",
    isCore1K: true,
    description: "Iconic 12th-century Almohad minaret and timeless architectural emblem of Marrakech."
  },
  {
    id: 2,
    number: "02",
    name: "Hassan II Mosque",
    localName: "مسجد الحسن الثاني",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/02. Hassan 2_3.jpg",
    page: "class_pages/02.Hassan2.html",
    isCore1K: true,
    description: "Monumental Casablanca landmark with a 210m minaret overlooking the Atlantic, showcasing master zellige and carved wood."
  },
  {
    id: 3,
    number: "03",
    name: "Hassan Tower",
    localName: "صومعة حسان",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/03. Hassan Tower_5.jpg",
    page: "class_pages/03.Hassantower.html",
    isCore1K: true,
    description: "Historic 12th-century red sandstone minaret and pillar ruins standing above Rabat."
  },
  {
    id: 4,
    number: "04",
    name: "Aït Benhaddou",
    localName: "قصر آيت بن حدو",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/04. Ait Ben Haddou_34.jpg",
    page: "class_pages/04.Aitbenhaddou.html",
    isCore1K: true,
    description: "UNESCO World Heritage fortified earthen ksar along the ancient trans-Saharan trade route in Ouarzazate."
  },
  {
    id: 5,
    number: "05",
    name: "Berrad (Moroccan Teapot)",
    localName: "البراد المغربي",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/05. Berrad_245.jpg",
    page: "class_pages/05.Berrad.html",
    isCore1K: true,
    description: "Handcrafted metal teapot with curved spout, central to the ceremonial pouring of Moroccan mint tea."
  },
  {
    id: 6,
    number: "06",
    name: "Tbourida (Fantasia)",
    localName: "التبوريدة / الفروسية",
    category: "culture",
    categoryLabel: "Cultural Heritage",
    image: "images/06. Tbourida_15.jpg",
    page: "class_pages/06.Tbourida.html",
    isCore1K: false,
    description: "UNESCO-inscribed traditional equestrian military pageant celebrating historical cavalry and baroud powder rifle synchronization."
  },
  {
    id: 7,
    number: "07",
    name: "Babouche (Men's Traditional)",
    localName: "بلغة رجالية فاسـية",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/07. Babouche M_54.jpg",
    page: "class_pages/07.BaboucheM.html",
    isCore1K: false,
    description: "Classic pointed yellow or white leather slippers meticulously crafted by master medina tanners."
  },
  {
    id: 8,
    number: "08",
    name: "Babouche (Women's Cherbil)",
    localName: "شربيل نسائي مطرز",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/08. Babouche F_13.jpg",
    page: "class_pages/08.BaboucheF.html",
    isCore1K: false,
    description: "Delicate women's velvet and leather slippers richly embroidered with gold and silver skalli threads."
  },
  {
    id: 9,
    number: "09",
    name: "Babouche Souss (Female)",
    localName: "إدوكان - بلغة سوسية نسائية",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/09. Babouche Souss F_52.jpg",
    page: "class_pages/09.BabouchesoussF.html",
    isCore1K: true,
    description: "Traditional Amazigh leather footwear from the Souss region embellished with vivid embroidered floral motifs."
  },
  {
    id: 10,
    number: "10",
    name: "Babouche Souss (Male)",
    localName: "إدوكان رجالي",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/10. Babouche Souss M_15.jpg",
    page: "class_pages/10.BabouchesoussM.html",
    isCore1K: false,
    description: "Durable handmade leather footwear with rugged rubber soles built for the rocky Anti-Atlas terrains."
  },
  {
    id: 11,
    number: "11",
    name: "Moroccan Couscous",
    localName: "الكسكس المغربي بالسبع خضار",
    category: "food",
    categoryLabel: "Culinary Heritage",
    image: "images/11. Couscous_68.jpg",
    page: "class_pages/11.Couscous.html",
    isCore1K: true,
    description: "UNESCO-recognized national dish of steamed semolina granules served with seven savory vegetables, tender meat, and broth."
  },
  {
    id: 12,
    number: "12",
    name: "Tajine Dish (Food)",
    localName: "طاجين المأكولات",
    category: "food",
    categoryLabel: "Culinary Heritage",
    image: "images/12. Tajine Food_95.jpg",
    page: "class_pages/12.Tajinefood.html",
    isCore1K: true,
    description: "Quintessential slow-cooked Moroccan stew prepared with poultry or lamb, seasonal vegetables, olives, and fragrant spices."
  },
  {
    id: 13,
    number: "13",
    name: "Ifnouzen (Berber Dish)",
    localName: "إفنووزن بالأعشاب",
    category: "food",
    categoryLabel: "Culinary Heritage",
    image: "images/13. Ifnouzen_48.jpg",
    page: "class_pages/13.Ifnouzen.html",
    isCore1K: true,
    description: "Authentic Amazigh rustic specialty prepared by steaming barley couscous with fresh wild mountain herbs."
  },
  {
    id: 14,
    number: "14",
    name: "Djellaba",
    localName: "الجلابة المغربية",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/14. Djellaba_59.jpg",
    page: "class_pages/14.Djellaba.html",
    isCore1K: true,
    description: "Long hooded Moroccan outer robe with deep sleeves and decorative sfifa trim, worn across all seasons."
  },
  {
    id: 15,
    number: "15",
    name: "Fouqiyya",
    localName: "الفوقية",
    category: "attire",
    categoryLabel: "Traditional Attire",
    image: "images/15. Fouqiyya_77.jpg",
    page: "class_pages/15.Fouqiyya.html",
    isCore1K: true,
    description: "Collarless lightweight inner tunic worn under the djellaba or gandora for festive and formal occasions."
  },
  {
    id: 16,
    number: "16",
    name: "Moorish Horseshoe Arch",
    localName: "القوس الأندلسي المغربي",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/16. Moorish Arc_18.jpg",
    page: "class_pages/16.Moorisharc.html",
    isCore1K: true,
    description: "Characteristic Moorish curved arch carved with intricate stucco arabesques and geometric muqarnas."
  },
  {
    id: 17,
    number: "17",
    name: "Kasbah Door",
    localName: "باب القصبة الخشبي",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/17. Kasbah Door_112.jpg",
    page: "class_pages/17.Kasbahdoor.html",
    isCore1K: true,
    description: "Massive solid cedar door reinforced with wrought iron studs and carved with traditional Amazigh protective motifs."
  },
  {
    id: 18,
    number: "18",
    name: "Zellige Wall Fountain",
    localName: "السقاية المغربية",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/18. Fountain_35.jpg",
    page: "class_pages/18.Fountain.html",
    isCore1K: true,
    description: "Elaborate public fountain clad in cut-enamel geometric zellige tiles, providing fresh water in historical medinas."
  },
  {
    id: 19,
    number: "19",
    name: "Tajine Pot (Clay Vessel)",
    localName: "إناء الطاجين الطيني",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/19. Tajine Pot_69.jpg",
    page: "class_pages/19.Tajinepot.html",
    isCore1K: true,
    description: "Traditional earthenware pot with conical lid engineered to trap and circulate aromatic steam during slow cooking."
  },
  {
    id: 20,
    number: "20",
    name: "Gueffa (Wicker Basket)",
    localName: "القفة التقليدية",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/20. Gueffa_89.jpg",
    page: "class_pages/20.Gueffa.html",
    isCore1K: false,
    description: "Handwoven basket woven from palm fronds (doum) used daily across Moroccan souks and farmers' markets."
  },
  {
    id: 21,
    number: "21",
    name: "Zerbiyya (Berber Carpet - Type 1)",
    localName: "الزربية الأمازيغية (نمط 1)",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/21. Zerbiyya 1_29.jpg",
    page: "class_pages/21.Zerbiyya1.html",
    isCore1K: true,
    description: "High-knot wool rug featuring ancestral diamond lozenges and natural sheep wool textures from Atlas tribes."
  },
  {
    id: 22,
    number: "22",
    name: "Zerbiyya (Berber Carpet - Type 2)",
    localName: "الزربية الأمازيغية (نمط 2)",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/22. Zerbiyya 2_95.jpg",
    page: "class_pages/22.Zerbiyya2.html",
    isCore1K: false,
    description: "Bold polychromatic handwoven rug dyed with saffron, indigo, and madder root."
  },
  {
    id: 23,
    number: "23",
    name: "Zerbiyya (Kilim / Hanbel)",
    localName: "الحنبل المغربي (نمط 3)",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/23. Zerbiyya 3_7.jpg",
    page: "class_pages/23.Zerbiyya3.html",
    isCore1K: false,
    description: "Flat-woven tapestry rug distinguished by clean geometric bands and fine wool weft techniques."
  },
  {
    id: 24,
    number: "24",
    name: "Ceramic Bowl (Fassi Pottery)",
    localName: "الزلافة الخزفية الفاسية",
    category: "crafts",
    categoryLabel: "Handicrafts & Decor",
    image: "images/24. Ceramic Bowl_54.jpg",
    page: "class_pages/24.Ceramicbowl.html",
    isCore1K: false,
    description: "Fine glazed ceramic bowl decorated with intricate Fez blue (Bleu de Fès) and geometric filigree."
  },
  {
    id: 25,
    number: "25",
    name: "Riad Courtyard",
    localName: "فناء الرياض المغربي",
    category: "architecture",
    categoryLabel: "Architecture & Heritage",
    image: "images/25. Riad_15.jpg",
    page: "class_pages/25.Riad.html",
    isCore1K: false,
    description: "Serene traditional courtyard home centered around an open sky atrium, fountain, and citrus flora."
  },
  {
    id: 26,
    number: "26",
    name: "Sintir / Guembri",
    localName: "الكمبري / السنتير الكناوي",
    category: "culture",
    categoryLabel: "Cultural Heritage",
    image: "images/26. Sintir_4.jpg",
    page: "class_pages/26.Sintir.html",
    isCore1K: false,
    description: "Resonant three-stringed bass lute with camel-neck soundbox, foundational to Gnawa ritual melodies."
  }
];

// Current filter state
let currentFilter = 'all';
let currentSearch = '';
let showAllClasses = false; // default to 16 Core MORART-1K classes

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initSearchAndFilters();
  initScopeToggle();
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
    // Check 16 core vs all 26
    if (!showAllClasses && !item.isCore1K) {
      return false;
    }

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
          ${item.isCore1K ? '<span class="badge-core">1K Core</span>' : '<span class="badge-extended">Extended</span>'}
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
 * Initialize 16 Core vs 26 All classes switch
 */
function initScopeToggle() {
  const toggleBtn = document.getElementById('scope-toggle-btn');
  const scopeLabel = document.getElementById('scope-label');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    showAllClasses = !showAllClasses;
    if (showAllClasses) {
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-pressed', 'true');
      if (scopeLabel) scopeLabel.innerHTML = 'Showing <strong>All 26 Classes</strong> (Full Collection)';
    } else {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-pressed', 'false');
      if (scopeLabel) scopeLabel.innerHTML = 'Showing <strong>16 Core Classes</strong> (MORART-1K Benchmark)';
    }
    renderGallery();
  });
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
  const activeList = DATASET_CLASSES.filter(item => showAllClasses || item.isCore1K);
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
