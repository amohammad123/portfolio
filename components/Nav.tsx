'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        name: "home",
        path: '/'
    },
    {
        name: "services",
        path: '/services'
    },
    {
        name: "resume",
        path: '/resume'
    },
    {
        name: "work",
        path: '/work'
    },
    {
        name: "contact",
        path: '/contact'
    },
]

const Nav = () => {
    const pathname = usePathname()
    return (
        <div>
            <nav className={'flex gap-8'}>
                {links.map((link, index) => {
                    return <Link href={link.path} key={index}
                                 className={`${link.path === pathname && 'text-accent/90 border-b-2 border-accent/60'} capitalize font-medium hover:opacity-80 hover:text-accent  transition-opacity duration-700`}>{link.name}</Link>
                })}
            </nav>
        </div>
    );
};

export default Nav;