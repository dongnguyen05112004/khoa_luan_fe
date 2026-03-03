<template>
  <div class="activity-wrapper">
    <!-- AI Analysis Card -->
    <div class="ai-card">
      <div class="ai-card-header">
        <i class="fas fa-robot me-2"></i>
        <span class="ai-label">AI Phân tích lịch sử</span>
      </div>
      <h5 class="ai-title">Tóm tắt hoạt động tháng 5</h5>
      <p class="ai-body">
        Dựa trên lịch sử 30 ngày qua, bạn đã hoàn thành <strong>12 buổi tập</strong>. Tần suất tập luyện của bạn
        tăng <strong>15%</strong> so với tháng trước. AI nhận thấy bạn tập trung nhiều vào các bài tập <strong>"Ngực"</strong> và <strong>"Cardio"</strong>.
        Đề xuất: Hãy bổ sung thêm 1 buổi tập <strong>"Chân"</strong> mỗi tuần để phát triển cơ thể cân đối hơn.
      </p>
    </div>

    <!-- Filter Tabs & Actions -->
    <div class="filter-row d-flex align-items-center gap-2 flex-wrap">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        class="tab-btn"
        :class="{ active: activeTab === tab.value }"
        @click="activeTab = tab.value"
      >
        {{ tab.label }}
      </button>
      <div class="ms-auto d-flex gap-2">
        <button class="action-btn">
          <i class="fas fa-filter me-1"></i> Nâng cao
        </button>
        <button class="action-btn export-btn">
          <i class="fas fa-file-pdf me-1"></i> Xuất file pdf
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="table-wrapper">
      <table class="activity-table w-100">
        <thead>
          <tr>
            <th>Ngày & giờ</th>
            <th>Hoạt động</th>
            <th>Phân loại</th>
            <th>Thời lượng</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredActivities" :key="index" class="activity-row">
            <td class="date-cell">
              <div class="date">{{ item.date }}</div>
              <div class="time"><i class="fas fa-clock me-1"></i>{{ item.time }}</div>
            </td>
            <td class="activity-cell">
              <i :class="item.icon" class="me-2 activity-icon"></i>
              {{ item.name }}
            </td>
            <td>
              <span class="badge-type" :class="item.type.toLowerCase()">{{ item.type }}</span>
            </td>
            <td class="duration-cell">{{ item.duration }}</td>
            <td>
              <span class="status-badge">
                <i class="fas fa-check-circle me-1"></i>{{ item.status }}
              </span>
            </td>
            <td>
              <a href="#" class="detail-link">Chi tiết</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityHistory',
  data() {
    return {
      activeTab: 'all',
      tabs: [
        { label: 'Tất cả', value: 'all' },
        { label: 'Tập luyện', value: 'workout' },
        { label: 'Check-in', value: 'check-in' },
        { label: 'Thanh toán', value: 'payment' },
      ],
      activities: [
        {
          date: '20/5/2024',
          time: '08:30',
          name: 'Tập ngực & tay sau',
          icon: 'fas fa-dumbbell',
          type: 'WORKOUT',
          duration: '60 phút',
          status: 'Hoàn thành',
        },
        {
          date: '19/5/2024',
          time: '07:00',
          name: 'Check-in Cơ sở quận 1',
          icon: 'fas fa-check-circle',
          type: 'CHECK-IN',
          duration: '-',
          status: 'Thành công',
        },
        {
          date: '15/5/2024',
          time: '10:00',
          name: 'Gia hạn gói Platium (6 tháng)',
          icon: 'fas fa-credit-card',
          type: 'PAYMENT',
          duration: '-',
          status: 'Đã thanh toán',
        },
        {
          date: '12/5/2024',
          time: '07:00',
          name: 'Chạy bộ Cardio',
          icon: 'fas fa-dumbbell',
          type: 'WORKOUT',
          duration: '45 phút',
          status: 'Hoàn thành',
        },
        {
          date: '10/5/2024',
          time: '18:00',
          name: 'Tập chân & Mông',
          icon: 'fas fa-dumbbell',
          type: 'WORKOUT',
          duration: '75 phút',
          status: 'Hoàn thành',
        },
      ],
    }
  },
  computed: {
    filteredActivities() {
      if (this.activeTab === 'all') return this.activities
      return this.activities.filter(
        (a) => a.type.toLowerCase() === this.activeTab
      )
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

.activity-wrapper {
  font-family: 'Be Vietnam Pro', sans-serif;
  max-width: 900px;
  margin: 24px auto;
  padding: 0 16px;
  color: #1a1a2e;
}

/* AI Card */
.ai-card {
  background: linear-gradient(135deg, #2d4a7a 0%, #3a6199 100%);
  border-radius: 14px;
  padding: 22px 26px;
  color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(45, 74, 122, 0.3);
}

.ai-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}

.ai-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  opacity: 0.85;
}

.ai-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.ai-body {
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.92;
  margin: 0;
}

/* Filter Row */
.filter-row {
  margin-bottom: 16px;
}

.tab-btn {
  border: 1.5px solid #d1d5db;
  background: #fff;
  color: #4b5563;
  padding: 7px 18px;
  border-radius: 999px;
  font-size: 14px;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  border-color: #2d4a7a;
  color: #2d4a7a;
}

.tab-btn.active {
  background: #1a1a2e;
  color: #fff;
  border-color: #1a1a2e;
}

.action-btn {
  border: 1.5px solid #d1d5db;
  background: #fff;
  color: #374151;
  padding: 7px 16px;
  border-radius: 8px;
  font-size: 13.5px;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
}

.action-btn:hover {
  background: #f3f4f6;
}

.export-btn {
  color: #2d4a7a;
  border-color: #2d4a7a;
}

.export-btn:hover {
  background: #eef2ff;
}

/* Table */
.table-wrapper {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.activity-table {
  border-collapse: collapse;
}

.activity-table thead tr {
  background: #f9fafb;
  border-bottom: 1.5px solid #e5e7eb;
}

.activity-table th {
  padding: 13px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  text-align: left;
  white-space: nowrap;
}

.activity-row {
  border-bottom: 1px solid #f0f0f5;
  transition: background 0.15s;
}

.activity-row:last-child {
  border-bottom: none;
}

.activity-row:hover {
  background: #f8fafc;
}

.activity-table td {
  padding: 15px 18px;
  font-size: 14px;
  vertical-align: middle;
}

.date-cell .date {
  font-weight: 600;
  color: #111827;
  font-size: 14px;
}

.date-cell .time {
  font-size: 12.5px;
  color: #9ca3af;
  margin-top: 2px;
}

.activity-cell {
  font-weight: 500;
  color: #1f2937;
}

.activity-icon {
  color: #6b7280;
}

.badge-type {
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 5px;
  letter-spacing: 0.4px;
}

.badge-type.workout {
  color: #2563eb;
  background: #eff6ff;
}

.badge-type.check-in {
  color: #16a34a;
  background: #f0fdf4;
}

.badge-type.payment {
  color: #d97706;
  background: #fffbeb;
}

.duration-cell {
  color: #374151;
  font-weight: 500;
}

.status-badge {
  font-size: 13px;
  color: #374151;
}

.status-badge .fa-check-circle {
  color: #22c55e;
}

.detail-link {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.15s;
}

.detail-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}
</style>