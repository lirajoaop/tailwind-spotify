import Footer from "@/components/Footer";
import Greeting from "@/components/Greeting";
import Sidebar from "@/components/Sidebar";
import {ChevronLeft, ChevronRight, Play} from "lucide-react"
import Image from "next/image";

export default function Home() {

  return (
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          
          <Sidebar />

          <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <ChevronRight />
              </button>
            </div>

            <Greeting />
              
            <div className="grid grid-cols-3 gap-4 mt-4">
              <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/johnmayer.jpg" width={104} height={104} alt="Capa do álbum de John Mayer"/>
                <strong className="max-w-[35%]">Playlist pra limpar o violão</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>

              </a>
              <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/johnmayer.jpg" width={104} height={104} alt="Capa do álbum de John Mayer"/>
                <strong className="max-w-[35%]">Playlist pra limpar o violão</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>

              </a>
              <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/johnmayer.jpg" width={104} height={104} alt="Capa do álbum de John Mayer"/>
                <strong className="max-w-[35%]">Playlist pra limpar o violão</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>

              </a>
              <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/johnmayer.jpg" width={104} height={104} alt="Capa do álbum de John Mayer"/>
                <strong className="max-w-[35%]">Playlist pra limpar o violão</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>

              </a>
              <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/johnmayer.jpg" width={104} height={104} alt="Capa do álbum de John Mayer"/>
                <strong className="max-w-[35%]">Playlist pra limpar o violão</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>

              </a>
              <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                <Image src="/johnmayer.jpg" width={104} height={104} alt="Capa do álbum de John Mayer"/>
                <strong className="max-w-[35%]">Playlist pra limpar o violão</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>

              </a>
             
            </div>
            
            <h2 className="font-semibold text-2xl mt-10">Made for João Lira</h2>

            <div className="grid grid-cols-8 gap-4 mt-4">
              <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                <Image src="/johnmayer.jpg" className="w-full" width={120} height={120} alt="Capa do álbum de John Mayer"/>
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Dr Dre, Eminem, Snoop Dog and more</span>
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                <Image src="/johnmayer.jpg" className="w-full" width={120} height={120} alt="Capa do álbum de John Mayer"/>
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Dr Dre, Eminem, Snoop Dog and more</span>
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                <Image src="/johnmayer.jpg" className="w-full" width={120} height={120} alt="Capa do álbum de John Mayer"/>
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Dr Dre, Eminem, Snoop Dog and more</span>
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                <Image src="/johnmayer.jpg" className="w-full" width={120} height={120} alt="Capa do álbum de John Mayer"/>
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Dr Dre, Eminem, Snoop Dog and more</span>
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
                <Image src="/johnmayer.jpg" className="w-full" width={120} height={120} alt="Capa do álbum de John Mayer"/>
                <strong className="font-semibold">Daily mix 1</strong>
                <span className="text-sm text-zinc-400">Dr Dre, Eminem, Snoop Dog and more</span>
              </a>
            </div>
              
            
          </main>
        </div>
          <Footer />
      </div>
  );
}
