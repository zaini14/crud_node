import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Employees from "../views/Employees.vue"
import Add from "../views/Add.vue"
import Edit from "../views/Edit.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/employees",
    name: "Employees",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   component: Employees
  },
  {
    path: "/add",
    name: "Add",
    component: Add
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
