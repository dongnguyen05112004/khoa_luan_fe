import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
    {
        path : '/admin',
        component: ()=>import('../components/admin/admin.vue')
    },
    {
        path : '/nhanvien',
        component: ()=>import('../components/nhanvien/nhanvien.vue')
    },
    {
        path : '/quanly',
        component: ()=>import('../components/quanly/quanly.vue')
    },
    
    


    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router