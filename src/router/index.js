import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
    {
        path: '/', 
        component: () => import('../layout/wrapper/index.vue'), 
        meta: { layout: "index" },
        children: [
            {
                path: '/admin',
                component: () => import('../components/admin/admin.vue'),
            },
            {
                path: '/nhanvien', 
                component: () => import('../components/nhanvien/nhanvien.vue'),
            },
            {
                path: '/khachhang', 
                component: () => import('../components/khachhang/khachhang.vue'),
            },
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router