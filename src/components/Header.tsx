import Link from 'next/link'
import React, { FC } from 'react'
import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          store
        </Link>

        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"></input>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-sm" />
          <span className="text-sm">Cart (0)</span>
        </div>
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline ">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/joaoreider.png"
            alt="avatar"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  )
}
