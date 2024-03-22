'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@/components/ui/drawer';
import { data } from 'autoprefixer';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Stories from '@/components/home/stories';
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-24 pl-12 pr-12">
      <div className=" font-bold text-6xl text-[#de3919]">VirtueVest</div>
      <div>
          <Parallax speed={20} scale={[0.8, 1.2]}>
            <video autoPlay loop muted className="w-full h-full object-cover" >
              <source src="/esg.mp4" type="video/mp4" />
            </video>
          </Parallax>
        </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Let's Start</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-2/3 max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="flex">
              <Image src="/boy.png" alt="ESG Image" width={100} height={100} />
              <div className="m">
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
        <Stories />
      <Button onClick={() => router.push('/invest')}>Lets Invest</Button>
    </main>
  )
}
