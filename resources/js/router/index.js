import { createRouter, createWebHistory } from "vue-router";

import app from '../components/app.vue'
import Sup from '../pages/Sup.vue'
import PostsIndex from '../components/posts/PostsIndex.vue'
import PostsCreate from '../components/posts/PostsCreate.vue'
import PostsEdit from '../components/posts/PostsEdit.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'posts.index',
        component: PostsIndex
    },
    {
        path: '/posts/create',
        name: 'posts.create',
        component: PostsCreate
    },
    {
        path: '/posts/:id/edit',
        name: 'posts.edit',
        component: PostsEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})