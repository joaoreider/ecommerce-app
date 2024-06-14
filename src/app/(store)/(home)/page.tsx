import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid max-h[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        href="/"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="group-hover:scale-105 transition-transform duration-300"
          width={860}
          height={860}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Sweatshirt AI for Devs</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            $ 99,90
          </span>
        </div>
      </Link>

      <Link
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        href="/"
      >
        <Image
          src="/moletom-java.png"
          className="group-hover:scale-105 transition-transform duration-300"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Sweatshirt Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            $ 99,90
          </span>
        </div>
      </Link>

      <Link
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        href="/"
      >
        <Image
          src="/moletom-ai-side.png"
          className="group-hover:scale-105 transition-transform duration-300"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Sweatshirt AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            $ 99,90
          </span>
        </div>
      </Link>
    </div>
  )
}
