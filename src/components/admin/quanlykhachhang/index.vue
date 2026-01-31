<template>
    <div>
        <div class="card">
            <div class="row">
                <div class="col-lg-8">
                    <div class="col-lg-12 mt-3">
                        <div class="row">
                            <div class="col-lg-10">
                                <div class="row">
                                    <div class="iq-search-bar d-none d-md-block">
                                        <form action="#" class="searchbox">
                                            <input type="text" class="text search-input"
                                                placeholder="Type here to search...">
                                            <a class="search-link" href="#"><i class="ri-search-line"></i></a>

                                        </form>
                                    </div>

                                    <button class="btn btn-primary">
                                        Filter
                                    </button>
                                </div>


                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-success text-center">
                                    Add new member
                                </button>
                            </div>


                        </div>



                    </div>





                    <div class="card rounded-4 border-0 shadow-sm p-4">

                        <!-- Header -->
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5 class="mb-0 fw-semibold">Member list</h5>
                            <a href="#" class="text-primary small">
                                View All &gt;
                            </a>
                        </div>

                        <!-- Table -->
                        <div class="table-responsive">
                            <table class="table align-middle mb-0">
                                <thead class="table-light rounded">
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Gmail</th>
                                        <th>Password</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>hehe</td>
                                        <td>13</td>
                                        <td>hehe@gmail.com</td>
                                        <td>123456</td>
                                        <td class="text-danger">-$15.00</td>
                                    </tr>
                                    <tr>
                                        <td>hhhh24</td>
                                        <td>22</td>
                                        <td>hihi@gmail.com</td>
                                        <td>123556</td>
                                        <td class="text-danger">-$15.00</td>
                                    </tr>
                                    <tr>
                                        <td>eee</td>
                                        <td>31</td>
                                        <td>haha@gmail.com</td>
                                        <td>123556</td>
                                        <td class="text-danger">-$15.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>





                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height ">
                            <div class="iq-card-header   text-center ">
                                <div class="iq-header-title ">
                                    <h4 class="card-title ">Member profile data</h4>
                                </div>

                            </div>
                            <div class="iq-card-body">
                                <div class="m-auto d-block text-center pb-3">
                                    <div class="iq-user mb-3">
                                        <img class="avatar-70 rounded-circle"
                                            src="https://i.pinimg.com/originals/54/8a/0f/548a0f06f86700bb0c091fd85515c92d.jpg"
                                            alt="">
                                    </div>
                                    <h5>Name: Nick Jash</h5>
                                    <h5>tel: 0987654321</h5>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                            <div class="iq-card-header d-flex justify-content-between">
                                <div class="iq-header-title">
                                    <h4 class="card-title">History</h4>
                                </div>

                            </div>
                            <div class="iq-card-body">
                                <div class="table-responsive">
                                    <table class="table mb-0 table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col">Client</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Amount</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Ira Membrit</td>
                                                <td>18/10/2019</td>
                                                <td>$122</td>


                                            </tr>
                                            <tr>
                                                <td>Ira Membrat</td>
                                                <td>18/10/2019</td>
                                                <td>$3333</td>


                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>