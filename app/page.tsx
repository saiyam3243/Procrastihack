'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
// import Stories from '@/components/home/stories';
import { Quiz } from '@/components/home/quiz';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const videoHandler = (control: boolean) => {
    // const videoElement = document.getElementById('video') as HTMLVideoElement;
    const videoElement = videoRef.current;
    if (videoElement) {
      if (control) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setVideoPlaying(!videoPlaying);
    }
    // if (videoRef.current) {
    //   console.log(videoRef);
    //   if (control) {
    //     setVideoPlaying(!videoPlaying);
    //     videoRef.current.play();
    //   } else if (control) {
    //     setVideoPlaying(!videoPlaying);
    //     videoRef.current.pause();
    //   }
    // }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 pl-12 pr-12 gap-y-32 bg-gradient-to-r from-black">
      <div data-aos="fade-up" className=" font-bold text-8xl text-[#de3919] min-h-screen z-10 flex justify-center items-center">
        VisionVest
      </div>
      <video ref={videoRef} autoPlay loop muted className="fixed top-0 left-0 -z-1 w-full h-ful w-screen h-screen object-cover bg-fixed ">
        <source src="/esg.mp4" type="video/mp4" />
      </video>

      <Card data-aos="fade-up" data-aos-duration="800" className="p-2 flex flex-col items-center justify-center shadow-2xl w-3/4 z-10 mb-20">
        <CardTitle className="p-4">Let's dive into a conversation!</CardTitle>
        <CardContent className="text-center w-2/3">
          Don't know about ESG or how to start with investments? No worries! Go through the conversation and quizzes below to strengthen your knowledge
        </CardContent>
        <CardFooter className="text-center font-semibold">
          <Quiz />
        </CardFooter>
      </Card>

      <Card data-aos="fade-up" data-aos-duration="1200" className="p-2 flex flex-col items-center justify-center shadow-2xl w-3/4 mb-10 z-10">
        <CardTitle className="p-4">Let's begin with investment!</CardTitle>
        <CardContent className="text-center w-2/3">
          If you have already have some knowledge about investing, you can skip the quiz and invest directly. For questions about investing, you can always ask VestGPT.
        </CardContent>
        <CardFooter className="text-center font-semibold">
          <Button className="w-40" onClick={() => router.push('/invest')}> Invest</Button>
        </CardFooter>
      </Card>
      <div className="fixed bottom-10 left-8 font-bold text-white z-10 ">
        <Button className="rounded-full h-14 w-14 shadow-2xl shadow-black" onClick={() => videoHandler(videoPlaying)}>
          {videoPlaying ? <PauseIcon /> : <PlayIcon />}
        </Button>
      </div>
    </main>
  )
}