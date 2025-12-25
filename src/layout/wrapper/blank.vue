<template>
    <div class="wrapper"> 
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