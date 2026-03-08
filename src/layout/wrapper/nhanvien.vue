<template>
  <div class="sg-wrapper">
    <!-- Sidebar -->
    <div class="iq-sidebar">
      <!-- Logo -->
      <div class="sidebar-logo">
        <a href="/" class="logo-link">
          <div class="logo-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <span class="logo-text">GYM <span class="logo-accent">ELITE</span></span>
        </a>
      </div>

      <!-- Navigation -->
      <nav class="sidebar-nav">
        <ul class="nav-list">
          <li class="nav-item" :class="{ active: activeMenu === 'dashboard' }">
            <a href="#" class="nav-link-item" @click.prevent="setActive('dashboard')">
              <i class="ri-dashboard-line nav-icon"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="nav-item" :class="{ active: activeMenu === 'schedule' }">
            <a href="#" class="nav-link-item" @click.prevent="setActive('schedule')">
              <i class="ri-calendar-check-line nav-icon"></i>
              <span>Schedule &amp; Booking</span>
            </a>
          </li>
          <li class="nav-item" :class="{ active: activeMenu === 'history' }">
            <a href="#" class="nav-link-item" @click.prevent="setActive('history')">
              <i class="ri-history-line nav-icon"></i>
              <span>History</span>
            </a>
          </li>
          <li class="nav-item" :class="{ active: activeMenu === 'contact' }">
            <a href="#" class="nav-link-item" @click.prevent="setActive('contact')">
              <i class="ri-customer-service-2-line nav-icon"></i>
              <span>Contact &amp; Feedback</span>
            </a>
          </li>
          <li class="nav-item" :class="{ active: activeMenu === 'workout' }">
            <a href="#" class="nav-link-item" @click.prevent="setActive('workout')">
              <i class="ri-focus-3-line nav-icon"></i>
              <span>Personalized Workout Plans</span>
            </a>
          </li>
          <li class="nav-item" :class="{ active: activeMenu === 'challenges' }">
            <a href="#" class="nav-link-item" @click.prevent="setActive('challenges')">
              <i class="ri-settings-3-line nav-icon"></i>
              <span>Challenges &amp; Events</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main area -->
    <div class="sg-main-area">
      <!-- Top Navbar -->
      <header class="top-navbar">
        <div class="navbar-inner">
          <!-- Page title -->
          <div class="navbar-left">
            <h5 class="page-title">{{ pageTitles[activeMenu] }}</h5>
          </div>

          <!-- Right controls -->
          <div class="navbar-right">
            <!-- Search -->
            <button class="icon-btn" title="Tìm kiếm">
              <i class="fas fa-magnifying-glass"></i>
            </button>

            <!-- Notification -->
            <div class="notif-wrap">
              <button class="icon-btn" title="Thông báo">
                <i class="far fa-bell"></i>
              </button>
              <span class="notif-dot"></span>
            </div>

            <!-- User dropdown -->
            <div class="user-dropdown" @click="toggleUserMenu" v-click-outside="closeUserMenu">
              <div class="user-avatar">
                <i class="far fa-user"></i>
              </div>
              <span class="user-name">User name</span>
              <i class="fas fa-chevron-down chevron" :class="{ rotated: userMenuOpen }"></i>

              <div class="user-menu" v-show="userMenuOpen">
                <a href="#" class="user-menu-item">
                  <i class="ri-profile-line"></i> Hồ sơ cá nhân
                </a>
                <a href="#" class="user-menu-item">
                  <i class="ri-vip-crown-line"></i> Gói tập của tôi
                </a>
                <a href="#" class="user-menu-item">
                  <i class="ri-history-line"></i> Lịch sử tập luyện
                </a>
                <div class="menu-divider"></div>
                <a href="#" class="user-menu-item logout">
                  <i class="ri-logout-box-r-line"></i> Đăng xuất
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <div class="sg-content-page">
        <div class="sg-content-inner">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardWrapper',
  directives: {
    'click-outside': {
      bind(el, binding) {
        el._clickOutside = (e) => { if (!el.contains(e.target)) binding.value() }
        document.addEventListener('click', el._clickOutside)
      },
      unbind(el) { document.removeEventListener('click', el._clickOutside) }
    }
  },
  data() {
    return {
      activeMenu: 'workout',
      userMenuOpen: false,
      pageTitles: {
        dashboard: 'Dashboard',
        schedule: 'Schedule & Booking',
        history: 'History',
        contact: 'Contact & Feedback',
        workout: 'Personalized Workout Plans',
        challenges: 'Challenges & Events',
      }
    }
  },
  methods: {
    setActive(menu) { this.activeMenu = menu },
    toggleUserMenu() { this.userMenuOpen = !this.userMenuOpen },
    closeUserMenu() { this.userMenuOpen = false },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  background: #f5f7fb;
  color: #1a1d2e;
}

/* ===== LAYOUT ===== */
.sg-wrapper {
  display: flex;
  min-height: 100vh;
}

/* ===== SIDEBAR ===== */
.iq-sidebar {
  width: 270px;
  min-height: 100vh;
  background: #ffffff;
  border-right: 1.5px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  padding-bottom: 24px;
}

/* Logo */
.sidebar-logo {
  padding: 24px 20px 22px;
  border-bottom: 1px solid #f1f5f9;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
}

.logo-text {
  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: 0.04em;
}

.logo-accent { color: #2563eb; }

/* Nav */
.sidebar-nav { padding: 16px 0; flex: 1; }

.nav-list { list-style: none; padding: 0; margin: 0; }

.nav-item { margin: 3px 10px; }

.nav-link-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 11px 14px;
  border-radius: 10px;
  text-decoration: none;
  color: #64748b;
  font-size: 14.5px;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.18s ease;
  cursor: pointer;
}

.nav-link-item:hover {
  background: #f1f5f9;
  color: #1e40af;
}

.nav-icon {
  font-size: 20px;
  flex-shrink: 0;
  margin-top: 1px;
  color: #94a3b8;
  transition: color 0.18s;
}

.nav-item.active .nav-link-item {
  background: #e8edcc;
  color: #4a5010;
  font-weight: 600;
}

.nav-item.active .nav-icon {
  color: #5a6320;
}

/* ===== MAIN AREA ===== */
.sg-main-area {
  margin-left: 270px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

/* ===== TOP NAVBAR ===== */
.top-navbar {
  position: sticky;
  top: 0;
  z-index: 99;
  background: #ffffff;
  border-bottom: 1.5px solid #e2e8f0;
  height: 64px;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 32px;
}

.page-title {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.02em;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Icon buttons */
.icon-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid #e2e8f0;
  background: #fff;
  color: #475569;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.18s;
}

.icon-btn:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #1e40af;
}

/* Notification */
.notif-wrap { position: relative; display: flex; }
.notif-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ef4444;
  border: 2px solid #fff;
}

/* User dropdown */
.user-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 7px;
  border: 1.5px solid #e2e8f0;
  border-radius: 40px;
  background: #fff;
  cursor: pointer;
  transition: all 0.18s;
  user-select: none;
}

.user-dropdown:hover { border-color: #93c5fd; background: #f8faff; }

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 15px;
  flex-shrink: 0;
}

.user-name {
  font-size: 14.5px;
  font-weight: 600;
  color: #0f172a;
}

.chevron {
  font-size: 11px;
  color: #64748b;
  transition: transform 0.2s ease;
}

.chevron.rotated { transform: rotate(180deg); }

/* User menu */
.user-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  min-width: 190px;
  padding: 6px;
  z-index: 200;
  animation: dropDown 0.15s ease;
}

@keyframes dropDown {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.user-menu-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #374151;
  font-size: 13.5px;
  font-weight: 500;
  transition: background 0.15s;
}

.user-menu-item:hover { background: #f1f5f9; color: #1e40af; }
.user-menu-item.logout { color: #ef4444; }
.user-menu-item.logout:hover { background: #fff1f2; color: #dc2626; }

.menu-divider {
  height: 1px;
  background: #f1f5f9;
  margin: 4px 8px;
}

/* ===== CONTENT ===== */
.sg-content-page {
  flex: 1;
  background: #f5f7fb;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 0;
}

.sg-content-inner {
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>