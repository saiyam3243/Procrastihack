'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
// import Stories from '@/components/home/stories';
import { Quiz } from '@/components/home/quiz';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pb-24 pl-12 pr-12">
      <div className=" font-bold text-6xl text-[#de3919] mb-10 z-10">VisionVest</div>
      <div className='absolute inset-0 z-0'>
          <video autoPlay loop muted className="w-screen h-screen object-cover" >
            <source src="/esg.mp4" type="video/mp4" />
          </video>
      </div>

      <Card className="p-4 flex flex-col items-center justify-center shadow-2xl w-3/4 mb-10 z-10">
        <CardTitle className="p-4">Let's dive into a conversation!</CardTitle>
        <CardContent className="text-center w-2/3">
          Don't know about ESG or how to start with investments? No worries! Go through the conversation and quizzes below to strengthen your knowledge      
          </CardContent>
        <CardFooter className="text-center font-semibold">
          <Quiz />
        </CardFooter>
      </Card>

      <Card className="p-4 flex flex-col items-center justify-center shadow-2xl  w-3/4 mb-10 z-10">
        <CardTitle className="p-4">Let's begin with investment!</CardTitle>
        <CardContent className="text-center w-2/3">
          If you have already have some knowledge about investing, you can skip the quiz and invest directly. For questions about investing, you can always ask VestGPT.
        </CardContent>
        <CardFooter className="text-center font-semibold">
          <Button className="w-40 mt-4" onClick={() => router.push('/invest')}> Invest</Button>
        </CardFooter>
      </Card>

    </main>
  )
}