/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
//   { name: 'Informasi', href: '/informasi' },
  { name: 'About Us', href: '/about' },
]

const classNames = (...classes) => classes.filter(Boolean).join(' ')

export default function Example() {
    const [transparent, setTransparent] = useState(true);

    window.onscroll = () => (window.pageYOffset > 60) ? setTransparent(false) : setTransparent(true);

    return (
        <Popover>
            <div className={classNames( transparent ? 'bg-transparent' : 'bg-white shadow-md' , 'fixed w-full z-50 top-0 left-0 h-auto transition-all')}>
                <nav className="relative flex items-center xl:justify-between h-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="/" className="flex items-center">
                            <span className="sr-only">Infomedia</span>
                            <h1 className={classNames(transparent ? 'text-slate-50 lg:text-blue-800' : 'text-blue-800','text-base font-semibold transition-all')}>INFOMEDIA TECHNOLOGY</h1>
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className={classNames( transparent ? 'text-white' : 'bg-white hover:bg-gray-100' , 'rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all')}>
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={classNames( transparent ? 'text-slate-300 hover:text-slate-50 xl:text-slate-300 xl:hover:text-slate-50 lg:text-slate-700 lg:hover:text-slate-900' : 'text-slate-700 hover:text-slate-900' , 'font-medium transition-all')}>
                            {item.name}
                        </a>
                        ))}
                    </div>
                </nav>
            </div>

            <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                focus
                className="fixed z-50 top-14 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="absolute -top-12 right-4">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
