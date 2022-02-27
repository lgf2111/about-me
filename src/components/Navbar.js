import React from 'react'

export default function Navbar() {
  const navigation = [
    { name: 'Home', href: '#home'},
    { name: 'About', href: '#about'},
    { name: 'Projects', href: '#projects'},
    { name: 'Contact', href: '#contact'},
  ]
  return (
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          {navigation.map((item) => (
          <a key={item.name} href={item.href} className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
            {item.name}
          </a>
        ))}

        </div>
      </div>
    </nav>)
}
