<template>
    <div>
        <h5 class="ms-2" style="font-size: 30px;"><b>Health Metrics</b></h5>
        <div class="card mt-2 ">
            <div class="card-body" style="background-color: #B9B9B9; border-radius: 20px;">
                <div class="row ">
                    <div class="col-lg-2 ">
                        <div class="card" style="background-color: black; border-radius: 20px; height: 110px; ">
                            <div class="card-body align-middle">
                                <div class="text-start" style="font-size: 20px;">
                                    <p class="text-white mb-0"><b>Weight</b></p>
                                    <p class="text-white mt-0"><b>70 kg</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="card" style="background-color: #34C759; border-radius: 20px; height: 110px;">
                            <div class="card-body align-middle">
                                <div class="text-start" style="font-size: 20px;">
                                    <p class="text-white mb-0"><b> BMI</b> </p>
                                    <p class="text-white mt-0"><b> 50</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card" style="background-color: #FF8D28; border-radius: 20px; height: 110px;">
                            <div class="card-body align-middle">
                                <div class="text-start" style="font-size: 20px;">
                                    <p class="text-white mb-0"><b>% Body Fat</b> </p>
                                    <p class="text-white mt-0"><b>30 %</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="card" style="background-color: #FF383C; border-radius: 20px; height: 110px;">
                            <div class="card-body align-middle">
                                <div class="text-start" style="font-size: 20px;">
                                    <p class="text-white mb-0"><b>Average calorie consumption </b></p>
                                    <p class="text-white mt-0"><b>100</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="border-top: 3px solid black; opacity: 1;">
                <div class="mt-4 p-3 mb-3" style="background: white; border-radius: 15px; height: auto;">
                    <div class="row">
                        <div class="col-lg-6">
                            <h6 class="text-dark mb-3"><b>Weight chart </b></h6>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center justify-content-end gap-4" style="gap: 10px;">
                            <i class="fa-solid fa-circle text-success me-2"></i>
                            <span> <b>Weight</b></span>
                            <div class="position-relative d-inline-block dropdown">
                                <button class="btn btn-white border-dark d-flex align-items-center dropdown-toggle"
                                    type="button" @click.stop="isMonthOpen = !isMonthOpen"
                                    style="height: 30px; border-width: 1px; gap: 5px; position: relative; z-index: 10001;">
                                    <b>This month </b>
                                </button>

                                <div v-if="isMonthOpen" class="dropdown-menu show custom-floating-menu">
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('1')">1</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('2')">2</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('3')">3</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('4')">4</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('5')">5</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('6')">6</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('7')">7</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('8')">8</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('9')">9</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('10')">10</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('11')">11</a>
                                    <a class="dropdown-item" href="#" @click.prevent="selectMonth('12')">12</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="position: relative; height: 500px; width: 100%; margin-top: 20px;">
                        <Line :data="chartData" :options="chartOptions" />
                    </div>
                </div>
            </div>
        </div>
        <hr style="border-top: 3px solid black; opacity: 1;">
        <h5 class="ms-2" style="font-size: 30px;"><b>Membership Card</b></h5>

        <div class="card mt-2 border-0" style="border-radius: 20px;">
            <div class="card-body" style="background-color: #B9B9B9; border-radius: 20px; padding: 30px;">
                <div class="row justify-content-center g-4">

                    <div class="col-md-4">
                        <div class="card h-100 border-0 pricing-card bg-black">
                            <div class="card-body d-flex flex-column">
                                <div class="header-section">
                                    <h3 class="text-white fw-bold">Free Member</h3>
                                    <h5 class="text-white fw-bold">0 VND /month</h5>
                                </div>

                                <div class="features-section flex-grow-1 my-4">
                                    <p class="text-white fw-bold">+ Model: Limited access.</p>
                                    <p class="text-white fw-bold">+ Workout hours: Only allowed during off-peak hours (9
                                        AM - 3 PM).</p>
                                    <p class="text-white fw-bold">+ Amenities: * Use of basic exercise equipment area.
                                        Shared lockers.</p>
                                    <p class="text-white fw-bold">+ Technology: View basic health metrics on the app.
                                    </p>
                                    <p class="text-white fw-bold">+ Support: Video tutorials on the app.</p>
                                </div>

                                <button class="btn btn-light-custom fw-bold w-100"><b>Your current plan</b></button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card h-100 border-0 pricing-card bg-orange-custom">
                            <div class="card-body d-flex flex-column">
                                <div class="header-section">
                                    <h3 class="text-white fw-bold">Plus Membership</h3>
                                    <h5 class="text-white fw-bold">132,000 VND /month</h5>
                                </div>

                                <div class="features-section flex-grow-1 my-4 ">
                                    <p class="text-white fw-bold">+ Model: Unlimited 24/7 access.</p>
                                    <p class="text-white fw-bold">+ Workout Hours: Full-time.</p>
                                    <p class="text-white fw-bold">+ Amenities: * Full access to Gym, Cardio, and Yoga.
                                        Unlimited Group X.</p>
                                    <p class="text-white fw-bold">+ Technology: * Monthly in-depth InBody analytics.</p>
                                    <p class="text-white fw-bold">+ Personalized workout plans.</p>
                                    <p class="text-white fw-bold">+ Support: One monthly PT session.</p>
                                </div>

                                <button class="btn btn-light-custom fw-bold w-100"><b>Upgrade to Plus</b></button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card h-100 border-0 pricing-card bg-danger-custom">
                            <div class="card-body d-flex flex-column">
                                <div class="header-section">
                                    <h3 class="text-white fw-bold">VIP Member</h3>
                                    <h5 class="text-white fw-bold">522,500 VND /month</h5>
                                </div>

                                <div class="features-section flex-grow-1 my-4">
                                    <p class="text-white fw-bold">+ Model: Exclusive Premium.</p>
                                    <p class="text-white fw-bold">+ Amenities: * All Plus benefits. Smart locker. Free
                                        clothes/water.</p>
                                    <p class="text-white fw-bold">+ Technology: * Real-time pace tracking system.</p>
                                    <p class="text-white fw-bold">+ Nutrition plan updated weekly by experts.</p>
                                    <p class="text-white fw-bold">+ PT & Mentor: * One-on-one personal trainer.</p>
                                    <p class="text-white fw-bold">+ Priority scheduling for classes/PT.</p>
                                </div>

                                <button class="btn btn-light-custom fw-bold w-100"><b>Upgrade to VIP</b></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Line } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

// Đăng ký các thành phần bắt buộc của Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
    components: { Line },
    data() {
        return {
            isMonthOpen: false,
            chartData: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        backgroundColor: "#FF383C",
                        borderColor: "#FF383C",
                        data: [0, 50, 100, 150, 200, 250, 300],
                        tension: 0.4, // Tạo độ cong mềm mại cho đường kẻ
                        fill: false
                    },
                ],
            },
            methods: {
                selectMonth(name) {
                    console.log("Selected:", name);
                    this.isMonthOpen = false; // Thu lại sau khi chọn
                },
                handleOutsideClick(e) {
                    // Nếu click ra ngoài vùng dropdown thì thu lại
                    if (this.isMonthOpen && !this.$el.contains(e.target)) {
                        this.isMonthOpen = false;
                    }
                }
            },
            mounted() {
                // Lắng nghe sự kiện click toàn trang khi component được tạo
                document.addEventListener('click', this.handleOutsideClick);
            },
            beforeUnmount() {
                // Hủy lắng nghe khi chuyển trang để tránh rò rỉ bộ nhớ
                document.removeEventListener('click', this.handleOutsideClick);
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            },
        };
    },
};
</script>
<style>
.custom-floating-menu {
    /* Tách biệt hoàn toàn khỏi nút bấm để không che mất */
    position: absolute !important;
    top: 35px !important;
    /* Đẩy xuống dưới nút bấm */
    right: 0 !important;
    /* Căn lề phải */
    left: auto !important;

    /* Đảm bảo nằm trên biểu đồ và các lớp khác */
    z-index: 10000 !important;

    /* Giao diện Flat */
    display: block !important;
    min-width: 50px;
    background-color: #ffffff;
    border: 1px solid #e1e9f4;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
}

.dropdown-item {
    padding: 8px 16px;
    font-size: 14px;
    color: #334155;
}

.dropdown-item:hover {
    background-color: #f8faff;
    color: #0d6efd;
}

/* Tăng chiều cao của container ngoài cùng nếu cần */
.chart-container-parent {
    height: auto !important;
    /* Đảm bảo nó giãn theo nội dung bên trong */
}

/* Đây là nơi quyết định chiều cao của biểu đồ */
.chart-wrapper {
    position: relative;
    /* Cách 1: Tăng tỷ lệ (giá trị thứ 2 càng nhỏ thì biểu đồ càng cao) */
    aspect-ratio: 21 / 7;

    /* Cách 2: Ép chiều cao tối thiểu lớn hơn */
    min-height: 450px;

    width: 100%;
}

.bg-black {
    background-color: #1a1a1a !important;
}

.bg-orange-custom {
    background-color: #FF8D28 !important;
}

.bg-danger-custom {
    background-color: #FF383C !important;
}

.pricing-card {
    border-radius: 25px !important;
    padding: 10px;
    transition: transform 0 ease;
}

.pricing-card:hover {
    transform: translateY(-10px);
}

/* Định dạng các phần nội dung */
.header-section {
    min-height: 80px;
    /* Đảm bảo tiêu đề luôn thẳng hàng */
}

.features-section p {
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.5;
}

/* Nút bấm nền trắng chữ đen */
.btn-light-custom {
    background-color: #ffffff !important;
    color: #000000 !important;
    border: none;
    border-radius: 15px;
    padding: 12px;
    text-transform: capitalize;
}

.btn-light-custom:hover {
    background-color: #f0f0f0 !important;
}

/* Flex-grow-1 giúp phần danh sách chiếm hết khoảng trống, đẩy button xuống đáy */
.flex-grow-1 {
    flex-grow: 1;
}
</style>