// Urban Company Replica - Core Logic & Gig Worker Booking System

// Comprehensive Database of Verified Gig Workers mapped by Category & Service
const gigWorkersDB = {
  cleaning: [
    {
      id: 'w_clean_1',
      name: 'Rajesh Kumar',
      role: 'Master Cleaning Expert',
      rating: '4.94',
      jobs: '2,850+ jobs',
      experience: '6 Yrs Exp',
      eta: '⚡ Arrives in 20 mins (2.1 km)',
      rate: '₹998',
      phone: '+919876543210',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      skills: ['Specialized Power Scrubber', 'Anti-Bacterial Sanitize', 'Hard Water Stain Pro'],
      badge: 'Top Rated Pro'
    },
    {
      id: 'w_clean_2',
      name: 'Suresh Patil',
      role: 'Deep Cleaning Specialist',
      rating: '4.88',
      jobs: '1,420+ jobs',
      experience: '4 Yrs Exp',
      eta: '⚡ Arrives in 35 mins (3.8 km)',
      rate: '₹899',
      phone: '+919823456789',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      skills: ['Full Home Sanitization', 'Sofa Shampooing', 'Eco-safe Solutions'],
      badge: 'Fast Arrival'
    },
    {
      id: 'w_clean_3',
      name: 'Manish Verma',
      role: 'Kitchen & Bath Specialist',
      rating: '4.91',
      jobs: '1,890+ jobs',
      experience: '5 Yrs Exp',
      eta: '⚡ Arrives in 45 mins (4.5 km)',
      rate: '₹799',
      phone: '+919811233445',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
      skills: ['Rotary Scrubber Equipped', 'Grout Cleaning', 'Mess-Free Guarantee'],
      badge: 'Super Pro'
    }
  ],

  ac_repair: [
    {
      id: 'w_ac_1',
      name: 'Amit Sharma',
      role: 'Certified HVAC & Foam-Jet Tech',
      rating: '4.96',
      jobs: '3,400+ jobs',
      experience: '7 Yrs Exp',
      eta: '⚡ Arrives in 15 mins (1.4 km)',
      rate: '₹799',
      phone: '+919811122334',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
      skills: ['High Pressure Foam-Jet', 'Gas Leakage Detection', 'Inverter AC Specialist'],
      badge: 'HVAC Master'
    },
    {
      id: 'w_ac_2',
      name: 'Vikram Singh',
      role: 'Appliance & PCB Specialist',
      rating: '4.89',
      jobs: '1,980+ jobs',
      experience: '5 Yrs Exp',
      eta: '⚡ Arrives in 30 mins (3.2 km)',
      rate: '₹299',
      phone: '+919845012345',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
      skills: ['PCB Board Diagnostic', 'Copper Coil Repair', 'Original Spare Parts'],
      badge: 'Super Pro'
    },
    {
      id: 'w_ac_3',
      name: 'Rohan Deshmukh',
      role: 'Split & Window AC Tech',
      rating: '4.92',
      jobs: '2,150+ jobs',
      experience: '6 Yrs Exp',
      eta: '⚡ Arrives in 40 mins (4.1 km)',
      rate: '₹799',
      phone: '+919866778899',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80',
      skills: ['Full 360 Deep Clean', 'Jet Wash Pro', 'Cooling Optimization'],
      badge: 'Top Rated'
    }
  ],

  salon_women: [
    {
      id: 'w_salon_w_1',
      name: 'Pooja Verma',
      role: 'Senior Beauty Therapist & Spa Pro',
      rating: '4.98',
      jobs: '4,120+ jobs',
      experience: '8 Yrs Exp',
      eta: '⚡ Arrives in 20 mins (1.8 km)',
      rate: '₹759',
      phone: '+919871133445',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      skills: ['RICA Wax Specialist', 'Organic Rose Pedicure', 'Hygiene Kit Sealed'],
      badge: 'Celebrity Stylist'
    },
    {
      id: 'w_salon_w_2',
      name: 'Megha Nair',
      role: 'Skin Aesthetics & Glow Expert',
      rating: '4.92',
      jobs: '2,300+ jobs',
      experience: '5 Yrs Exp',
      eta: '⚡ Arrives in 30 mins (3.0 km)',
      rate: '₹699',
      phone: '+919899044556',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
      skills: ['Power Glow Facial', 'Fruit Bleach & Detan', 'Disposable Towel Kit'],
      badge: 'Top Rated'
    },
    {
      id: 'w_salon_w_3',
      name: 'Kavita Joshi',
      role: 'Pedicure & Threading Specialist',
      rating: '4.89',
      jobs: '1,750+ jobs',
      experience: '4 Yrs Exp',
      eta: '⚡ Arrives in 45 mins (4.2 km)',
      rate: '₹749',
      phone: '+919822331122',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      skills: ['Crystal Rose Foot Soak', 'Roll-on Waxing', 'Anti-tan Cleanup'],
      badge: 'Super Pro'
    }
  ],

  salon_men: [
    {
      id: 'w_salon_m_1',
      name: 'Deepak Malhotra',
      role: 'Master Barber & Beard Stylist',
      rating: '4.95',
      jobs: '3,100+ jobs',
      experience: '7 Yrs Exp',
      eta: '⚡ Arrives in 20 mins (2.2 km)',
      rate: '₹499',
      phone: '+919833355667',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
      skills: ['Fade & Scissor Cut', 'Beard Shaping & Oil Massage', 'Sterilized Trimmer Kit'],
      badge: 'Master Groomer'
    },
    {
      id: 'w_salon_m_2',
      name: 'Arjun Sen',
      role: 'Men Salon & Relaxing Massage Pro',
      rating: '4.90',
      jobs: '1,680+ jobs',
      experience: '4 Yrs Exp',
      eta: '⚡ Arrives in 35 mins (3.5 km)',
      rate: '₹599',
      phone: '+919855566778',
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300&auto=format&fit=crop&q=80',
      skills: ['Hair Coloring', 'Face Detan Glow', 'Disposable Capes'],
      badge: 'Top Rated'
    }
  ],

  painting: [
    {
      id: 'w_paint_1',
      name: 'Manoj Das',
      role: 'Asian Paints Certified Master Painter',
      rating: '4.91',
      jobs: '2,200+ jobs',
      experience: '9 Yrs Exp',
      eta: '⚡ Arrives in 30 mins (3.4 km)',
      rate: '₹3,499',
      phone: '+919822266778',
      avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=300&auto=format&fit=crop&q=80',
      skills: ['Laser Wall Measurement', 'Waterproof Damp Seal', 'Dust-Free Sanding Machine'],
      badge: 'Certified Pro'
    }
  ],

  repair: [
    {
      id: 'w_repair_1',
      name: 'Ramesh Yadav',
      role: 'Licensed Master Electrician & Plumber',
      rating: '4.97',
      jobs: '4,600+ jobs',
      experience: '10 Yrs Exp',
      eta: '⚡ Arrives in 15 mins (1.2 km)',
      rate: '₹249',
      phone: '+919810077889',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80',
      skills: ['Short Circuit & Wiring', 'Tap & Pipe Leak Fix', 'Heavy Appliance Wiring'],
      badge: 'Master Electrician'
    },
    {
      id: 'w_repair_2',
      name: 'Sunil Gavaskar',
      role: 'Senior Carpenter & Hardware Pro',
      rating: '4.88',
      jobs: '1,950+ jobs',
      experience: '6 Yrs Exp',
      eta: '⚡ Arrives in 35 mins (3.6 km)',
      rate: '₹299',
      phone: '+919877788990',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&auto=format&fit=crop&q=80',
      skills: ['Door Lock & Handle Fit', 'Furniture Repair', 'Drill & Wall Mount'],
      badge: 'Verified Pro'
    }
  ],

  native_purifier: [
    {
      id: 'w_native_1',
      name: 'Karthik Rao',
      role: 'Native Certified Device Engineer',
      rating: '4.98',
      jobs: '2,450+ installations',
      experience: '5 Yrs Exp',
      eta: '⚡ Arrives in 25 mins (2.4 km)',
      rate: '₹13,999',
      phone: '+919844488990',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      skills: ['Native M3 Pro Certified', 'Water TDS Calibration', 'Official 2-Yr Warranty Card'],
      badge: 'Native Specialist'
    }
  ],

  native_locks: [
    {
      id: 'w_native_lock_1',
      name: 'Gaurav Jain',
      role: 'Smart Lock Security Engineer',
      rating: '4.95',
      jobs: '1,820+ setups',
      experience: '6 Yrs Exp',
      eta: '⚡ Arrives in 30 mins (3.1 km)',
      rate: '₹9,499',
      phone: '+919833322110',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      skills: ['Digital Lock Setup', 'Mobile App Pairing', 'Door Mortise Fitting'],
      badge: 'Security Master'
    }
  ]
};

// Current active context
let currentSelectedWorker = null;
let currentServiceName = '';
let callTimerInterval = null;
let callDurationSeconds = 0;

// Dynamic Search Placeholder Rotation
const searchPlaceholders = [
  "Search for ‘Kitchen cleaning’",
  "Search for ‘AC service’",
  "Search for ‘Salon for women’",
  "Search for ‘Electrician’",
  "Search for ‘Native Water Purifier’",
  "Search for ‘Full Home cleaning’"
];

let placeholderIdx = 0;
const dynamicPlaceholderEl = document.getElementById('dynamicPlaceholder');

function rotateSearchPlaceholder() {
  if (!dynamicPlaceholderEl) return;
  dynamicPlaceholderEl.style.opacity = '0';
  dynamicPlaceholderEl.style.transform = 'translateY(-6px)';
  
  setTimeout(() => {
    placeholderIdx = (placeholderIdx + 1) % searchPlaceholders.length;
    dynamicPlaceholderEl.textContent = searchPlaceholders[placeholderIdx];
    dynamicPlaceholderEl.style.opacity = '1';
    dynamicPlaceholderEl.style.transform = 'translateY(0)';
  }, 300);
}
setInterval(rotateSearchPlaceholder, 3000);

// Carousel Syncing
const spotlightTrack = document.getElementById('spotlightTrack');
const spotlightDots = document.getElementById('spotlightDots');

if (spotlightTrack && spotlightDots) {
  spotlightTrack.addEventListener('scroll', () => {
    const scrollLeft = spotlightTrack.scrollLeft;
    const itemWidth = spotlightTrack.clientWidth;
    const activeIndex = Math.round(scrollLeft / itemWidth);
    
    Array.from(spotlightDots.children).forEach((dot, idx) => {
      if (idx === activeIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  });
}

const reviewsTrack = document.getElementById('reviewsTrack');
if (reviewsTrack) {
  const dotsContainer = reviewsTrack.nextElementSibling;
  if (dotsContainer) {
    reviewsTrack.addEventListener('scroll', () => {
      const scrollLeft = reviewsTrack.scrollLeft;
      const itemWidth = reviewsTrack.clientWidth;
      const activeIndex = Math.round(scrollLeft / itemWidth);
      
      Array.from(dotsContainer.children).forEach((dot, idx) => {
        if (idx === activeIndex) dot.classList.add('active');
        else dot.classList.remove('active');
      });
    });
  }
}

// Open Gig Workers Sheet for Any Category / Service
function openGigWorkersForCategory(categoryKey, categoryName) {
  currentServiceName = categoryName;
  const workers = gigWorkersDB[categoryKey] || gigWorkersDB['cleaning'];
  renderGigWorkersList(categoryName, workers);
}

function openGigWorkersForService(categoryKey, serviceName, price) {
  currentServiceName = serviceName;
  const workers = gigWorkersDB[categoryKey] || gigWorkersDB['cleaning'];
  renderGigWorkersList(serviceName, workers, price);
}

function renderGigWorkersList(serviceName, workers, customPrice = null) {
  const titleEl = document.getElementById('workersModalServiceName');
  const proCountText = document.getElementById('proCountText');
  const container = document.getElementById('workersListContainer');

  if (titleEl) titleEl.textContent = serviceName;
  if (proCountText) proCountText.textContent = `${workers.length} Verified Workers Near You`;

  if (container) {
    container.innerHTML = workers.map(worker => {
      const displayPrice = customPrice || worker.rate;
      return `
        <div class="worker-card">
          <div class="worker-main-row">
            <div class="worker-avatar-box">
              <img src="${worker.avatar}" alt="${worker.name}">
              <span class="worker-online-badge"></span>
            </div>
            
            <div class="worker-info-col">
              <div class="worker-name-row">
                <span class="worker-name">${worker.name}</span>
                <span class="worker-badge-verified">${worker.badge}</span>
              </div>
              
              <div class="worker-rating-row">
                <span class="worker-stars-pill">★ ${worker.rating}</span>
                <span class="worker-jobs-count">• ${worker.jobs}</span>
                <span class="worker-jobs-count">• ${worker.experience}</span>
              </div>

              <div class="worker-eta-tag">
                ${worker.eta}
              </div>
            </div>
          </div>

          <!-- Skill tags -->
          <div class="worker-skills-chips">
            ${worker.skills.map(s => `<span class="skill-chip">✓ ${s}</span>`).join('')}
          </div>

          <!-- Direct Call & Instant Booking Actions -->
          <div class="worker-actions-row">
            <button class="btn-worker-call" onclick="startDirectCall('${worker.id}')">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Direct Call
            </button>
            
            <button class="btn-worker-book" onclick="openWorkerBookingModal('${worker.id}', '${displayPrice}')">
              Book Worker (${displayPrice})
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  openModal('gigWorkersModal');
}

function closeWorkersModal() {
  closeModal('gigWorkersModal');
}

// Find worker by ID across all categories
function findWorkerById(workerId) {
  for (const cat in gigWorkersDB) {
    const found = gigWorkersDB[cat].find(w => w.id === workerId);
    if (found) return found;
  }
  return gigWorkersDB['cleaning'][0];
}

// ============================================================
// DIRECT CALLING SYSTEM
// ============================================================
function startDirectCall(workerId) {
  const worker = findWorkerById(workerId);
  currentSelectedWorker = worker;

  document.getElementById('callWorkerAvatar').src = worker.avatar;
  document.getElementById('callWorkerName').textContent = worker.name;
  document.getElementById('callWorkerRole').textContent = `${worker.role} (${worker.rating} ★)`;
  
  const statusEl = document.getElementById('callStatusText');
  const timerEl = document.getElementById('callTimer');
  const telLink = document.getElementById('callTelLink');

  if (telLink) telLink.href = `tel:${worker.phone}`;

  statusEl.textContent = 'Connecting direct call...';
  statusEl.style.color = '#34d399';
  timerEl.textContent = 'Ringing...';

  openModal('callModal');

  // Simulate call connected after 2 seconds
  callDurationSeconds = 0;
  clearInterval(callTimerInterval);
  
  setTimeout(() => {
    statusEl.textContent = '● In Call (Secure Line)';
    statusEl.style.color = '#10b981';
    
    callTimerInterval = setInterval(() => {
      callDurationSeconds++;
      const mins = String(Math.floor(callDurationSeconds / 60)).padStart(2, '0');
      const secs = String(callDurationSeconds % 60).padStart(2, '0');
      timerEl.textContent = `${mins}:${secs}`;
    }, 1000);
  }, 1800);
}

function toggleMute(btn) {
  btn.classList.toggle('muted');
  if (btn.classList.contains('muted')) {
    showToast('Microphone Muted');
  } else {
    showToast('Microphone Unmuted');
  }
}

function endCall() {
  clearInterval(callTimerInterval);
  const statusEl = document.getElementById('callStatusText');
  if (statusEl) statusEl.textContent = 'Call Ended';
  
  setTimeout(() => {
    closeModal('callModal');
    showToast(`Call with ${currentSelectedWorker?.name || 'Worker'} completed.`);
  }, 400);
}

// ============================================================
// DIRECT BOOKING MODAL
// ============================================================
function openWorkerBookingModal(workerId, price) {
  const worker = findWorkerById(workerId);
  currentSelectedWorker = worker;

  const summaryEl = document.getElementById('bookingWorkerSummary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <img src="${worker.avatar}" alt="${worker.name}">
      <div>
        <h4 style="font-size:14px; font-weight:800; color:#111827;">${worker.name}</h4>
        <p style="font-size:12px; color:#475569;">${currentServiceName || worker.role}</p>
        <div style="font-size:13px; font-weight:700; color:#7c3aed; margin-top:2px;">Service Rate: ${price}</div>
      </div>
    `;
  }

  openModal('bookWorkerModal');
}

function closeBookWorkerModal() {
  closeModal('bookWorkerModal');
}

function selectSlot(btn) {
  document.querySelectorAll('.slot-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
}

function confirmWorkerBooking() {
  closeBookWorkerModal();
  closeWorkersModal();

  const worker = currentSelectedWorker || gigWorkersDB['cleaning'][0];
  const successWorkerDetail = document.getElementById('successWorkerDetail');
  const successArrivalTime = document.getElementById('successArrivalTime');

  if (successWorkerDetail) {
    successWorkerDetail.textContent = `${worker.name} (${worker.role}) is confirmed for your booking.`;
  }
  if (successArrivalTime) {
    successArrivalTime.textContent = worker.eta;
  }

  openModal('bookingSuccessModal');
  showToast(`🎉 ${worker.name} is on the way!`);
}

function closeSuccessModal() {
  closeModal('bookingSuccessModal');
}

// ============================================================
// MODAL GENERAL HELPERS
// ============================================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

// Search Modal Handlers
const searchTrigger = document.getElementById('searchTrigger');
const searchInputField = document.getElementById('searchInputField');
const searchResults = document.getElementById('searchResults');

if (searchTrigger) {
  searchTrigger.addEventListener('click', () => {
    openModal('searchModal');
    if (searchInputField) searchInputField.focus();
  });
}

function closeSearchModal() {
  closeModal('searchModal');
}

if (searchInputField) {
  searchInputField.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    renderSearchResults(query);
  });
}

function searchKeyword(keyword) {
  if (searchInputField) {
    searchInputField.value = keyword;
    renderSearchResults(keyword.toLowerCase());
  }
}

function renderSearchResults(query) {
  if (!searchResults) return;
  if (!query) {
    searchResults.innerHTML = '';
    return;
  }

  let matches = [];
  for (const cat in gigWorkersDB) {
    gigWorkersDB[cat].forEach(w => {
      if (w.name.toLowerCase().includes(query) || 
          w.role.toLowerCase().includes(query) || 
          w.skills.some(s => s.toLowerCase().includes(query))) {
        matches.push({ worker: w, cat });
      }
    });
  }

  if (matches.length === 0) {
    searchResults.innerHTML = `<p style="font-size:13px; color:#64748b; padding:12px;">No matching workers found for "${query}"</p>`;
    return;
  }

  searchResults.innerHTML = matches.map(({ worker, cat }) => `
    <div class="cart-item-row" style="cursor:pointer; padding:8px 0; border-bottom:1px solid #f1f5f9;" onclick="closeSearchModal(); openGigWorkersForCategory('${cat}', '${worker.role}')">
      <div style="display:flex; gap:10px; align-items:center;">
        <img src="${worker.avatar}" style="width:40px; height:40px; border-radius:8px; object-fit:cover;">
        <div>
          <strong style="font-size:13px; color:#111827;">${worker.name}</strong>
          <p style="font-size:11.5px; color:#64748b;">${worker.role} • ★ ${worker.rating}</p>
        </div>
      </div>
      <button class="banner-btn" style="background:#7c3aed; padding:4px 10px; font-size:11px;">View Pro</button>
    </div>
  `).join('');
}

// Location Modal Handlers
const locationBarBtn = document.getElementById('locationBarBtn');
if (locationBarBtn) {
  locationBarBtn.addEventListener('click', () => {
    openModal('locationModal');
  });
}

function closeLocationModal() {
  closeModal('locationModal');
}

function setLocation(city, address) {
  const cityEl = document.getElementById('currentCity');
  const addressEl = document.getElementById('currentAddress');
  const bookingAddress = document.getElementById('bookingAddress');

  if (cityEl) cityEl.textContent = city;
  if (addressEl) addressEl.textContent = address;
  if (bookingAddress) bookingAddress.textContent = `${city}, ${address}`;
  
  document.querySelectorAll('.location-item').forEach(item => {
    if (item.innerText.includes(city)) item.classList.add('active');
    else item.classList.remove('active');
  });

  closeLocationModal();
  showToast(`Location updated to ${city}`);
}

// Bottom Nav Selection
function selectNavTab(btn, tabName) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');

  if (tabName === 'help') {
    showToast('24x7 UC Support Center is Online');
  } else if (tabName === 'native') {
    openGigWorkersForService('native_purifier', 'Native Smart Purifiers', '₹13,999');
  } else if (tabName === 'account') {
    showToast('Viewing Your Profile & Past Bookings');
  }
}

// Toast Notifications
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.add('show');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
