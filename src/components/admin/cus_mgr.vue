<template>
    <div class="row bg-light min-vh-100 p-4">
        <div class="col-lg-7">
            <div class="d-flex gap-3 align-items-center mb-4">
                <div class="flex-grow-1">
                    <input type="text" class="form-control border-0 shadow-sm" placeholder="Search..."
                        style="background-color: #D1D1D6; height: 50px; border-radius: 12px;">
                </div>

                <button class="btn border-0 shadow-sm"
                    style="height: 50px; border-radius: 12px; min-width: 100px; background-color: #D1D1D6;">
                    Filter
                </button>

                <button class="btn btn-success border-0 shadow-sm px-4"
                    style="height: 50px; border-radius: 12px; background-color: #00c853; white-space: nowrap;">
                    Add New Member
                </button>
            </div>

            <div class="card border-0 shadow-sm" style="border-radius: 30px;">
                <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h4 class="fw-bold mb-0"><b>Member list</b></h4>
                        <button class="btn btn-link text-decoration-none text-dark fw-bold"><b>View All</b></button>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-bordered align-middle">
                            <thead>
                                <tr style="background-color: #f8f9fa;">
                                    <th class="py-3 px-4" style="border-radius: 15px 0 0 15px;"><b>Name</b></th>
                                    <th class="py-3 px-4"><b>Date</b></th>
                                    <th class="py-3 px-4"><b>Gmail</b></th>
                                    <th class="py-3 px-4"><b>Password</b></th>
                                    <th class="py-3 px-4" style="border-radius: 0 15px 15px 0;"><b>Description</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in memberData" :key="index">
                                    <td class="py-4 px-4  ">{{ item.name }}</td>
                                    <td class="py-4 px-4  ">{{ item.date }}</td>
                                    <td class="py-4 px-4">
                                        <a href="#" class="text-decoration-none" style="color: #6c8eff;">{{ item.gmail
                                        }}</a>
                                    </td>
                                    <td class="py-4 px-4  ">{{ item.pass }}</td>
                                    <td class="py-4 px-4 fw-bold text-dark">{{ item.desc }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-5">

            <div class="card border-0 mb-4" style="border-radius: 40px; background-color: #E2E1D3;">
                <div class="card-body p-4 text-center">
                    <h5 class="text-white fw-bold mb-4" style="font-size: 2rem;">Member Profile Details</h5>

                    <div class="mx-auto mb-4 d-flex align-items-center justify-content-center"
                        style="width: 130px; height: 130px; background-color: #F9F4E8; border-radius: 50%; border: 6px solid #FFFFFF;">
                        <img src="https://img.icons8.com/color/96/rabbit.png" alt="Bunny" style="width: 80px;">
                    </div>

                    <div class="d-flex align-items-end mb-3 border-bottom border-white border-opacity-50 pb-1">
                        <span class="text-white fw-bold me-2" style="font-size: 1.5rem;">Name:
                            ........................</span>
                        <span class="text-white text-opacity-75 flex-grow-1"> </span>
                    </div>
                    <div class="d-flex align-items-end border-bottom border-white border-opacity-50 pb-1">
                        <span class="text-white fw-bold me-2" style="font-size: 1.5rem;">Tel:
                            ....................</span>
                        <span class="text-white text-opacity-75 flex-grow-1"> </span>
                    </div>
                </div>
            </div>
            <h4 class="fw-bold mb-3" style="font-size: 2rem;"><b>History</b></h4>
            <div class="card border-0 shadow-sm" style="border-radius: 30px; overflow: hidden;">
                <div class="card-body p-0">


                    <div class="table-responsive">
                        <table class="table  table-bordered align-middle mb-0">
                            <thead>
                                <tr style="background-color: #E9F2FF;">
                                    <th class="py-3 px-4  fw-semibold"><b>Name</b></th>
                                    <th class="py-3 px-4 text-center  fw-semibold"><b>Date</b></th>
                                    <th class="py-3 px-4 text-end  fw-semibold"><b>Amount</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-3 px-4">Apri</td>
                                    <td class="py-3 px-4 text-center">22</td>
                                    <td class="py-3 px-4 text-end fw-bold">-$15.00</td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-4">4</td>
                                    <td class="py-3 px-4 text-center">11</td>
                                    <td class="py-3 px-4 text-end fw-bold">-$15.00</td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-4">A</td>
                                    <td class="py-3 px-4 text-center">2</td>
                                    <td class="py-3 px-4 text-end fw-bold">-$15.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
 
const memberData = ref([
    { name: 'hehe', date: 13, gmail: 'hehe@gmail.com', pass: '123456', desc: '-$15.00' },
    { name: 'hhhh 24', date: 22, gmail: 'hihi@gmail.com', pass: '123556', desc: '-$15.00' },
    { name: 'eee', date: 31, gmail: 'haha@gmail.com', pass: '123556', desc: '-$15.00' }
]);
</script>

<style scoped> 
.table td,
.table th {
    border: none !important;
}
 
tbody tr:hover {
    background-color: #fcfcfc;
    border-radius: 15px;
}
</style>