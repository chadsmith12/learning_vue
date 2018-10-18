import UserStart from './components/Users/UserStart.vue'
import UserDetail from './components/Users/UserDetail.vue'
import UserEdit from './components/Users/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

const User = resolve => {
    require.ensure(['./components/Users/User.vue'], () => {
        resolve(require('./components/Users/User.vue'));
    });
};

export const routes = [
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            }
        ]
    },
    {
        path: '',
        components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/redirect-me',
        redirect: '/user'
    },
    {
        path: '*',
        redirect: '/'
    }
]