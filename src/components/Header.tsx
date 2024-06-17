import Link from 'next/link'
import React, { FC, Suspense } from 'react'
import Image from 'next/image'
import Cart from './Cart'
import SearchForm from './SearchForm'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Suspense fallback={null}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-2xl font-extrabold text-white">
            store
          </Link>
          <SearchForm />
        </div>
        <div className="flex items-center gap-4">
          <Cart />
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
    </Suspense>
  )
}
