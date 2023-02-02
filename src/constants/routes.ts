

const routes: any = {
  admin: [
    {
      title: {
        text: 'Módulos',
        component: 'h6',
      },
    },
    {
      home: {
        path: '/',
        label: 'Inicio',
        icon: 'fa fa-home',
        component: 'link',
        id: 'home',
      },
    },
    {
      forms: {
        path: 'forms',
        label: 'Formularios',
        icon: 'fa fa-table',
        component: 'link',
        id: 'forms',
      },
    },
    {
      orders: {
        path: 'orders',
        label: 'Ordenes de Trabajo',
        icon: 'fa fa-file-text',
        component: 'link',
        id: 'orders',
      },
    },
    {
      break: {
        component: 'separator',
      },
    },
    {
      title: {
        text: 'Usuarios',
        component: 'h6',
      },
    },
    {
      users: {
        path: 'users',
        label: 'Lista de usuarios',
        icon: 'fa fa-users',
        component: 'link',
        id: 'users',
      },
    },
    {
      adduser: {
        path: 'adduser',
        label: 'Agregar Usuario',
        icon: 'fa fa-user-plus',
        component: 'link',
        id: 'adduser',
      },
    },
    {
      break: {
        component: 'separator',
      },
    },
    {
      title: {
        text: 'Cuenta',
        component: 'h6',
      },
    },
    {
      profile: {
        path: 'profile',
        label: ' Mi perfil',
        icon: 'fa fa-user',
        component: 'link',
        id: 'profile',
      },
    },
  ],
  client: [
    {
      title: {
        text: 'Módulos',
        component: 'h6',
      },
    },
    {
      home: {
        path: '/',
        label: 'Inicio',
        icon: 'fa fa-home',
        component: 'link',
        id: 'home',
      },
    },
    {
      forms: {
        path: 'forms',
        label: 'Formularios',
        icon: 'fa fa-table',
        component: 'link',
        id: 'forms',
      },
    },
    {
      orders: {
        path: 'orders',
        label: 'Ordenes de Trabajo',
        icon: 'fa fa-file-text',
        component: 'link',
        id: 'orders',
      },
    },
    {
      break: {
        component: 'separator',
      },
    },
    {
      title: {
        text: 'Usuarios',
        component: 'h6',
      },
    },
    {
      users: {
        path: 'users',
        label: 'Lista de usuarios',
        icon: 'fa fa-users',
        component: 'link',
        id: 'users',
      },
    },
    {
      break: {
        component: 'separator',
      },
    },
    {
      title: {
        text: 'Cuenta',
        component: 'h6',
      },
    },
    {
      profile: {
        path: 'profile',
        label: ' Mi perfil',
        icon: 'fa fa-user',
        component: 'link',
        id: 'profile',
      },
    },
  ],
  user: [
    {
      title: {
        text: 'Módulos',
        component: 'h6',
      },
    },
    {
      home: {
        path: '/',
        label: 'Inicio',
        icon: 'fa fa-home',
        component: 'link',
        id: 'home',
      },
    },
    {
      forms: {
        path: 'forms',
        label: 'Formularios',
        icon: 'fa fa-table',
        component: 'link',
        id: 'forms',
      },
    },
    {
      orders: {
        path: 'orders',
        label: 'Ordenes de Trabajo',
        icon: 'fa fa-file-text',
        component: 'link',
        id: 'orders',
      },
    },
    {
      break: {
        component: 'separator',
      },
    },
    {
      title: {
        text: 'Cuenta',
        component: 'h6',
      },
    },
    {
      profile: {
        path: 'profile',
        label: ' Mi perfil',
        icon: 'fa fa-user',
        component: 'link',
        id: 'profile',
      },
    },
  ],
};

export { routes };
