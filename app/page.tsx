'use client'
import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
// import Stories from '@/components/home/stories';
import { Quiz } from '@/components/home/quiz';
export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-24 pl-12 pr-12">
      <div className=" font-bold text-6xl text-[#de3919]">VisionVest</div>
      <div>
          <Parallax speed={20} scale={[0.8, 1.2]}>
            <video autoPlay loop muted className="w-full h-full object-cover" >
              <source src="/esg.mp4" type="video/mp4" />
            </video>
          </Parallax>
        </div>
        <Quiz />
      <Button onClick={() => router.push('/invest')}>Lets Invest</Button>
    </main>
  )
}