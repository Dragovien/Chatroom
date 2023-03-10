
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "LoginPage", component: () => import('pages/IndexPage.vue') },
      { path: 'chatroom', name: "ChatPage", component: () => import('pages/ChatPage.vue') },
      { path: 'newAccount', name: "RegisterPage", component: () => import('pages/RegisterPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
