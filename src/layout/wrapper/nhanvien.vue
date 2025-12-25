<template>
    <div class="wrapper">
        <!-- Sidebar  -->
        <div class="iq-sidebar shadow-sm" style="background: #ffffff; border-right: 1px solid #f0f4f8;">
            <div class="iq-sidebar-logo d-flex justify-content-between align-items-center px-3">
                <a href="/" class="d-flex align-items-center text-decoration-none">
                    <b class="h5 mt-3">Gym Elite</b>
                </a>
                <div class="iq-menu-bt-sidebar">
                    <div class="iq-menu-bt align-self-center">
                        <div class="wrapper-menu">
                            <div class="main-circle"><i class="ri-arrow-left-s-line text-primary"></i></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="sidebar-scrollbar">
                <nav class="iq-sidebar-menu mt-3">
                    <ul id="iq-sidebar-toggle" class="iq-menu">
                        <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>HÀNH TRÌNH CỦA TÔI</span></li>
                        <li class="active">
                            <a href="#" class="iq-waves-effect"><i class="ri-dashboard-fill"></i><span>Tổng
                                    quan</span></a>
                        </li>
                        <li>
                            <a href="#" class="iq-waves-effect"><i class="ri-heart-pulse-line"></i><span>Chỉ số sức
                                    khỏe</span></a>
                        </li>
                        <li>
                            <a href="#" class="iq-waves-effect"><i class="ri-calendar-todo-line"></i><span>Lịch tập
                                    luyện</span></a>
                        </li>

                        <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>DỊCH VỤ & GÓI TẬP</span></li>
                        <li>
                            <a href="#" class="iq-waves-effect"><i class="ri-vip-crown-2-line"></i><span>Gói tập hiện
                                    tại</span></a>
                        </li>
                        <li>
                            <a href="#" class="iq-waves-effect"><i class="ri-user-star-line"></i><span>Huấn luyện viên
                                    (PT)</span></a>
                        </li>
                        <li>
                            <a href="#" class="iq-waves-effect"><i class="ri-shopping-bag-3-line"></i><span>Cửa hàng bổ
                                    sung</span></a>
                        </li>

                        <li class="iq-menu-title"><i class="ri-subtract-line"></i><span>HỖ TRỢ</span></li>
                        <li>
                            <a href="#" class="iq-waves-effect"><i class="ri-questionnaire-line"></i><span>Hỏi đáp
                                    (FAQ)</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- TOP Nav Bar -->
        <header class="iq-top-navbar shadow-sm" style="background-color: #f8faff; border-bottom: 1px solid #e1e9f4;">
            <div class="iq-navbar-custom d-flex align-items-center justify-content-between px-4 py-2">

                <div class="iq-header-left">
                    <div class="btn-group">
                        <p class="h5 mt-2">Nhan vien</p>
                    </div>
                </div>

                <div class="  d-flex align-items-center gap-4" style="gap: 5px;">

                    <button class="btn btn-white rounded-circle border-dark " type="button"
                        style="width: 40px; height: 40px;">
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </button>

                    <button class="btn btn-white rounded-circle border-dark " type="button"
                        style="width: 40px; height: 40px;">
                        <i class="fa-regular fa-bell"></i>
                    </button>
 
                    <div class="position-relative d-inline-block">
                        <button class="btn btn-white border-dark rounded-pill  d-flex align-items-center " type="button"
                            data-toggle="collapse" data-target="#user-menu"
                            style="height: 40px; border-width: 1px; gap: 5px;"><i class="fa-regular fa-user"></i>
                            <b>User name <i class="fa-solid fa-angle-down"></i></b>
                        </button>

                        <ul id="user-menu" class="iq-submenu collapse text-start" data-parent="#iq-sidebar-toggle">
                            <li> <i class="ri-profile-line me-2"></i>Hồ sơ cá nhân </li>
                            <li><i class="ri-vip-crown-line me-2"></i>Gói tập của tôi</li>
                            <li><i class="ri-history-line me-2"></i>Lịch sử tập luyện</li>
                            <li><i class="ri-logout-box-r-line me-2"></i>Đăng xuất</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <!-- TOP Nav Bar END -->
        <!-- Page Content  -->
        <div id="content-page" class="content-page">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
     
    <div class="overlay toggle-icon"></div>
    <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
    
    <footer class="page-footer text-center">
        <p class="mb-0">Đông - Quang - Trọng - Đức - Trang</p>
    </footer>
</template>
<script>
import "../../assets/js/jquery.min.js";
import "../../assets/js/rtl.js";
import "../../assets/js/customizer.js";
import "../../assets/js/popper.min.js";
import "../../assets/js/bootstrap.min.js";
import "../../assets/js/jquery.appear.js";
import "../../assets/js/countdown.min.js";
import "../../assets/js/waypoints.min.js";
import "../../assets/js/jquery.counterup.min.js";
import "../../assets/js/wow.min.js";
import "../../assets/js/apexcharts.js";
import "../../assets/js/slick.min.js";
import "../../assets/js/select2.min.js";
import "../../assets/js/jquery.magnific-popup.min.js";
import "../../assets/js/smooth-scrollbar.js";
import "../../assets/js/lottie.js";
import "../../assets/js/core.js";
import "../../assets/js/charts.js";
import "../../assets/js/animated.js";
import "../../assets/js/kelly.js";
import "../../assets/js/morris.js";
import "../../assets/js/maps.js";
import "../../assets/js/worldLow.js";
import "../../assets/js/chartist/chartist.min.js";
import "../../assets/js/chart-custom.js";
import "../../assets/js/custom.js";
export default {

}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css");

@import "../../assets/css/bootstrap.min.css";
@import "../../assets/js/chartist/chartist.min.css";
@import "../../assets/css/typography.css";
@import "../../assets/css/style.css";
@import "../../assets/css/responsive.css";

/* Hiệu ứng xoay mũi tên */
button[aria-expanded="true"] .arrow-icon {
    transform: rotate(180deg);
    transition: 0.3s;
}

/* Hiệu ứng hover cho các mục trong menu */
.nav-link:hover {
    background-color: #f8faff;
    color: #0d6efd !important;
    transition: 0.2s;
}

/* Đảm bảo menu không bị lỗi font */
.nav-link {
    font-size: 13px;
    font-weight: 500;
    color: #334155 !important;
    text-decoration: none;
}
</style>