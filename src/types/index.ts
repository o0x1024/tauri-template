

const menuList: Array<any> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    key:"1",
    meta: {
      locale: 'menu.server.dashboard',
      // icon: 'icon-dashboard',
      order: 1,
    },
  },
  {
    path: '/asm',
    name: 'Asm',
    key:"2",
    meta: {
      locale: 'menu.server.asm',
      order: 2,
    }
  }
];

export { menuList };