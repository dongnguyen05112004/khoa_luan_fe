<template>
    <div class="container-fluid p-0 bg-white min-vh-100">
        <header class="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">
            <div class="fw-bold h5 m-0 text-uppercase">LOGO</div>

            <div class="d-flex align-items-center">
                <nav class="d-flex align-items-center gap-4 me-4">
                    <a href="#" class="text-decoration-none text-secondary x-small fw-semibold text-nowrap">Trang
                        Chủ</a>
                    <a href="#" class="text-decoration-none text-secondary x-small fw-semibold text-nowrap">Người
                        Dùng</a>
                    <a href="#" class="text-decoration-none text-secondary x-small fw-semibold text-nowrap">Quản Trị</a>
                </nav>

                <button type="button" class="btn btn-dark btn-sm px-3 py-2 fw-bold text-nowrap "
                    style="min-width: 100px; font-size: 0.75rem; border-radius: 6px;">
                    Việt Nam
                </button>
            </div>
        </header>
        <main class="container py-4">
            <div class="row align-items-center py-5 justify-content-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="fw-bold lh-sm mb-3" style="font-size: 2.8rem;">
                        Elevate Your <br /> Strength
                    </h1>
                    <p class="text-muted small mb-4 pe-lg-5">
                        Unlock your potential. Join our gym for state-of-the-art equipment and inspiring classes. Start
                        your fitness journey today!
                    </p>
                    <button type="button" class="btn btn-dark rounded-pill px-4 py-2 fw-bold btn-sm">
                        Learn more
                    </button>
                </div>
                <div class="col-lg-4 text-center">
                    <img src="https://i.pinimg.com/736x/d2/04/d7/d204d7256977f11f733a7ddd73c92e5e.jpg" alt="Hero Image"
                        class="img-fluid custom-rounded shadow-lg w-100" />
                </div>
            </div>
            <div class="container py-4">
                <h2 class="text-center fw-bold mb-5 h3">Features</h2>

                <div class="position-relative px-lg-5">
                    <div class="row g-3 justify-content-center">
                        <div v-for="i in 3" :key="i" class="col-md-4 col-lg-3">
                            <div class="card h-100 border-0 shadow-sm p-3 rounded-4">
                                <div class="bg-secondary rounded-circle mb-3 mx-auto"
                                    style="width: 40px; height: 40px; opacity: 0.5;"></div>
                                <div class="card-body p-0 text-center">
                                    <h3 class="card-title fw-bold h5 mb-2">Title</h3>
                                    <p class="card-text text-muted mb-3" style="font-size: 0.85rem; line-height: 1.4;">
                                        Unlock your potential. Join our gym for state-of-the-art equipment and inspiring
                                        classes.
                                    </p>
                                    <a href="#" class="text-dark fw-bold text-decoration-underline x-small">Button
                                        Text</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <button type="button" class="btn btn-dark px-4 py-2 fw-bold text-uppercase btn-sm"
                        style="letter-spacing: 1px;">
                        Button Text
                    </button>
                </div>
            </div>
        </main>


    </div>
</template>
<style scoped>
/* Bo góc cho ảnh (Hero Image) */
.custom-rounded {
    /* Bo góc khoảng 2rem (32px) hoặc hơn để nhìn hiện đại */
    border-radius: 2.5rem !important;
    object-fit: cover;
}

/* Bo góc cho các thẻ Card Features */
.rounded-4 {
    border-radius: 1.5rem !important;
}

/* 1. Ép màu sắc hiển thị cố định cho Button Dark */
.btn-dark {
    background-color: #000000 !important;
    /* Màu nền đen */
    color: #ffffff !important;
    /* Màu chữ trắng */
    opacity: 1 !important;
    /* Luôn hiển thị 100% */
    display: inline-block !important;
    /* Đảm bảo là khối hiển thị */
}

/* 2. Tách các chữ trong Nav rõ hơn */
nav.gap-4 a {
    margin-right: 10px;
    /* Thêm khoảng cách dự phòng */
    color: #475569 !important;
    /* Màu xám đậm cho chữ dễ đọc */
}

/* 3. Đảm bảo nút Việt Nam không bị ẩn */
header .btn-dark {
    visibility: visible !important;
}

.x-small {
    font-size: 0.85rem;
}

.gap-4 {
    gap: 1.5rem !important;
}

.text-nowrap {
    white-space: nowrap;
}
</style>