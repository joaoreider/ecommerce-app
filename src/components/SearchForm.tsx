'use client'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function SearchForm() {
  const router = useRouter()

  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget) // This give me all the data from the form
    const data = Object.fromEntries(formData)

    const query = data.q.toString().trim()
    if (!query) return
    router.push(`/search?q=${query}`)
  }
  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        name="q"
        defaultValue={query ?? ''}
        placeholder="Search products..."
        required
      />
    </form>
  )
}
