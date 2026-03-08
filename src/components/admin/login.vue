<template>
  <div class="login-wrapper">
    <!-- Left Panel -->
    <div class="left-panel">
      <!-- Logo -->
      <div class="logo">
        <div class="logo-icon">
          <i class="fas fa-bolt"></i>
        </div>
        <span class="logo-text">SMARTGYM <span class="logo-ai">AI</span></span>
      </div>

      <!-- Background rings -->
      <div class="rings-container">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
        <div class="ring ring-3"></div>
        <div class="ring ring-4"></div>
        <div class="vertical-bars">
          <div class="bar" v-for="n in 6" :key="n"></div>
        </div>
      </div>

      <!-- Hero Text -->
      <div class="hero-content">
        <h1 class="hero-title">
          Elevate your<br />
          performance with<br />
          <span class="hero-highlight">AI Intelligence.</span>
        </h1>
        <p class="hero-desc">
          The world's most advanced gym management system. Real-time analytics,
          automated scheduling, and personalized AI coaching.
        </p>
      </div>

      <!-- Social proof -->
      <div class="social-proof">
        <div class="avatars">
          <div class="avatar av1"></div>
          <div class="avatar av2"></div>
          <div class="avatar av3"></div>
        </div>
        <span class="proof-text">Joined by 10k+ elite trainers worldwide</span>
      </div>
    </div>

    <!-- Right Panel -->
    <div class="right-panel">
      <div class="login-card">
        <h2 class="card-title">Welcome back</h2>
        <p class="card-subtitle">Access your dashboard and manage your fitness ecosystem.</p>

        <div class="form-group">
          <label class="form-label">Email or Username</label>
          <div class="input-wrapper">
            <i class="fas fa-at input-icon"></i>
            <input
              v-model="form.email"
              type="text"
              class="form-control custom-input"
              placeholder="name@smartgym.ai"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="label-row">
            <label class="form-label">Password</label>
            <a href="#" class="forgot-link">Forgot?</a>
          </div>
          <div class="input-wrapper">
            <i class="fas fa-lock input-icon"></i>
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-control custom-input"
              placeholder="••••••••"
            />
            <i
              class="fas eye-icon"
              :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
              @click="togglePassword"
            ></i>
          </div>
        </div>

        <div class="remember-row">
          <div class="form-check">
            <input
              v-model="form.remember"
              type="checkbox"
              class="form-check-input custom-check"
              id="rememberMe"
            />
            <label class="form-check-label" for="rememberMe">Remember me for 30 days</label>
          </div>
        </div>

        <button class="btn btn-primary signin-btn" @click="handleLogin" :disabled="loading">
          <span v-if="!loading">Sign in to Dashboard</span>
          <span v-else><i class="fas fa-circle-notch fa-spin me-2"></i>Signing in...</span>
        </button>

        <div class="divider">
          <span>Or continue with</span>
        </div>

        <div class="social-buttons">
          <button class="btn social-btn" @click="loginWith('google')">
            <svg width="18" height="18" viewBox="0 0 24 24" class="me-2">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button class="btn social-btn" @click="loginWith('apple')">
            <i class="fab fa-apple me-2" style="font-size:18px;"></i>
            Apple
          </button>
        </div>

        <p class="register-text">
          Don't have an account?
          <a href="#" class="request-link">Request Access</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      showPassword: false,
      loading: false,
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    async handleLogin() {
      if (!this.form.email || !this.form.password) return
      this.loading = true
      await new Promise(r => setTimeout(r, 1500))
      this.loading = false
      alert('Login successful!')
    },
    loginWith(provider) {
      alert(`Continue with ${provider}`)
    },
  },
}
</script>

<style> 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-wrapper {
  display: flex;
  min-height: 100vh;
  background: #060d18;
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

/* ===== LEFT PANEL ===== */
.left-panel {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px 48px;
  overflow: hidden;
  background: radial-gradient(ellipse at 30% 40%, rgba(14, 40, 80, 0.8) 0%, #060d18 70%);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;
  position: relative;
}

.logo-icon {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #1a6fff, #0d4fd4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  box-shadow: 0 0 20px rgba(26, 111, 255, 0.4);
}

.logo-text {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.08em;
}

.logo-ai {
  color: #3b9eff;
}

/* Rings animation */
.rings-container {
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(59, 158, 255, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ringPulse 4s ease-in-out infinite;
}

.ring-1 { width: 160px; height: 160px; animation-delay: 0s; border-color: rgba(59, 158, 255, 0.35); }
.ring-2 { width: 260px; height: 260px; animation-delay: 0.5s; border-color: rgba(59, 158, 255, 0.22); }
.ring-3 { width: 380px; height: 380px; animation-delay: 1s; border-color: rgba(59, 158, 255, 0.13); }
.ring-4 { width: 500px; height: 500px; animation-delay: 1.5s; border-color: rgba(59, 158, 255, 0.06); }

@keyframes ringPulse {
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.03); }
}

/* Vertical bars */
.vertical-bars {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

.bar {
  width: 3px;
  background: linear-gradient(to top, rgba(59, 158, 255, 0.6), transparent);
  border-radius: 2px;
  animation: barGrow 2s ease-in-out infinite alternate;
}

.bar:nth-child(1) { height: 60px; animation-delay: 0s; }
.bar:nth-child(2) { height: 100px; animation-delay: 0.2s; }
.bar:nth-child(3) { height: 140px; animation-delay: 0.4s; }
.bar:nth-child(4) { height: 100px; animation-delay: 0.6s; }
.bar:nth-child(5) { height: 70px; animation-delay: 0.8s; }
.bar:nth-child(6) { height: 50px; animation-delay: 1s; }

@keyframes barGrow {
  0% { opacity: 0.3; transform: scaleY(0.8); }
  100% { opacity: 0.9; transform: scaleY(1); }
}

/* Hero */
.hero-content {
  position: relative;
  z-index: 10;
  max-width: 400px;
}

.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 18px;
  letter-spacing: -0.01em;
}

.hero-highlight {
  color: #3b9eff;
  text-shadow: 0 0 30px rgba(59, 158, 255, 0.4);
}

.hero-desc {
  color: rgba(180, 200, 230, 0.75);
  font-size: 15px;
  line-height: 1.7;
  font-weight: 300;
}

/* Social proof */
.social-proof {
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  z-index: 10;
}

.avatars {
  display: flex;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #060d18;
  margin-left: -8px;
}

.avatar:first-child { margin-left: 0; }
.av1 { background: linear-gradient(135deg, #667eea, #764ba2); }
.av2 { background: linear-gradient(135deg, #f093fb, #f5576c); }
.av3 { background: linear-gradient(135deg, #4facfe, #00f2fe); }

.proof-text {
  color: rgba(180, 200, 230, 0.65);
  font-size: 13px;
}

/* ===== RIGHT PANEL ===== */
.right-panel {
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
  background: rgba(8, 16, 32, 0.7);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(59, 158, 255, 0.08);
}

.login-card {
  width: 100%;
  max-width: 380px;
}

.card-title {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.card-subtitle {
  color: rgba(160, 185, 220, 0.7);
  font-size: 14px;
  margin-bottom: 32px;
  line-height: 1.6;
}

/* Form */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  color: rgba(200, 220, 255, 0.85);
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  display: block;
  letter-spacing: 0.02em;
}

.label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.forgot-link {
  color: #3b9eff;
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.forgot-link:hover { color: #70bcff; }

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  color: rgba(130, 160, 200, 0.6);
  font-size: 14px;
  z-index: 2;
}

.eye-icon {
  position: absolute;
  right: 14px;
  color: rgba(130, 160, 200, 0.6);
  font-size: 14px;
  cursor: pointer;
  z-index: 2;
  transition: color 0.2s;
}

.eye-icon:hover { color: #3b9eff; }

.custom-input {
  width: 100%;
  background: rgba(15, 28, 55, 0.9) !important;
  border: 1px solid rgba(59, 158, 255, 0.15) !important;
  border-radius: 10px !important;
  color: #d4e4ff !important;
  padding: 12px 42px !important;
  font-size: 14px !important;
  font-family: 'DM Sans', sans-serif !important;
  transition: all 0.25s ease !important;
  outline: none !important;
  box-shadow: none !important;
}

.custom-input::placeholder {
  color: rgba(100, 130, 170, 0.5) !important;
}

.custom-input:focus {
  border-color: rgba(59, 158, 255, 0.5) !important;
  background: rgba(20, 38, 70, 0.95) !important;
  box-shadow: 0 0 0 3px rgba(59, 158, 255, 0.1) !important;
}

/* Remember me */
.remember-row {
  margin-bottom: 24px;
}

.custom-check {
  background-color: rgba(15, 28, 55, 0.9) !important;
  border: 1px solid rgba(59, 158, 255, 0.25) !important;
  border-radius: 4px !important;
  cursor: pointer;
}

.custom-check:checked {
  background-color: #1a6fff !important;
  border-color: #1a6fff !important;
}

.form-check-label {
  color: rgba(160, 185, 220, 0.75);
  font-size: 13px;
  cursor: pointer;
  margin-left: 4px;
}

/* Sign in button */
.signin-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #1a6fff, #0d4fd4) !important;
  border: none !important;
  border-radius: 10px !important;
  color: #ffffff !important;
  font-family: 'Syne', sans-serif !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  letter-spacing: 0.02em;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 20px rgba(26, 111, 255, 0.35) !important;
  margin-bottom: 24px;
}

.signin-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #2b7fff, #1a5fe8) !important;
  box-shadow: 0 6px 28px rgba(26, 111, 255, 0.5) !important;
  transform: translateY(-1px);
}

.signin-btn:disabled {
  opacity: 0.7 !important;
  cursor: not-allowed !important;
}

/* Divider */
.divider {
  text-align: center;
  position: relative;
  margin-bottom: 20px;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 38%;
  height: 1px;
  background: rgba(59, 158, 255, 0.12);
}

.divider::before { left: 0; }
.divider::after { right: 0; }

.divider span {
  color: rgba(130, 160, 200, 0.55);
  font-size: 13px;
  padding: 0 12px;
  background: transparent;
}

/* Social buttons */
.social-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}

.social-btn {
  flex: 1;
  padding: 12px;
  background: rgba(15, 28, 55, 0.8) !important;
  border: 1px solid rgba(59, 158, 255, 0.15) !important;
  border-radius: 10px !important;
  color: #c8d8f0 !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: 'DM Sans', sans-serif !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.25s ease !important;
}

.social-btn:hover {
  background: rgba(25, 45, 85, 0.9) !important;
  border-color: rgba(59, 158, 255, 0.3) !important;
  color: #ffffff !important;
  transform: translateY(-1px);
}

/* Register */
.register-text {
  text-align: center;
  color: rgba(130, 160, 200, 0.6);
  font-size: 13px;
  margin: 0;
}

.request-link {
  color: #3b9eff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.request-link:hover { color: #70bcff; }

/* Responsive */
@media (max-width: 768px) {
  .left-panel { display: none; }
  .right-panel {
    width: 100%;
    background: #060d18;
    border-left: none;
  }
}
</style>
