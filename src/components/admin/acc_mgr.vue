<template>
  <div class="page-wrapper">
    <!-- Header -->
    <div class="page-header d-flex align-items-start justify-content-between mb-4">
      <div>
        <h1 class="page-title">Quản lý người dùng</h1>
        <p class="page-subtitle">Phân quyền và quản lý tài khoản nhân sự phòng GYM</p>
      </div>
      <button class="btn btn-add" @click="openAddModal">
        <i class="fas fa-user-plus me-2"></i> Thêm người dùng mới
      </button>
    </div>

    <!-- AI Suggestion Banner -->
    <div class="ai-banner mb-4">
      <div class="ai-icon-wrap">
        <i class="fas fa-robot"></i>
      </div>
      <div class="ai-content">
        <div class="ai-title">Gợi ý từ AI Intelligence</div>
        <div class="ai-desc">
          Hệ thống AI gợi ý phân quyền <strong>Huấn luyện viên (HLV)</strong> cho nhân sự mới dựa trên 5 năm
          kinh nghiệm chuyên môn và lịch trình trống vào các khung giờ vàng sáng sớm.
        </div>
      </div>
      <button class="btn btn-detail ms-auto">Xem chi tiết</button>
    </div>

    <!-- Table -->
    <div class="table-card">
      <table class="table custom-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>HỌ TÊN</th>
            <th>EMAIL</th>
            <th>VAI TRÒ</th>
            <th>TRẠNG THÁI</th>
            <th>NGÀY TẠO</th>
            <th>HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in paginatedUsers" :key="user.id">
            <td class="stt-cell">{{ String((currentPage - 1) * pageSize + index + 1).padStart(2, '0') }}</td>
            <td>
              <div class="user-info">
                <div class="avatar" :style="{ background: user.avatarColor }">{{ user.initials }}</div>
                <span class="user-name">{{ user.name }}</span>
              </div>
            </td>
            <td class="email-cell">{{ user.email }}</td>
            <td>
              <span class="badge-role" :class="'role-' + user.roleKey">{{ user.role }}</span>
            </td>
            <td>
              <span class="status-badge" :class="user.active ? 'status-active' : 'status-locked'">
                <span class="status-dot"></span>
                {{ user.active ? 'Hoạt động' : 'Khóa' }}
              </span>
            </td>
            <td class="date-cell">{{ user.createdAt }}</td>
            <td>
              <div class="action-buttons">
                <button class="action-btn edit-btn" title="Chỉnh sửa" @click="editUser(user)">
                  <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="action-btn shield-btn" title="Phân quyền" @click="manageRole(user)">
                  <i class="fas fa-shield-alt"></i>
                </button>
                <button class="action-btn delete-btn" title="Xóa" @click="deleteUser(user)">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Footer -->
      <div class="table-footer d-flex align-items-center justify-content-between">
        <span class="footer-info">
          Hiển thị {{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, totalUsers) }} trên tổng số {{ totalUsers }} người dùng
        </span>
        <nav class="pagination-wrap">
          <ul class="pagination mb-0">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link page-nav" @click="changePage(currentPage - 1)">
                <i class="fas fa-chevron-left"></i>
              </button>
            </li>
            <li
              class="page-item"
              v-for="p in totalPages"
              :key="p"
              :class="{ active: p === currentPage }"
            >
              <button class="page-link" @click="changePage(p)">{{ p }}</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <button class="page-link page-nav" @click="changePage(currentPage + 1)">
                <i class="fas fa-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Modal Add/Edit User -->
    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-box">
        <div class="modal-header-custom">
          <h5 class="modal-title-custom">{{ editingUser ? 'Chỉnh sửa người dùng' : 'Thêm người dùng mới' }}</h5>
          <button class="modal-close" @click="closeModal"><i class="fas fa-times"></i></button>
        </div>
        <div class="modal-body-custom">
          <div class="mb-3">
            <label class="form-label-custom">Họ tên</label>
            <input v-model="modalForm.name" type="text" class="form-control custom-input" placeholder="Nhập họ tên..." />
          </div>
          <div class="mb-3">
            <label class="form-label-custom">Email</label>
            <input v-model="modalForm.email" type="email" class="form-control custom-input" placeholder="Nhập email..." />
          </div>
          <div class="mb-3">
            <label class="form-label-custom">Vai trò</label>
            <select v-model="modalForm.roleKey" class="form-control custom-input">
              <option value="admin">Admin</option>
              <option value="hlv">HLV</option>
              <option value="nhanvien">Nhân viên</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label-custom">Trạng thái</label>
            <select v-model="modalForm.active" class="form-control custom-input">
              <option :value="true">Hoạt động</option>
              <option :value="false">Khóa</option>
            </select>
          </div>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-cancel" @click="closeModal">Hủy</button>
          <button class="btn btn-add" @click="saveUser">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserManagement',
  data() {
    return {
      currentPage: 1,
      pageSize: 4,
      showModal: false,
      editingUser: null,
      modalForm: { name: '', email: '', roleKey: 'nhanvien', active: true },
      users: [
        { id: 1, name: 'Nguyễn Văn An', email: 'anv@gym.ai', role: 'Admin', roleKey: 'admin', active: true, createdAt: '01/10/2023', initials: 'NA', avatarColor: '#6366f1' },
        { id: 2, name: 'Trần Thị Bình', email: 'btt@gym.ai', role: 'HLV', roleKey: 'hlv', active: true, createdAt: '15/11/2023', initials: 'TB', avatarColor: '#06b6d4' },
        { id: 3, name: 'Lê Văn Chính', email: 'clv@gym.ai', role: 'Nhân viên', roleKey: 'nhanvien', active: false, createdAt: '20/12/2023', initials: 'LC', avatarColor: '#a78bfa' },
        { id: 4, name: 'Hoàng Anh Kiệt', email: 'kah@gym.ai', role: 'HLV', roleKey: 'hlv', active: true, createdAt: '05/01/2024', initials: 'HK', avatarColor: '#f59e0b' },
        { id: 5, name: 'Phạm Minh Tuấn', email: 'tpm@gym.ai', role: 'Nhân viên', roleKey: 'nhanvien', active: true, createdAt: '10/01/2024', initials: 'PT', avatarColor: '#10b981' },
        { id: 6, name: 'Võ Thị Lan', email: 'lvt@gym.ai', role: 'HLV', roleKey: 'hlv', active: true, createdAt: '12/01/2024', initials: 'VL', avatarColor: '#ec4899' },
        { id: 7, name: 'Đặng Quốc Huy', email: 'hdq@gym.ai', role: 'Nhân viên', roleKey: 'nhanvien', active: false, createdAt: '18/01/2024', initials: 'DH', avatarColor: '#f97316' },
        { id: 8, name: 'Bùi Thị Mai', email: 'mbt@gym.ai', role: 'Admin', roleKey: 'admin', active: true, createdAt: '20/01/2024', initials: 'BM', avatarColor: '#8b5cf6' },
      ],
    }
  },
  computed: {
    totalUsers() { return this.users.length },
    totalPages() { return Math.ceil(this.totalUsers / this.pageSize) },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.users.slice(start, start + this.pageSize)
    },
  },
  methods: {
    changePage(p) {
      if (p >= 1 && p <= this.totalPages) this.currentPage = p
    },
    openAddModal() {
      this.editingUser = null
      this.modalForm = { name: '', email: '', roleKey: 'nhanvien', active: true }
      this.showModal = true
    },
    editUser(user) {
      this.editingUser = user
      this.modalForm = { name: user.name, email: user.email, roleKey: user.roleKey, active: user.active }
      this.showModal = true
    },
    saveUser() {
      const roleMap = { admin: 'Admin', hlv: 'HLV', nhanvien: 'Nhân viên' }
      const colors = ['#6366f1', '#06b6d4', '#a78bfa', '#f59e0b', '#10b981', '#ec4899', '#f97316', '#8b5cf6']
      if (this.editingUser) {
        Object.assign(this.editingUser, {
          name: this.modalForm.name,
          email: this.modalForm.email,
          roleKey: this.modalForm.roleKey,
          role: roleMap[this.modalForm.roleKey],
          active: this.modalForm.active,
          initials: this.modalForm.name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase(),
        })
      } else {
        const initials = this.modalForm.name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase()
        this.users.push({
          id: Date.now(),
          name: this.modalForm.name,
          email: this.modalForm.email,
          role: roleMap[this.modalForm.roleKey],
          roleKey: this.modalForm.roleKey,
          active: this.modalForm.active,
          createdAt: new Date().toLocaleDateString('vi-VN'),
          initials,
          avatarColor: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      this.closeModal()
    },
    closeModal() { this.showModal = false },
    deleteUser(user) {
      if (confirm(`Xóa người dùng "${user.name}"?`)) {
        this.users = this.users.filter(u => u.id !== user.id)
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages || 1
      }
    },
    manageRole(user) { alert(`Quản lý quyền: ${user.name}`) },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');

* { box-sizing: border-box; }

body, .page-wrapper {
  font-family: 'Be Vietnam Pro', sans-serif;
  background: #f5f6fa;
  color: #1a1d2e;
}

.page-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 36px 24px;
}

/* Header */
.page-title {
  font-size: 26px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.page-subtitle {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.btn-add {
  background: #1d4ed8 !important;
  color: #fff !important;
  border: none !important;
  border-radius: 10px !important;
  padding: 11px 22px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  font-family: 'Be Vietnam Pro', sans-serif !important;
  white-space: nowrap;
  transition: all 0.2s ease !important;
  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.25) !important;
}

.btn-add:hover {
  background: #1e40af !important;
  box-shadow: 0 4px 16px rgba(29, 78, 216, 0.35) !important;
  transform: translateY(-1px);
}

/* AI Banner */
.ai-banner {
  background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%);
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 4px 20px rgba(29, 78, 216, 0.2);
}

.ai-icon-wrap {
  width: 46px;
  height: 46px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  flex-shrink: 0;
}

.ai-title {
  font-weight: 700;
  color: #fff;
  font-size: 15px;
  margin-bottom: 4px;
}

.ai-desc {
  color: rgba(255, 255, 255, 0.85);
  font-size: 13.5px;
  line-height: 1.6;
}

.ai-desc strong { color: #fff; font-weight: 700; }

.btn-detail {
  background: #fff !important;
  color: #1d4ed8 !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 9px 20px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  font-family: 'Be Vietnam Pro', sans-serif !important;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s !important;
}

.btn-detail:hover {
  background: #eff6ff !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
}

/* Table Card */
.table-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.custom-table {
  margin: 0;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.custom-table thead tr {
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.custom-table thead th {
  font-size: 11.5px;
  font-weight: 700;
  color: #9ca3af;
  letter-spacing: 0.07em;
  padding: 14px 18px;
  border: none;
  text-transform: uppercase;
  white-space: nowrap;
}

.custom-table tbody tr {
  border-bottom: 1px solid #f3f4f6;
  transition: background 0.15s;
}

.custom-table tbody tr:last-child { border-bottom: none; }

.custom-table tbody tr:hover { background: #f9fafb; }

.custom-table tbody td {
  padding: 16px 18px;
  vertical-align: middle;
  border: none;
  font-size: 14px;
  color: #374151;
}

.stt-cell { color: #9ca3af; font-weight: 600; font-size: 13px; }
.email-cell { color: #6b7280; }
.date-cell { color: #6b7280; font-size: 13px; }

/* Avatar + User info */
.user-info { display: flex; align-items: center; gap: 12px; }

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
  letter-spacing: 0.03em;
}

.user-name { font-weight: 600; color: #111827; }

/* Role badges */
.badge-role {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12.5px;
  font-weight: 600;
}

.role-admin { background: #fef3c7; color: #b45309; }
.role-hlv { background: #fef9c3; color: #a16207; border: 1px solid #fde68a; }
.role-nhanvien { background: #f3f4f6; color: #4b5563; }

/* Status */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13.5px;
  font-weight: 500;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-active { color: #059669; }
.status-active .status-dot { background: #10b981; box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15); }

.status-locked { color: #9ca3af; }
.status-locked .status-dot { background: #9ca3af; }

/* Action buttons */
.action-buttons { display: flex; gap: 8px; }

.action-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-btn { background: #f3f4f6; color: #6b7280; }
.edit-btn:hover { background: #e5e7eb; color: #374151; }

.shield-btn { background: #eff6ff; color: #2563eb; }
.shield-btn:hover { background: #dbeafe; color: #1d4ed8; }

.delete-btn { background: #fff1f2; color: #ef4444; }
.delete-btn:hover { background: #fee2e2; color: #dc2626; }

/* Table Footer */
.table-footer {
  padding: 16px 20px;
  border-top: 1px solid #f3f4f6;
  background: #fafafa;
}

.footer-info { color: #9ca3af; font-size: 13.5px; }

/* Pagination */
.pagination { gap: 4px; }

.page-link {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px !important;
  border: 1px solid #e5e7eb !important;
  color: #6b7280 !important;
  font-size: 13.5px;
  font-weight: 500;
  padding: 0;
  background: #fff !important;
  transition: all 0.2s !important;
  cursor: pointer;
}

.page-link:hover { background: #f3f4f6 !important; border-color: #d1d5db !important; color: #111827 !important; }
.page-nav { font-size: 11px !important; }

.page-item.active .page-link {
  background: #1d4ed8 !important;
  border-color: #1d4ed8 !important;
  color: #fff !important;
  box-shadow: 0 2px 8px rgba(29, 78, 216, 0.3) !important;
}

.page-item.disabled .page-link {
  opacity: 0.4 !important;
  cursor: not-allowed !important;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  backdrop-filter: blur(3px);
}

.modal-box {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: modalIn 0.2s ease;
}

@keyframes modalIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.modal-header-custom {
  padding: 20px 24px 16px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title-custom {
  font-weight: 700;
  font-size: 17px;
  color: #111827;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s;
}

.modal-close:hover { background: #f3f4f6; color: #374151; }

.modal-body-custom { padding: 20px 24px; }

.form-label-custom {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
  display: block;
}

.custom-input {
  border: 1px solid #e5e7eb !important;
  border-radius: 8px !important;
  padding: 10px 14px !important;
  font-size: 14px !important;
  font-family: 'Be Vietnam Pro', sans-serif !important;
  color: #111827 !important;
  transition: all 0.2s !important;
  outline: none !important;
  box-shadow: none !important;
}

.custom-input:focus {
  border-color: #2563eb !important;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1) !important;
}

.modal-footer-custom {
  padding: 16px 24px 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  border-top: 1px solid #f3f4f6;
}

.btn-cancel {
  background: #f3f4f6 !important;
  color: #374151 !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 10px 20px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  font-family: 'Be Vietnam Pro', sans-serif !important;
  transition: background 0.2s !important;
}

.btn-cancel:hover { background: #e5e7eb !important; }
</style>