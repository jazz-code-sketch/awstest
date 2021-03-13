import Vue    from 'vue'
import Router from 'vue-router'
import Store  from '../store/index.js'

import * as Account from '../class/SRSParts/Account'

Vue.use(Router)

let UserInfo = new Account.UserInfo;


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    meta: {
      name: 'name',
      isPublic: true
    }
  }, 
  {
    path: '/menu',
    name: 'MenuDialog',
    component: () => import('../components/subcomponents/Menu.vue'),
    meta: {
      isPublic: false
    }
  },
  {
    path: '/newplan',
    name: 'New Plan',
    component: () => import('../components/newplan.vue'),
    meta: {
      isPublic: false
    }
  },
    {
    path: '/existing',
    name: 'Existing',
    component: () => import('../components/ExistingPlan.vue'),
    meta: {
      isPublic: false
    }
  }


];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//loop and check each route and check if already logged or not
router.beforeEach( async ( to, from, next) => {
  if( to.matched.some ( page => page.meta.isPublic  )){
    next()         
  } else {
    next()
  }








});





//loop and check each route and check if already logged or not
// router.beforeEach( async ( to, from, next) => {
//   if( to.matched.some ( page => page.meta.isPublic && from.path === '/')){
    
//       next('/login');
        





//     //console.log(await UserInfo.checkIfValidCookie())





//     // if(from.name !== 'Login'){

//     //   try{
//     //     await UserInfo.checkIfValidCookie()   
//     //     next()
//     //   }catch(err){
//     //     console.log('1', err)

//     //     next()
//     //     // next('/login') 
//     //   }

//     //   // await UserInfo.checkIfValidCookie()
//     //   // .then(() => {

//     //   // })
//     //   // .catch((error) =>{
//     //   //   next('/login')
//     //   // })

//     // }else{
//     //   next();
//     // }

//   } else {
//     next()
//     console.log(to)
//   }








//});












export default router
