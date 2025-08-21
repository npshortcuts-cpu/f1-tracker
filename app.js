// Enhanced F1 Tracker PWA with Interactive Features
// Application Data
const appData = {
  "currentStandings": {
    "drivers": [
      {"position": 1, "driver": "Oscar Piastri", "team": "McLaren", "points": 284, "nationality": "Australia", "wins": 6, "podiums": 12, "flag": "🇦🇺", "teamColor": "#FF8000"},
      {"position": 2, "driver": "Lando Norris", "team": "McLaren", "points": 275, "nationality": "United Kingdom", "wins": 5, "podiums": 12, "flag": "🇬🇧", "teamColor": "#FF8000"},
      {"position": 3, "driver": "Max Verstappen", "team": "Red Bull", "points": 187, "nationality": "Netherlands", "wins": 2, "podiums": 6, "flag": "🇳🇱", "teamColor": "#0600EF"},
      {"position": 4, "driver": "George Russell", "team": "Mercedes", "points": 172, "nationality": "United Kingdom", "wins": 1, "podiums": 5, "flag": "🇬🇧", "teamColor": "#00D2BE"},
      {"position": 5, "driver": "Charles Leclerc", "team": "Ferrari", "points": 151, "nationality": "Monaco", "wins": 0, "podiums": 4, "flag": "🇲🇨", "teamColor": "#DC0000"},
      {"position": 6, "driver": "Lewis Hamilton", "team": "Ferrari", "points": 109, "nationality": "United Kingdom", "wins": 0, "podiums": 2, "flag": "🇬🇧", "teamColor": "#DC0000"},
      {"position": 7, "driver": "Kimi Antonelli", "team": "Mercedes", "points": 64, "nationality": "Italy", "wins": 0, "podiums": 1, "flag": "🇮🇹", "teamColor": "#00D2BE"},
      {"position": 8, "driver": "Alex Albon", "team": "Williams", "points": 54, "nationality": "Thailand", "wins": 0, "podiums": 0, "flag": "🇹🇭", "teamColor": "#005AFF"},
      {"position": 9, "driver": "Nico Hulkenberg", "team": "Sauber", "points": 37, "nationality": "Germany", "wins": 0, "podiums": 1, "flag": "🇩🇪", "teamColor": "#52E252"},
      {"position": 10, "driver": "Esteban Ocon", "team": "Haas", "points": 27, "nationality": "France", "wins": 0, "podiums": 0, "flag": "🇫🇷", "teamColor": "#FFFFFF"}
    ],
    "constructors": [
      {"position": 1, "team": "McLaren", "points": 559, "drivers": ["Oscar Piastri", "Lando Norris"], "color": "#FF8000", "logo": "🏎️"},
      {"position": 2, "team": "Ferrari", "points": 260, "drivers": ["Charles Leclerc", "Lewis Hamilton"], "color": "#DC0000", "logo": "🐎"},
      {"position": 3, "team": "Mercedes", "points": 236, "drivers": ["George Russell", "Kimi Antonelli"], "color": "#00D2BE", "logo": "⭐"},
      {"position": 4, "team": "Red Bull", "points": 194, "drivers": ["Max Verstappen", "Yuki Tsunoda"], "color": "#0600EF", "logo": "🐂"},
      {"position": 5, "team": "Williams", "points": 70, "drivers": ["Carlos Sainz", "Alex Albon"], "color": "#005AFF", "logo": "🏁"}
    ]
  },
  "nextRace": {
    "name": "Dutch Grand Prix",
    "location": "Zandvoort, Netherlands",
    "date": "2025-08-31",
    "weekend": "August 29-31, 2025",
    "circuit": "Circuit Park Zandvoort",
    "daysUntil": 10,
    "weather": "Partly Cloudy, 22°C",
    "sessions": [
      {"name": "Practice 1", "date": "2025-08-29", "time": "13:30"},
      {"name": "Practice 2", "date": "2025-08-29", "time": "17:00"},
      {"name": "Practice 3", "date": "2025-08-30", "time": "12:30"},
      {"name": "Qualifying", "date": "2025-08-30", "time": "16:00"},
      {"name": "Race", "date": "2025-08-31", "time": "15:00"}
    ]
  },
  "raceCalendar": [
    {"round": 1, "name": "Australian Grand Prix", "location": "Melbourne", "date": "2025-03-16", "winner": "Lando Norris", "completed": true, "weather": "Sunny", "circuit": "Albert Park"},
    {"round": 2, "name": "Chinese Grand Prix", "location": "Shanghai", "date": "2025-03-23", "winner": "Oscar Piastri", "completed": true, "sprint": true, "weather": "Overcast", "circuit": "Shanghai International"},
    {"round": 3, "name": "Japanese Grand Prix", "location": "Suzuka", "date": "2025-04-06", "winner": "Max Verstappen", "completed": true, "weather": "Rainy", "circuit": "Suzuka Circuit"},
    {"round": 4, "name": "Bahrain Grand Prix", "location": "Sakhir", "date": "2025-04-13", "winner": "Oscar Piastri", "completed": true, "weather": "Clear", "circuit": "Bahrain International"},
    {"round": 5, "name": "Saudi Arabian Grand Prix", "location": "Jeddah", "date": "2025-04-20", "winner": "Oscar Piastri", "completed": true, "weather": "Hot", "circuit": "Jeddah Corniche"},
    {"round": 6, "name": "Miami Grand Prix", "location": "Miami", "date": "2025-05-05", "winner": "Oscar Piastri", "completed": true, "sprint": true, "weather": "Humid", "circuit": "Miami International"},
    {"round": 7, "name": "Emilia Romagna Grand Prix", "location": "Imola", "date": "2025-05-18", "winner": "Max Verstappen", "completed": true, "weather": "Cool", "circuit": "Autodromo Enzo e Dino Ferrari"},
    {"round": 8, "name": "Monaco Grand Prix", "location": "Monaco", "date": "2025-05-25", "winner": "Lando Norris", "completed": true, "weather": "Perfect", "circuit": "Circuit de Monaco"},
    {"round": 9, "name": "Spanish Grand Prix", "location": "Barcelona", "date": "2025-06-01", "winner": "Oscar Piastri", "completed": true, "weather": "Warm", "circuit": "Circuit de Barcelona-Catalunya"},
    {"round": 10, "name": "Canadian Grand Prix", "location": "Montreal", "date": "2025-06-15", "winner": "George Russell", "completed": true, "weather": "Variable", "circuit": "Circuit Gilles Villeneuve"},
    {"round": 11, "name": "Austrian Grand Prix", "location": "Spielberg", "date": "2025-06-29", "winner": "Lando Norris", "completed": true, "weather": "Mountain Fresh", "circuit": "Red Bull Ring"},
    {"round": 12, "name": "British Grand Prix", "location": "Silverstone", "date": "2025-07-06", "winner": "Lando Norris", "completed": true, "weather": "Typical British", "circuit": "Silverstone Circuit"},
    {"round": 13, "name": "Belgian Grand Prix", "location": "Spa", "date": "2025-07-27", "winner": "Oscar Piastri", "completed": true, "sprint": true, "weather": "Mixed", "circuit": "Circuit de Spa-Francorchamps"},
    {"round": 14, "name": "Hungarian Grand Prix", "location": "Budapest", "date": "2025-08-03", "winner": "Lando Norris", "completed": true, "weather": "Hot", "circuit": "Hungaroring"},
    {"round": 15, "name": "Dutch Grand Prix", "location": "Zandvoort", "date": "2025-08-31", "completed": false, "weather": "Coastal", "circuit": "Circuit Park Zandvoort"},
    {"round": 16, "name": "Italian Grand Prix", "location": "Monza", "date": "2025-09-07", "completed": false, "weather": "Tifosi Weather", "circuit": "Autodromo Nazionale Monza"},
    {"round": 17, "name": "Azerbaijan Grand Prix", "location": "Baku", "date": "2025-09-21", "completed": false, "weather": "Windy", "circuit": "Baku City Circuit"},
    {"round": 18, "name": "Singapore Grand Prix", "location": "Singapore", "date": "2025-10-05", "completed": false, "weather": "Night Heat", "circuit": "Marina Bay Street Circuit"},
    {"round": 19, "name": "United States Grand Prix", "location": "Austin", "date": "2025-10-19", "completed": false, "sprint": true, "weather": "Texas Heat", "circuit": "Circuit of the Americas"},
    {"round": 20, "name": "Mexico City Grand Prix", "location": "Mexico City", "date": "2025-10-26", "completed": false, "weather": "High Altitude", "circuit": "Autodromo Hermanos Rodriguez"},
    {"round": 21, "name": "São Paulo Grand Prix", "location": "São Paulo", "date": "2025-11-09", "completed": false, "sprint": true, "weather": "Tropical", "circuit": "Interlagos"},
    {"round": 22, "name": "Las Vegas Grand Prix", "location": "Las Vegas", "date": "2025-11-22", "completed": false, "weather": "Desert Night", "circuit": "Las Vegas Strip Circuit"},
    {"round": 23, "name": "Qatar Grand Prix", "location": "Lusail", "date": "2025-11-30", "completed": false, "sprint": true, "weather": "Desert Heat", "circuit": "Lusail International Circuit"},
    {"round": 24, "name": "Abu Dhabi Grand Prix", "location": "Abu Dhabi", "date": "2025-12-07", "completed": false, "weather": "Desert Sunset", "circuit": "Yas Marina Circuit"}
  ],
  "latestNews": [
    {"id": 1, "headline": "Piastri extends championship lead with dominant Hungarian GP victory", "source": "Formula1.com", "date": "2025-08-04", "category": "Race Results", "image": "🏆", "summary": "Oscar Piastri showcased his championship credentials with a commanding win at the Hungarian Grand Prix, extending his lead over teammate Lando Norris to 9 points."},
    {"id": 2, "headline": "McLaren's 1-2 dominance continues as title fight intensifies", "source": "Sky Sports", "date": "2025-08-04", "category": "Championship", "image": "🥇", "summary": "McLaren secured another 1-2 finish in Hungary, with the team now holding a commanding lead in both championships as the intra-team battle heats up."},
    {"id": 3, "headline": "Verstappen's championship hopes fade as Red Bull struggles persist", "source": "Motorsport.com", "date": "2025-08-03", "category": "Team News", "image": "🔴", "summary": "Max Verstappen admits his championship chances are over after another difficult weekend, as Red Bull's performance deficit to McLaren becomes increasingly apparent."},
    {"id": 4, "headline": "F1 summer break: Teams regroup for championship finale", "source": "Autosport", "date": "2025-08-05", "category": "Season", "image": "🏖️", "summary": "As F1 enters its mandatory summer shutdown, teams and drivers take time to recharge before the final 10-race sprint to decide both world championships."},
    {"id": 5, "headline": "Hamilton struggles continue at Ferrari amid team's championship bid", "source": "BBC Sport", "date": "2025-08-04", "category": "Driver News", "image": "🐎", "summary": "Lewis Hamilton's adaptation to Ferrari continues to prove challenging as the seven-time champion finds himself overshadowed by teammate Charles Leclerc."},
    {"id": 6, "headline": "Zandvoort prepares for Dutch GP return after summer break", "source": "Racing News 365", "date": "2025-08-18", "category": "Upcoming", "image": "🇳🇱", "summary": "Circuit Park Zandvoort is ready to welcome F1 back after the summer break, with Max Verstappen hoping for home support to reignite his championship campaign."}
  ],
  "newsSources": [
    {"name": "Formula1.com", "url": "https://www.formula1.com/en/latest", "description": "Official F1 news and updates", "type": "official"},
    {"name": "BBC Sport F1", "url": "https://www.bbc.com/sport/formula1", "description": "Comprehensive F1 coverage", "type": "news"},
    {"name": "Sky Sports F1", "url": "https://www.skysports.com/f1", "description": "Live coverage and analysis", "type": "broadcaster"},
    {"name": "Motorsport.com", "url": "https://www.motorsport.com/f1", "description": "In-depth technical coverage", "type": "specialist"},
    {"name": "Autosport", "url": "https://www.autosport.com/f1", "description": "Professional motorsport journalism", "type": "specialist"},
    {"name": "ESPN F1", "url": "https://www.espn.com/f1", "description": "American F1 coverage", "type": "news"},
    {"name": "Racing News 365", "url": "https://racingnews365.com", "description": "Daily F1 news and analysis", "type": "specialist"},
    {"name": "Planet F1", "url": "https://www.planetf1.com", "description": "Latest F1 news and rumors", "type": "news"}
  ]
};

// PWA and Application State
let deferredPrompt;
let currentPage = 'home';
let currentStandingsView = 'drivers';
let isOnline = navigator.onLine;
let countdownInterval;
let touchStartY = 0;
let isPulling = false;
let currentNewsFilter = 'all';
let currentCalendarFilter = 'all';
let swipeStartX = 0;
let isOfflineMode = false;

// Utility Functions
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function getCountryFlag(nationality) {
  const flags = {
    'Australia': '🇦🇺', 'United Kingdom': '🇬🇧', 'Netherlands': '🇳🇱',
    'Monaco': '🇲🇨', 'Italy': '🇮🇹', 'Thailand': '🇹🇭',
    'Germany': '🇩🇪', 'France': '🇫🇷'
  };
  return flags[nationality] || '🏁';
}

function getSourceIcon(type) {
  const icons = {
    'official': '🏎️', 'news': '📰', 'broadcaster': '📺', 'specialist': '🔧'
  };
  return icons[type] || '📰';
}

// Haptic Feedback
function hapticFeedback(type = 'light') {
  const hapticEnabled = localStorage.getItem('hapticFeedback') !== 'false';
  if (!hapticEnabled) return;
  
  if ('vibrate' in navigator) {
    const patterns = {
      light: [10],
      medium: [20],
      heavy: [30],
      success: [10, 50, 10],
      error: [50, 100, 50]
    };
    navigator.vibrate(patterns[type] || patterns.light);
  }
}

// Toast Notifications
function showToast(message, type = 'info', duration = 3000) {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 100);
  
  // Remove toast
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast);
      }
    }, 300);
  }, duration);
  
  hapticFeedback('light');
}

// Live Countdown Timer
function startLiveCountdown() {
  const targetDate = new Date('2025-08-31T15:00:00+02:00'); // Race time
  
  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDiff = targetDate.getTime() - now.getTime();
    
    if (timeDiff > 0) {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');
      
      if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
      if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
      if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
      if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    } else {
      clearInterval(countdownInterval);
      const countdownContainer = document.querySelector('.live-countdown');
      if (countdownContainer) {
        countdownContainer.innerHTML = '<div class="race-live">🏁 RACE WEEKEND!</div>';
      }
    }
  }, 1000);
}

// PWA Install Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallBanner();
});

function showInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (banner && !localStorage.getItem('installDismissed')) {
    banner.classList.remove('hidden');
  }
}

function hideInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (banner) {
    banner.classList.add('hidden');
  }
}

// Navigation Functions - FIXED
function showPage(pageId) {
  // Hide all pages
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => {
    page.style.display = 'none';
    page.classList.remove('active');
  });
  
  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
    setTimeout(() => targetPage.classList.add('active'), 10);
  }
  
  // Update navigation buttons
  const allNavItems = document.querySelectorAll('.nav-item');
  allNavItems.forEach(item => item.classList.remove('active'));
  
  const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }
  
  currentPage = pageId;
  hapticFeedback('light');
  
  // Save page state
  localStorage.setItem('lastPage', pageId);
}

// Pull to Refresh
function setupPullToRefresh() {
  let startY = 0;
  let pullDistance = 0;
  const threshold = 60;
  const pullIndicator = document.getElementById('pullToRefresh');
  
  document.addEventListener('touchstart', (e) => {
    if (window.scrollY === 0) {
      startY = e.touches[0].clientY;
    }
  }, { passive: true });
  
  document.addEventListener('touchmove', (e) => {
    if (window.scrollY === 0 && startY > 0) {
      pullDistance = e.touches[0].clientY - startY;
      
      if (pullDistance > 10 && pullDistance < threshold) {
        if (pullIndicator) pullIndicator.classList.remove('hidden');
        isPulling = true;
      } else if (pullDistance >= threshold) {
        if (pullIndicator) pullIndicator.querySelector('p').textContent = 'Release to refresh';
      }
    }
  }, { passive: true });
  
  document.addEventListener('touchend', () => {
    if (isPulling && pullDistance >= threshold) {
      refreshData();
    }
    
    if (pullIndicator) {
      pullIndicator.classList.add('hidden');
      pullIndicator.querySelector('p').textContent = 'Pull to refresh';
    }
    isPulling = false;
    pullDistance = 0;
    startY = 0;
  }, { passive: true });
}

// Data Refresh
function refreshData() {
  showToast('Refreshing data...', 'info');
  hapticFeedback('medium');
  
  // Simulate data refresh
  setTimeout(() => {
    loadAllContent();
    showToast('Data refreshed successfully!', 'success');
  }, 1000);
}

// Swipe Navigation for Standings
function setupSwipeNavigation() {
  const standingsContainer = document.getElementById('standingsSwipeContainer');
  if (!standingsContainer) return;
  
  let startX = 0;
  let startTime = 0;
  
  standingsContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startTime = Date.now();
  }, { passive: true });
  
  standingsContainer.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endTime = Date.now();
    const distance = Math.abs(endX - startX);
    const duration = endTime - startTime;
    
    // Swipe detection
    if (distance > 50 && duration < 300) {
      if (endX > startX && currentStandingsView === 'constructors') {
        // Swipe right - go to drivers
        switchStandingsView('drivers');
      } else if (endX < startX && currentStandingsView === 'drivers') {
        // Swipe left - go to constructors
        switchStandingsView('constructors');
      }
    }
  }, { passive: true });
}

function switchStandingsView(view) {
  const driversBtn = document.querySelector('[data-type="drivers"]');
  const constructorsBtn = document.querySelector('[data-type="constructors"]');
  const driversContainer = document.getElementById('driversStandings');
  const constructorsContainer = document.getElementById('constructorsStandings');
  
  if (view === 'drivers') {
    if (driversBtn) driversBtn.classList.add('active');
    if (constructorsBtn) constructorsBtn.classList.remove('active');
    if (driversContainer) driversContainer.classList.add('active');
    if (constructorsContainer) constructorsContainer.classList.remove('active');
    currentStandingsView = 'drivers';
  } else {
    if (constructorsBtn) constructorsBtn.classList.add('active');
    if (driversBtn) driversBtn.classList.remove('active');
    if (constructorsContainer) constructorsContainer.classList.add('active');
    if (driversContainer) driversContainer.classList.remove('active');
    currentStandingsView = 'constructors';
  }
  
  hapticFeedback('light');
}

// Search Functionality
function setupSearch() {
  const searchInput = document.getElementById('newsSearch');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filterNews(query);
  });
}

function filterNews(query = '') {
  const newsList = document.getElementById('latestNewsList');
  if (!newsList) return;
  
  let filteredNews = appData.latestNews;
  
  // Apply search filter
  if (query) {
    filteredNews = filteredNews.filter(news =>
      news.headline.toLowerCase().includes(query) ||
      news.source.toLowerCase().includes(query) ||
      news.category.toLowerCase().includes(query)
    );
  }
  
  // Apply category filter
  if (currentNewsFilter !== 'all') {
    filteredNews = filteredNews.filter(news =>
      news.category.toLowerCase().includes(currentNewsFilter.toLowerCase())
    );
  }
  
  // Update display
  newsList.innerHTML = filteredNews.map(news => `
    <div class="news-item" onclick="shareNews('${news.headline}', '${news.source}')" data-news-id="${news.id}">
      <div class="news-headline">${news.headline}</div>
      <div class="news-meta">
        <span class="news-source">${news.source}</span>
        <span class="news-date">${formatDate(news.date)}</span>
      </div>
      <span class="news-category">${news.category}</span>
    </div>
  `).join('');
  
  if (filteredNews.length === 0) {
    newsList.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-32);">No news found matching your criteria.</p>';
  }
}

// Share Functionality
function shareNews(headline, source) {
  const shareData = {
    title: 'F1 News',
    text: `${headline} - ${source}`,
    url: window.location.href
  };
  
  if (navigator.share) {
    navigator.share(shareData);
  } else {
    // Fallback - copy to clipboard
    navigator.clipboard.writeText(`${headline} - ${source} ${window.location.href}`)
      .then(() => showToast('News link copied to clipboard!', 'success'))
      .catch(() => showToast('Unable to share news', 'error'));
  }
  
  hapticFeedback('medium');
}

function shareStandings() {
  const shareText = `Current F1 Championship: 
1. ${appData.currentStandings.drivers[0].driver} - ${appData.currentStandings.drivers[0].points} pts
2. ${appData.currentStandings.drivers[1].driver} - ${appData.currentStandings.drivers[1].points} pts
3. ${appData.currentStandings.drivers[2].driver} - ${appData.currentStandings.drivers[2].points} pts`;
  
  if (navigator.share) {
    navigator.share({
      title: 'F1 Championship Standings',
      text: shareText,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(shareText)
      .then(() => showToast('Standings copied to clipboard!', 'success'))
      .catch(() => showToast('Unable to share standings', 'error'));
  }
  
  hapticFeedback('medium');
}

// Championship Prediction Calculator - FIXED
function setupPredictionCalculator() {
  const driver1Select = document.getElementById('driver1');
  const driver2Select = document.getElementById('driver2');
  const resultDiv = document.getElementById('predictionResult');
  
  if (!driver1Select || !driver2Select || !resultDiv) return;
  
  // Populate driver options
  const drivers = appData.currentStandings.drivers;
  const driverOptions = drivers.map(d => `<option value="${d.driver}">${d.driver}</option>`).join('');
  
  driver1Select.innerHTML = '<option value="">Select Driver 1</option>' + driverOptions;
  driver2Select.innerHTML = '<option value="">Select Driver 2</option>' + driverOptions;
  
  const calculatePrediction = () => {
    const d1 = driver1Select.value;
    const d2 = driver2Select.value;
    
    if (d1 && d2 && d1 !== d2) {
      const driver1Data = drivers.find(d => d.driver === d1);
      const driver2Data = drivers.find(d => d.driver === d2);
      
      const pointsDiff = driver1Data.points - driver2Data.points;
      const racesLeft = 10; // remaining races
      const maxPointsPerRace = 26; // win + fastest lap
      
      let prediction = '';
      if (Math.abs(pointsDiff) > racesLeft * maxPointsPerRace) {
        prediction = `<strong>${pointsDiff > 0 ? d1 : d2}</strong> has already secured the championship mathematically!`;
      } else {
        const pointsNeeded = Math.abs(pointsDiff) + 1;
        prediction = `<strong>${d1}</strong> leads by ${pointsDiff} points. ${pointsDiff < 0 ? d1 + ' needs ' + Math.abs(pointsDiff) + ' points to catch up.' : d2 + ' needs ' + pointsDiff + ' points to catch up.'}<br><br>With ${racesLeft} races remaining, both drivers still have a mathematical chance!`;
      }
      
      resultDiv.innerHTML = prediction;
      resultDiv.classList.add('active');
    } else {
      resultDiv.classList.remove('active');
    }
  };
  
  driver1Select.addEventListener('change', calculatePrediction);
  driver2Select.addEventListener('change', calculatePrediction);
}

// Driver Comparison Tool - FIXED
function setupDriverComparison() {
  const compare1 = document.getElementById('compareDriver1');
  const compare2 = document.getElementById('compareDriver2');
  const resultDiv = document.getElementById('comparisonResult');
  
  if (!compare1 || !compare2 || !resultDiv) return;
  
  const drivers = appData.currentStandings.drivers;
  const driverOptions = drivers.map(d => `<option value="${d.driver}">${d.driver}</option>`).join('');
  
  compare1.innerHTML = '<option value="">Select Driver</option>' + driverOptions;
  compare2.innerHTML = '<option value="">Select Driver</option>' + driverOptions;
  
  const compareDrivers = () => {
    const d1 = compare1.value;
    const d2 = compare2.value;
    
    if (d1 && d2 && d1 !== d2) {
      const driver1Data = drivers.find(d => d.driver === d1);
      const driver2Data = drivers.find(d => d.driver === d2);
      
      resultDiv.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: var(--space-16); text-align: center;">
          <div>
            <h4>${driver1Data.driver}</h4>
            <p><strong>${driver1Data.points}</strong> points</p>
            <p><strong>${driver1Data.wins}</strong> wins</p>
            <p><strong>${driver1Data.podiums}</strong> podiums</p>
            <p>Position: <strong>#${driver1Data.position}</strong></p>
          </div>
          <div style="display: flex; align-items: center; color: var(--color-primary); font-weight: bold;">VS</div>
          <div>
            <h4>${driver2Data.driver}</h4>
            <p><strong>${driver2Data.points}</strong> points</p>
            <p><strong>${driver2Data.wins}</strong> wins</p>
            <p><strong>${driver2Data.podiums}</strong> podiums</p>
            <p>Position: <strong>#${driver2Data.position}</strong></p>
          </div>
        </div>
      `;
      resultDiv.classList.add('active');
    } else {
      resultDiv.classList.remove('active');
    }
  };
  
  compare1.addEventListener('change', compareDrivers);
  compare2.addEventListener('change', compareDrivers);
}

// Content Loading Functions
function loadHomeNews() {
  const homeNewsList = document.getElementById('homeNewsList');
  if (!homeNewsList) return;
  
  const latestNews = appData.latestNews.slice(0, 4);
  
  homeNewsList.innerHTML = latestNews.map(news => `
    <div class="news-item" onclick="shareNews('${news.headline}', '${news.source}')">
      <div class="news-headline">${news.headline}</div>
      <div class="news-meta">
        <span class="news-source">${news.source}</span>
        <span class="news-date">${formatDate(news.date)}</span>
      </div>
    </div>
  `).join('');
}

function loadDriverStandings() {
  const driversList = document.getElementById('driversList');
  if (!driversList) return;
  
  driversList.innerHTML = appData.currentStandings.drivers.map(driver => `
    <div class="standings-item" onclick="hapticFeedback('light')">
      <div class="position-badge ${driver.position <= 3 ? 'podium' : ''}">${driver.position}</div>
      <div class="driver-info">
        <div class="driver-name">${driver.flag} ${driver.driver}</div>
        <div class="driver-team">${driver.team}</div>
      </div>
      <div class="driver-stats">
        <div class="points">${driver.points} pts</div>
        <div class="wins-podiums">${driver.wins}W • ${driver.podiums}P</div>
      </div>
    </div>
  `).join('');
}

function loadConstructorStandings() {
  const constructorsList = document.getElementById('constructorsList');
  if (!constructorsList) return;
  
  constructorsList.innerHTML = appData.currentStandings.constructors.map(constructor => `
    <div class="standings-item" onclick="hapticFeedback('light')">
      <div class="position-badge ${constructor.position <= 3 ? 'podium' : ''}">${constructor.position}</div>
      <div class="team-info">
        <div class="team-name">${constructor.logo} ${constructor.team}</div>
        <div class="driver-team">${constructor.drivers.join(' • ')}</div>
      </div>
      <div class="driver-stats">
        <div class="points">${constructor.points} pts</div>
      </div>
    </div>
  `).join('');
}

function loadRaceCalendar() {
  const calendarList = document.getElementById('calendarList');
  if (!calendarList) return;
  
  let races = appData.raceCalendar;
  
  // Apply filter
  if (currentCalendarFilter !== 'all') {
    races = races.filter(race => {
      switch (currentCalendarFilter) {
        case 'completed': return race.completed;
        case 'upcoming': return !race.completed;
        case 'sprint': return race.sprint;
        default: return true;
      }
    });
  }
  
  calendarList.innerHTML = races.map(race => `
    <div class="calendar-item ${race.completed ? 'completed' : 'upcoming'}" onclick="showRaceDetails(${race.round})">
      <div class="race-round">R${race.round}</div>
      <div class="race-header">
        <div>
          <div class="race-title">${race.name}</div>
          <div class="race-location-text">${race.location}</div>
        </div>
      </div>
      <div class="race-details">
        <div class="race-date-text">${formatDate(race.date)}</div>
        ${race.completed && race.winner ? `<div class="race-winner">Winner: ${race.winner}</div>` : ''}
        ${race.sprint ? '<span class="sprint-indicator">SPRINT</span>' : ''}
      </div>
    </div>
  `).join('');
}

function showRaceDetails(round) {
  const race = appData.raceCalendar.find(r => r.round === round);
  if (!race) return;
  
  const modal = document.getElementById('raceModal');
  const title = document.getElementById('modalRaceTitle');
  const body = document.getElementById('modalBody');
  
  if (!modal || !title || !body) return;
  
  title.textContent = race.name;
  
  let sessionsHtml = '';
  if (race.round === 15) { // Next race
    sessionsHtml = appData.nextRace.sessions.map(session => `
      <div style="display: flex; justify-content: space-between; padding: var(--space-8) 0; border-bottom: 1px solid var(--color-border);">
        <span>${session.name}</span>
        <span>${formatDate(session.date)} ${session.time}</span>
      </div>
    `).join('');
  }
  
  body.innerHTML = `
    <div style="margin-bottom: var(--space-16);">
      <h4>Circuit Information</h4>
      <p><strong>Location:</strong> ${race.location}</p>
      <p><strong>Circuit:</strong> ${race.circuit}</p>
      <p><strong>Date:</strong> ${formatDate(race.date)}</p>
      <p><strong>Weather:</strong> ${race.weather}</p>
      ${race.sprint ? '<p><strong>Sprint Weekend</strong> 🏃‍♂️</p>' : ''}
    </div>
    
    ${race.completed ? `
      <div style="margin-bottom: var(--space-16);">
        <h4>Race Result</h4>
        <p><strong>Winner:</strong> ${race.winner} 🏆</p>
      </div>
    ` : ''}
    
    ${sessionsHtml ? `
      <div>
        <h4>Session Schedule</h4>
        <div style="background: var(--color-bg-1); border-radius: var(--radius-base); padding: var(--space-12);">
          ${sessionsHtml}
        </div>
      </div>
    ` : ''}
  `;
  
  modal.classList.remove('hidden');
  hapticFeedback('medium');
}

function loadNewsSources() {
  const newsSourcesGrid = document.getElementById('newsSourcesGrid');
  if (!newsSourcesGrid) return;
  
  newsSourcesGrid.innerHTML = appData.newsSources.map(source => `
    <a href="${source.url}" target="_blank" class="news-source-card" rel="noopener" onclick="hapticFeedback('light')">
      <span class="source-icon">${getSourceIcon(source.type)}</span>
      <div class="source-name">${source.name}</div>
      <div class="source-description">${source.description}</div>
      <span class="source-type">${source.type}</span>
    </a>
  `).join('');
}

function loadLatestNews() {
  filterNews(); // This will load and filter news
}

function loadFavoriteTeamCard() {
  const favoriteTeam = localStorage.getItem('favoriteTeam');
  const favoriteDriver = localStorage.getItem('favoriteDriver');
  const card = document.getElementById('favoriteTeamCard');
  
  if (!card) return;
  
  if (favoriteTeam || favoriteDriver) {
    let content = '<h4>Your F1 Favorites</h4>';
    
    if (favoriteTeam) {
      const teamData = appData.currentStandings.constructors.find(t => t.team.toLowerCase() === favoriteTeam);
      if (teamData) {
        content += `<p><strong>Team:</strong> ${teamData.logo} ${teamData.team} - Position #${teamData.position} (${teamData.points} pts)</p>`;
      }
    }
    
    if (favoriteDriver) {
      const driverData = appData.currentStandings.drivers.find(d => d.driver === favoriteDriver);
      if (driverData) {
        content += `<p><strong>Driver:</strong> ${driverData.flag} ${driverData.driver} - Position #${driverData.position} (${driverData.points} pts)</p>`;
      }
    }
    
    card.innerHTML = content;
    card.classList.remove('hidden');
  } else {
    card.classList.add('hidden');
  }
}

function updateCurrentDate() {
  const dateEl = document.getElementById('currentDate');
  if (dateEl) {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
  }
}

// Event Listeners Setup - FIXED
function setupNavigationListeners() {
  // Wait for DOM to be ready
  setTimeout(() => {
    const navButtons = document.querySelectorAll('.nav-item');
    console.log('Setting up navigation for', navButtons.length, 'buttons');
    
    navButtons.forEach(button => {
      const targetPage = button.getAttribute('data-page');
      console.log('Setting up nav button for page:', targetPage);
      
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Navigation clicked:', targetPage);
        if (targetPage) {
          showPage(targetPage);
        }
      });
    });
    
    // Quick action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.getAttribute('data-action');
        if (action) {
          showPage(action);
        }
      });
    });
  }, 100);
}

function setupStandingsToggle() {
  setTimeout(() => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const type = this.getAttribute('data-type');
        switchStandingsView(type);
      });
    });
    
    // Share button
    const shareBtn = document.getElementById('shareStandings');
    if (shareBtn) {
      shareBtn.addEventListener('click', shareStandings);
    }
  }, 100);
}

function setupFilters() {
  setTimeout(() => {
    // News filters
    const newsFilters = document.querySelectorAll('.news-filters .filter-btn');
    newsFilters.forEach(btn => {
      btn.addEventListener('click', function() {
        newsFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentNewsFilter = this.getAttribute('data-category');
        filterNews();
        hapticFeedback('light');
      });
    });
    
    // Calendar filters
    const calendarFilters = document.querySelectorAll('.calendar-filters .filter-btn');
    calendarFilters.forEach(btn => {
      btn.addEventListener('click', function() {
        calendarFilters.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCalendarFilter = this.getAttribute('data-filter');
        loadRaceCalendar();
        hapticFeedback('light');
      });
    });
  }, 100);
}

function setupSettings() {
  setTimeout(() => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      const savedTheme = localStorage.getItem('theme') || 'light';
      
      if (savedTheme === 'dark') {
        document.body.setAttribute('data-color-scheme', 'dark');
        darkModeToggle.checked = true;
      } else {
        document.body.setAttribute('data-color-scheme', 'light');
        darkModeToggle.checked = false;
      }
      
      darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
          document.body.setAttribute('data-color-scheme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.body.setAttribute('data-color-scheme', 'light');
          localStorage.setItem('theme', 'light');
        }
        hapticFeedback('light');
      });
    }
    
    // Favorite team
    const favoriteTeam = document.getElementById('favoriteTeam');
    if (favoriteTeam) {
      const savedTeam = localStorage.getItem('favoriteTeam') || '';
      favoriteTeam.value = savedTeam;
      
      favoriteTeam.addEventListener('change', function() {
        localStorage.setItem('favoriteTeam', this.value);
        loadFavoriteTeamCard();
        hapticFeedback('light');
      });
    }
    
    // Favorite driver
    const favoriteDriver = document.getElementById('favoriteDriver');
    if (favoriteDriver) {
      const drivers = appData.currentStandings.drivers;
      const driverOptions = drivers.map(d => `<option value="${d.driver}">${d.driver}</option>`).join('');
      favoriteDriver.innerHTML = '<option value="">Choose driver...</option>' + driverOptions;
      
      const savedDriver = localStorage.getItem('favoriteDriver') || '';
      favoriteDriver.value = savedDriver;
      
      favoriteDriver.addEventListener('change', function() {
        localStorage.setItem('favoriteDriver', this.value);
        loadFavoriteTeamCard();
        hapticFeedback('light');
      });
    }
    
    // Other settings
    const notificationsToggle = document.getElementById('notificationsToggle');
    if (notificationsToggle) {
      const savedNotifications = localStorage.getItem('notifications');
      if (savedNotifications !== null) {
        notificationsToggle.checked = savedNotifications === 'true';
      }
      
      notificationsToggle.addEventListener('change', function() {
        localStorage.setItem('notifications', this.checked.toString());
        if (this.checked) {
          requestNotificationPermission();
        }
        hapticFeedback('light');
      });
    }
    
    const hapticToggle = document.getElementById('hapticToggle');
    if (hapticToggle) {
      const savedHaptic = localStorage.getItem('hapticFeedback');
      if (savedHaptic !== null) {
        hapticToggle.checked = savedHaptic === 'true';
      }
      
      hapticToggle.addEventListener('change', function() {
        localStorage.setItem('hapticFeedback', this.checked.toString());
        if (this.checked) {
          hapticFeedback('medium');
        }
      });
    }
    
    const language = document.getElementById('language');
    if (language) {
      const savedLanguage = localStorage.getItem('language') || 'en';
      language.value = savedLanguage;
      
      language.addEventListener('change', function() {
        localStorage.setItem('language', this.value);
        hapticFeedback('light');
      });
    }
    
    // Sync data button
    const syncBtn = document.getElementById('syncData');
    if (syncBtn) {
      syncBtn.addEventListener('click', function() {
        refreshData();
      });
    }
  }, 100);
}

function setupModalHandlers() {
  setTimeout(() => {
    const modal = document.getElementById('raceModal');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');
    
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        if (modal) modal.classList.add('hidden');
        hapticFeedback('light');
      });
    }
    
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', () => {
        if (modal) modal.classList.add('hidden');
        hapticFeedback('light');
      });
    }
  }, 100);
}

function setupPWAHandlers() {
  setTimeout(() => {
    // Install button
    const installBtn = document.getElementById('installBtn');
    const dismissBtn = document.getElementById('dismissBtn');
    
    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          
          if (outcome === 'accepted') {
            showToast('App installed successfully!', 'success');
          }
          
          deferredPrompt = null;
          hideInstallBanner();
        } else {
          showToast('Install prompt not available. Add to home screen manually.', 'info');
        }
      });
    }
    
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        hideInstallBanner();
        localStorage.setItem('installDismissed', 'true');
      });
    }
  }, 100);
}

// Online/Offline Detection
function setupOnlineOfflineDetection() {
  function updateConnectionStatus() {
    const statusEl = document.getElementById('connectionStatus');
    isOnline = navigator.onLine;
    
    if (statusEl) {
      if (isOnline) {
        statusEl.textContent = 'Online';
        statusEl.className = 'status status--success';
      } else {
        statusEl.textContent = 'Offline';
        statusEl.className = 'status status--error';
      }
    }
    
    // Show offline notification
    if (!isOnline && !document.querySelector('.offline-indicator')) {
      const indicator = document.createElement('div');
      indicator.className = 'offline-indicator show';
      indicator.textContent = 'You are currently offline. Some features may be limited.';
      document.body.appendChild(indicator);
    } else if (isOnline) {
      const indicator = document.querySelector('.offline-indicator');
      if (indicator) {
        indicator.remove();
      }
    }
  }
  
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);
  updateConnectionStatus();
}

// Notification Permission
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showToast('Notifications enabled!', 'success');
        scheduleRaceReminder();
      }
    });
  }
}

function scheduleRaceReminder() {
  // Simulate race reminder notification
  const raceDate = new Date('2025-08-31T15:00:00+02:00');
  const now = new Date();
  const timeDiff = raceDate.getTime() - now.getTime();
  
  if (timeDiff > 0 && timeDiff < 24 * 60 * 60 * 1000) { // Within 24 hours
    if ('Notification' in window && Notification.permission === 'granted') {
      setTimeout(() => {
        new Notification('F1 Race Reminder', {
          body: 'Dutch Grand Prix starts in 1 hour!'
        });
      }, Math.max(0, timeDiff - 60 * 60 * 1000)); // 1 hour before
    }
  }
}

// Load All Content
function loadAllContent() {
  updateCurrentDate();
  loadHomeNews();
  loadDriverStandings();
  loadConstructorStandings();
  loadRaceCalendar();
  loadNewsSources();
  loadLatestNews();
  loadFavoriteTeamCard();
}

// Initialize Application
function initializeApp() {
  console.log('Initializing F1 Tracker PWA...');
  
  // Load all content
  loadAllContent();
  
  // Start live countdown
  startLiveCountdown();
  
  // Setup all event listeners with delays to ensure DOM is ready
  setupNavigationListeners();
  setupStandingsToggle();
  setupSettings();
  setupSearch();
  setupFilters();
  setupSwipeNavigation();
  setupPredictionCalculator();
  setupDriverComparison();
  setupModalHandlers();
  setupPWAHandlers();
  setupPullToRefresh();
  setupOnlineOfflineDetection();
  
  // Restore last page
  const lastPage = localStorage.getItem('lastPage') || 'home';
  setTimeout(() => showPage(lastPage), 200);
  
  // Show welcome message for first-time users
  if (!localStorage.getItem('hasVisited')) {
    setTimeout(() => {
      showToast('Welcome to F1 Tracker! Navigate using bottom tabs.', 'success', 5000);
      localStorage.setItem('hasVisited', 'true');
    }, 2000);
  }
  
  // Show install banner after delay
  setTimeout(() => {
    if (!localStorage.getItem('installDismissed')) {
      showInstallBanner();
    }
  }, 3000);
}

// Global Functions for HTML onclick handlers
window.shareNews = shareNews;
window.showRaceDetails = showRaceDetails;
window.hapticFeedback = hapticFeedback;

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already ready
  setTimeout(initializeApp, 100);
}

// Global error handler
window.addEventListener('error', (e) => {
  console.error('App error:', e);
  showToast('Something went wrong. Please refresh the app.', 'error');
});

// Handle app updates
window.addEventListener('beforeunload', () => {
  // Clear countdown interval
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});

// Prevent zoom on iOS
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('raceModal');
    if (modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }
});