import {
    CircleAlert,
    Files,
    Gauge,
    LucideIcon
} from 'lucide-react'

type MenuItemType = {
    title: string
    url: string
    external?: string
    icon?: LucideIcon
    items?: MenuItemType[]
}
type MenuType = MenuItemType[]

export const mainMenu: MenuType = [
    {
        title: 'Home',
        url: '/',
        icon: Gauge
    },
    {
        title: 'Works',
        url: '/works',
        icon: Files,
        items: [
            {
                title: 'Humworld Services',
                url: '/pages/sample',
            },
            {
                title: 'Closerlook Services',
                url: '/pages/feature',
            },
        ]
    },
    {
        title: 'Oops!',
        url: '/404',
        icon: CircleAlert,
    },
]
