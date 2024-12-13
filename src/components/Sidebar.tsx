import {Home as HomeIcon, Library, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react' 

const Sidebar = () => {
  return (
    <aside className="w-[301px] bg-zinc-950 p-6">
    <Image src='/spotify-logo.png' alt='Spotify Logo' width={164} height={49} />

    <nav className="space-y-5 mt-10">
      <a href="" className="flex items-center gap-5 text-sm font-semibold text-zinc-200">
        <HomeIcon size={24} />
        <p className='font-bold text-[19px]'>Home</p>
      </a>
      <a href="" className="flex items-center gap-5 text-sm font-semibold text-zinc-200">
        <Search size={24} />
        <p className='font-bold text-[19px]'>Search</p>
      </a>
      <a href="" className="flex items-center gap-5 text-sm font-semibold text-zinc-200">
        <Library size={24} />
        <p className='font-bold text-[19px]'>Your Library</p>
      </a>
    </nav>

    <div className='flex flex-col w-[190px] h-[130px] mt-[52px] gap-5'>
      <div className='flex gap-4'>
        <div className='bg-white w-[30px] rounded-sm h-[30px] flex items-center justify-center text-black'>
          <Image src="/fi-ss-plus-small.png" alt='Plus Small' width={24} height={24}/>
        </div>
        <p className='font-bold text-[19px]'>Create Playlist</p>
      </div>

      <div className='flex gap-4'>
        <Image src="/spotifyheart.png" alt='Spotify Heart' width={30} height={30}/>
        <p className='font-bold text-[19px]'>Liked Songs</p>
      </div>

      <div className='flex gap-4'>
      <div className='bg-[#004638] w-[30px] rounded-sm h-[30px] flex items-center justify-center text-black'>
          <Image src="/gg_media-podcast.png" alt='Plus Small' width={17} height={17}/>
        </div>
        <p className='font-bold text-[19px]'>Your Episodes</p>
      </div>

    </div>

    <nav className="mt-[38px] border-zinc-800 flex flex-col gap-[15px]">
      <a href="" className="text-bold text-[19px] text-zinc-400 hover:text-zinc-100">Playlist pra limpar o violão</a>
      <a href="" className="text-bold text-[19px] text-zinc-400 hover:text-zinc-100">trap etc</a>
      <a href="" className="text-bold text-[19px] text-zinc-400 hover:text-zinc-100">Gangsta Rap</a>
      <a href="" className="text-bold text-[19px] text-zinc-400 hover:text-zinc-100">This Is MFDOOM</a>
    </nav>

    <nav className='mt-[63px] flex gap-2 items-center justify-start'>
      <Image src="/grommet-icons_install-option.png" alt='Install Icon' width={24} height={24} />
      <p className='font-bold text-[19px]'>Install App</p>

    </nav>

  </aside>
  )
}

export default Sidebar