<template>
    <div class="wrapper">
        <!--start header wrapper-->
        <div class="header-wrapper">
            <!--start header -->
            <header>
                <div class="topbar d-flex align-items-center">
                    <nav class="navbar navbar-expand">
                        <div class="topbar-logo-header">
                            <div class="">
                                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
                            </div>
                            <div class="">
                                <h4 class="logo-text">Rocker</h4>
                            </div>
                        </div>
                        <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
                        <div class="search-bar flex-grow-1">
                            <div class="position-relative search-bar-box">
                                <input type="text" class="form-control search-control" placeholder="Type to search...">
                                <span class="position-absolute top-50 search-show translate-middle-y"><i
                                        class='bx bx-search'></i></span>
                                <span class="position-absolute top-50 search-close translate-middle-y"><i
                                        class='bx bx-x'></i></span>
                            </div>
                        </div>
                        <div class="top-menu ms-auto">
                            <ul class="navbar-nav align-items-center">
                                <li class="nav-item mobile-search-icon">
                                    <a class="nav-link" href="#"> <i class='bx bx-search'></i>
                                    </a>
                                </li>
                                <li class="nav-item dropdown dropdown-large">
                                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false"> <i class='bx bx-category'></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <div class="row row-cols-3 g-3 p-3">
                                            <div class="col text-center">
                                                <div class="app-box mx-auto bg-gradient-cosmic text-white"><i
                                                        class='bx bx-group'></i>
                                                </div>
                                                <div class="app-title">Teams</div>
                                            </div>
                                            <div class="col text-center">
                                                <div class="app-box mx-auto bg-gradient-burning text-white"><i
                                                        class='bx bx-atom'></i>
                                                </div>
                                                <div class="app-title">Projects</div>
                                            </div>
                                            <div class="col text-center">
                                                <div class="app-box mx-auto bg-gradient-lush text-white"><i
                                                        class='bx bx-shield'></i>
                                                </div>
                                                <div class="app-title">Tasks</div>
                                            </div>
                                            <div class="col text-center">
                                                <div class="app-box mx-auto bg-gradient-kyoto text-dark"><i
                                                        class='bx bx-notification'></i>
                                                </div>
                                                <div class="app-title">Feeds</div>
                                            </div>
                                            <div class="col text-center">
                                                <div class="app-box mx-auto bg-gradient-blues text-dark"><i
                                                        class='bx bx-file'></i>
                                                </div>
                                                <div class="app-title">Files</div>
                                            </div>
                                            <div class="col text-center">
                                                <div class="app-box mx-auto bg-gradient-moonlit text-white"><i
                                                        class='bx bx-filter-alt'></i>
                                                </div>
                                                <div class="app-title">Alerts</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown dropdown-large">
                                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                            class="alert-count">7</span>
                                        <i class='bx bx-bell'></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:;">
                                            <div class="msg-header">
                                                <p class="msg-header-title">Notifications</p>
                                                <p class="msg-header-clear ms-auto">Marks all as read</p>
                                            </div>
                                        </a>
                                        <div class="header-notifications-list">
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-primary text-primary"><i
                                                            class="bx bx-group"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">New Customers<span
                                                                class="msg-time float-end">14 Sec
                                                                ago</span></h6>
                                                        <p class="msg-info">5 new user registered</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-danger text-danger"><i
                                                            class="bx bx-cart-alt"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">New Orders <span
                                                                class="msg-time float-end">2 min
                                                                ago</span></h6>
                                                        <p class="msg-info">You have recived new orders</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-success text-success"><i
                                                            class="bx bx-file"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">24 PDF File<span
                                                                class="msg-time float-end">19 min
                                                                ago</span></h6>
                                                        <p class="msg-info">The pdf files generated</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-warning text-warning"><i
                                                            class="bx bx-send"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Time Response <span
                                                                class="msg-time float-end">28 min
                                                                ago</span></h6>
                                                        <p class="msg-info">5.1 min avarage time response</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-info text-info"><i
                                                            class="bx bx-home-circle"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">New Product Approved <span
                                                                class="msg-time float-end">2 hrs ago</span></h6>
                                                        <p class="msg-info">Your new product has approved</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-danger text-danger"><i
                                                            class="bx bx-message-detail"></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">New Comments <span
                                                                class="msg-time float-end">4 hrs
                                                                ago</span></h6>
                                                        <p class="msg-info">New customer comments recived</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-success text-success"><i
                                                            class='bx bx-check-square'></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Your item is shipped <span
                                                                class="msg-time float-end">5 hrs
                                                                ago</span></h6>
                                                        <p class="msg-info">Successfully shipped your item</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-primary text-primary"><i
                                                            class='bx bx-user-pin'></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">New 24 authors<span
                                                                class="msg-time float-end">1 day
                                                                ago</span></h6>
                                                        <p class="msg-info">24 new authors joined last week</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="notify bg-light-warning text-warning"><i
                                                            class='bx bx-door-open'></i>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Defense Alerts <span
                                                                class="msg-time float-end">2 weeks
                                                                ago</span></h6>
                                                        <p class="msg-info">45% less alerts last 4 weeks</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="javascript:;">
                                            <div class="text-center msg-footer">View All Notifications</div>
                                        </a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown dropdown-large">
                                    <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                            class="alert-count">8</span>
                                        <i class='bx bx-comment'></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:;">
                                            <div class="msg-header">
                                                <p class="msg-header-title">Messages</p>
                                                <p class="msg-header-clear ms-auto">Marks all as read</p>
                                            </div>
                                        </a>
                                        <div class="header-message-list">
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-1.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Daisy Anderson <span
                                                                class="msg-time float-end">5 sec
                                                                ago</span></h6>
                                                        <p class="msg-info">The standard chunk of lorem</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-2.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Althea Cabardo <span
                                                                class="msg-time float-end">14
                                                                sec ago</span></h6>
                                                        <p class="msg-info">Many desktop publishing packages</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-3.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Oscar Garner <span
                                                                class="msg-time float-end">8 min
                                                                ago</span></h6>
                                                        <p class="msg-info">Various versions have evolved over</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-4.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Katherine Pechon <span
                                                                class="msg-time float-end">15
                                                                min ago</span></h6>
                                                        <p class="msg-info">Making this the first true generator</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-5.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Amelia Doe <span
                                                                class="msg-time float-end">22 min
                                                                ago</span></h6>
                                                        <p class="msg-info">Duis aute irure dolor in reprehenderit</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-6.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Cristina Jhons <span
                                                                class="msg-time float-end">2 hrs
                                                                ago</span></h6>
                                                        <p class="msg-info">The passage is attributed to an unknown</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-7.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">James Caviness <span
                                                                class="msg-time float-end">4 hrs
                                                                ago</span></h6>
                                                        <p class="msg-info">The point of using Lorem</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-8.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Peter Costanzo <span
                                                                class="msg-time float-end">6 hrs
                                                                ago</span></h6>
                                                        <p class="msg-info">It was popularised in the 1960s</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-9.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">David Buckley <span
                                                                class="msg-time float-end">2 hrs
                                                                ago</span></h6>
                                                        <p class="msg-info">Various versions have evolved over</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-10.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Thomas Wheeler <span
                                                                class="msg-time float-end">2 days
                                                                ago</span></h6>
                                                        <p class="msg-info">If you are going to use a passage</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item" href="javascript:;">
                                                <div class="d-flex align-items-center">
                                                    <div class="user-online">
                                                        <img src="../../assets//images/avatars/avatar-11.png"
                                                            class="msg-avatar" alt="user avatar">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h6 class="msg-name">Johnny Seitz <span
                                                                class="msg-time float-end">5 days
                                                                ago</span></h6>
                                                        <p class="msg-info">All the Lorem Ipsum generators</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="javascript:;">
                                            <div class="text-center msg-footer">View All Messages</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="user-box dropdown">
                            <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../assets//images/avatars/avatar-2.png" class="user-img" alt="user avatar">
                                <div class="user-info ps-3">
                                    <p class="user-name mb-0">Pauline Seitz</p>
                                    <p class="designattion mb-0">Web Designer</p>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="javascript:;"><i
                                            class="bx bx-user"></i><span>Profile</span></a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:;"><i
                                            class="bx bx-cog"></i><span>Settings</span></a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:;"><i
                                            class='bx bx-home-circle'></i><span>Dashboard</span></a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:;"><i
                                            class='bx bx-dollar-circle'></i><span>Earnings</span></a>
                                </li>
                                <li><a class="dropdown-item" href="javascript:;"><i
                                            class='bx bx-download'></i><span>Downloads</span></a>
                                </li>
                                <li>
                                    <div class="dropdown-divider mb-0"></div>
                                </li>
                                <li><a class="dropdown-item" href="javascript:;"><i
                                            class='bx bx-log-out-circle'></i><span>Logout</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <!--end header -->
            <!--navigation-->
            <div class="nav-container primary-menu">
                <div class="mobile-topbar-header">
                    <div>
                        <img src="../../assets//images/logo-icon.png" class="logo-icon" alt="logo icon">
                    </div>
                    <div>
                        <h4 class="logo-text">Rukada</h4>
                    </div>
                    <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
                    </div>
                </div>
                <nav class="navbar navbar-expand-xl w-100">
                    <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">


                        <!-- admin1 -->
                        <li class="nav-item">
                            <router-link to="/admin/sanpham">
                                <a class="nav-link" href="/admin/sanpham">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">San Pham</div>
                                </a>
                            </router-link>
                        </li>

                        <!-- Phong  -->
                        <li class="nav-item">
                            <router-link to="/admin1/phong">
                                <a class="nav-link" href="/admin/phong">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Phong</div>
                                </a>
                            </router-link>
                        </li>

                        <!-- tuyendung  -->
                        <li class="nav-item dropdown">
                            <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret show"
                                data-bs-toggle="dropdown" aria-expanded="true">
                                <div class="parent-icon"><i class="bx bx-home-circle"></i>
                                </div>
                                <div class="menu-title">Nhà tuyển dụng</div>
                            </a>
                            <ul class="dropdown-menu show" data-bs-popper="static">
                                <li> <router-link to="/admin2/congviec">

                                        <a class="dropdown-item" href="/admin2/congviec">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Công việc</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li> <router-link to="/admin2/nhanvien">
                                        <a class="dropdown-item" href="/admin2/nhanvien">

                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Nhân viên</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/admin2/nhatuyendung">
                                        <a class="dropdown-item" href="/admin2/nhatuyendung">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Nhà tuyển dụng
                                            </div>
                                        </a>
                                    </router-link>
                                </li>
                            </ul>
                        </li>




                        <li class="nav-item">
                            <router-link to="/admin2/danhsachungtuyen">
                                <a class="nav-link" href="/admin2/danhsachungtuyen">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Danh sách tuyển dụng</div>
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin2/danhmuc">
                                <a class="nav-link" href="/admin2/danhmuc">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Danhh mục</div>
                                </a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin2/ungvien">
                                <a class="nav-link" href="/admin2/ungvien">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Ứng viên</div>
                                </a>
                            </router-link>
                        </li>
                        

                        <li class="nav-item dropdown">
                            <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret show"
                                data-bs-toggle="dropdown" aria-expanded="true">
                                <div class="parent-icon"><i class="bx bx-home-circle"></i>
                                </div>
                                <div class="menu-title">Trang chu</div>
                            </a>
                            <ul class="dropdown-menu show" data-bs-popper="static">
                                <li class="nav-item">
                                    <router-link to="/home">
                                        <a class="dropdown-item" href="/home">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Home</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/home/chitiet">
                                        <a class="dropdown-item" href="home/chitiet">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Chi tiết ứng tuyển</div>
                                        </a>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- sinhvien -->
                        <li class="nav-item">
                            <router-link to="/admin/sinhvien">
                                <a class="nav-link" href="/admin/sinhvien">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Sinh viên</div>
                                </a>
                            </router-link>
                        </li>
                        <!-- btvn  -->
                        
                        <li class="nav-item dropdown">
                            <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret show"
                                data-bs-toggle="dropdown" aria-expanded="true">
                                <div class="parent-icon"><i class="bx bx-home-circle"></i>
                                </div>
                                <div class="menu-title">Bai Hat</div>
                            </a>
                            <ul class="dropdown-menu show" data-bs-popper="static">
                                <li class="nav-item">
                                    <router-link to="/admin/nghesi">
                                        <a class="dropdown-item" href="/admin/nghesi">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Nghe si</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/admin/baihat">
                                        <a class="dropdown-item" href="/admin/baihat">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Bai Hat</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/admin/home">
                                        <a class="dropdown-item" href="/admin/home">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Home</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/admin/album">
                                        <a class="dropdown-item" href="/admin/album">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Album</div>
                                        </a>
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- btvn3 -->

                        <li class="nav-item">
                            <router-link to="/btvn3">
                                <a class="nav-link" href="/btvn3">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Bai Viet</div>
                                </a>
                            </router-link>
                        </li>

                        <!-- ontap -->
                        <li class="nav-item">
                            <router-link to="/test/ontap1.vue">
                                <a class="nav-link" href="/test/ontap1.vue">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Bai hoc</div>
                                </a>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link to="/test/ontap2.vue">
                                <a class="nav-link" href="/test/ontap2.vue">
                                    <div class="parent-icon"><i class='bx bx-cookie'></i>
                                    </div>
                                    <div class="menu-title">Khoa hoc</div>
                                </a>
                            </router-link>
                        </li>

                        <!-- truyen  -->
                        <li class="nav-item dropdown">
                            <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret show"
                                data-bs-toggle="dropdown" aria-expanded="true">
                                <div class="parent-icon"><i class="bx bx-home-circle"></i>
                                </div>
                                <div class="menu-title">Truyen</div>
                            </a>
                            <ul class="dropdown-menu show" data-bs-popper="static">
                                <li class="nav-item">
                                    <router-link to="/truyen/cardtruyen.vue">
                                        <a class="dropdown-item" href="/truyen/cardtruyen.vue">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Card truyen</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/truyen/chitiettruyen.vue">
                                        <a class="dropdown-item" href="/truyen/chitiettruyen.vue">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Chi tiet truyen</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/truyen/danhsachtruyen.vue">
                                        <a class="dropdown-item" href="/truyen/danhsachtruyen.vue">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>Danh sach truyen</div>
                                        </a>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/truyen/theloai.vue">
                                        <a class="dropdown-item" href="/truyen/theloai.vue">
                                            <div class="menu-title"><i class="bx bx-right-arrow-alt"></i>The loai</div>
                                        </a>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <!--end navigation-->
        </div>
        <!--end header wrapper-->
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <!--end page wrapper -->
        <!--start overlay-->
        <div class="overlay toggle-icon"></div>
        <!--end overlay-->
        <!--Start Back To Top Button--> <a href="javaScript:;" class="back-to-top"><i
                class='bx bxs-up-arrow-alt'></i></a>
        <!--End Back To Top Button-->
        <div class="p-3 mb-2 mt-5 bg-primary text-white">
        <div class="row mt-5 ">
            <div class="col-lg-5 col-md-6 ">
                <p class="text-decoration-underline ms-5"> <b> DZFULLSTACK</b> </p>
                <img src="https://img.freepik.com/premium-vector/cute-cat-chill-pillow-with-juice-cartoon-illustration-animal-holiday-concept-isolated-flat-cartoon-style_138676-3445.jpg" class="rounded mx-auto d-block img-thumbnail" style="width: 19%;" alt="...">
                <div class="text-decoration-underline ms-5">
                    This text should overflow the parent.
                </div>

            </div>
            <div class="col-lg-2 col-md-6">
                <p class="text-decoration-underline"> <b>PRODUCTS</b> </p>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 ">
                <p class="text-decoration-underline"> <b>USERFULLINK</b> </p>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 ">
                <p class="text-decoration-underline"> <b>CONTACT</b> </p>
                <div class="card">
                    <ul class="list-group list-group-flush list-group">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        
    </div>
</template>
<script>
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/plugins/metismenu/js/metisMenu.min.js";
import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
import "../../assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
import "../../assets/plugins/chartjs/js/Chart.min.js";
import "../../assets/plugins/chartjs/js/Chart.extension.js";
import "../../assets/js/index.js";
import "../../assets/js/app.js";
import "../../assets/js/pace.min.js";
export default {

}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css");
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/css/pace.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
</style>