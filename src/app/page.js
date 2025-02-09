import Navbar from "./Components/Navbar";
import home1 from '../Assets/home1.webp'
import home2 from '../Assets/home2.webp'
import home3 from '../Assets/home3.webp'
import Image from "next/image";
import Link from "next/link";
import { CARDS, SUB_CARDS } from "@/Data/Home";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="md:px-10 px-5 fastFadeIn">
          <div className="max-w-7xl w-full pb-16 pt-5 mx-auto">
            <div className="mx-auto  flex items-start md:gap-5 gap-10 xl:flex-row flex-col">

              <div className="flex items-start md:gap-5 gap-10 w-full md:flex-row flex-col-reverse">
                <div className="md:max-w-[30%] w-full">
                  <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6">
                    {
                      CARDS.map(({ id, title, description, time, country, link }) => (
                        <div key={id} className="group">
                          <Link href={link}>
                            <Image src={home2} className="w-full rounded-sm" alt={title} />
                            <h2 className="pt-2 group-hover:underline block leading-tight font-semibold">
                              {title}
                            </h2>
                            <p className="text-zinc-700 text-xs pt-3">{description}</p>
                            <p className="text-zinc-700 text-[10px] pt-3 flex items-center gap-2">
                              {time} <span className="text-zinc-500">|</span> {country}
                            </p>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="md:max-w-[70%] w-full">
                  <div className="group">
                    <Link href="">
                      <Image src={home1} alt="image" className="w-full rounded-sm" />
                      <p className="pt-3 group-hover:underline block leading-tight text-xl font-semibold"> Israel says it killed Hezbollah commander in Beirut as air strikes continue</p>
                      <p className="text-zinc-700 text-xs pt-3">The IDF says it killed Suhail Hussein Husseini yesterday; meanwhile, rocket fire from Lebanon into Israel continues.</p>
                    </Link>
                  </div>

                  <ul className=' space-y-1 md:mt-10 mt-5 list-disc pl-5'>
                    <li><Link href="" className='text-sm hover:underline font-medium'> With the Middle East in flames, what will it take to end the conflict?</Link></li>
                    <li><Link href="" className='text-sm hover:underline font-medium'>Gaza in maps: How a year of war has drastically changed the territory</Link></li>
                    <li><Link href="" className='text-sm hover:underline font-medium'>Israel remembers victims of 7 October attack a year on</Link></li>
                  </ul>
                </div>
              </div>

              <div className="xl:max-w-[25%] w-full">
                <div className="grid xl:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  {
                    SUB_CARDS.map(({ id, title, description, time, country, link }) => (
                      <div key={id} className="group">
                        <Link href={link}>
                          <h2 className="pt-2 group-hover:underline block leading-tight font-semibold">
                            {title}
                          </h2>
                          <p className="text-zinc-700 text-xs pt-3">{description}</p>
                          <p className="text-zinc-700 text-[10px] pt-3 flex items-center gap-2">
                            {time} <span className="text-zinc-500">|</span> {country}
                          </p>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>

          <div className="max-w-7xl w-full pb-8 mx-auto">
            <div className="w-full h-0.5 bg-zinc-800 rounded-full"></div>
            <h2 className='font-semibold py-2'>Only from the BBC</h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-5">

              <div className="group">
                <Link href="">
                  <Image alt="image" src={home3} className="w-full rounded-sm" />
                  <p className="pt-3 group-hover:underline block leading-tight text-xl font-semibold"> 'Why don't we build out of beer cans not trees?'</p>
                  <p className="text-zinc-700 text-xs pt-3">New Mexico's "Earthship" homes represent a 50-year-old "aha" moment in green design,
                    and they're still a novel way to stay in the desert where they withstand extreme heat and
                    cold.</p>
                </Link>
              </div>
              <div className="group">
                <Link href="">
                  <Image alt="image" 
                  src={home3} className="w-full rounded-sm" />
                  <p className="pt-3 group-hover:underline block leading-tight text-xl font-semibold"> Why Joker 2's mega budget spelled disaster</p>
                  <p className="text-zinc-700 text-xs pt-3">New Mexico's "Earthship" homes represent a 50-year-old "aha" moment in green design,
                    and they're still a novel way to stay in the desert where they withstand extreme heat and
                    cold.</p>
                </Link>
              </div>

            </div>

          </div>
        </div>
    </>
  );
}
