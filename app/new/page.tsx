'use client'
import Image from 'next/image'
import Link from 'next/link'
// import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@/components/ui/drawer';
import { data } from 'autoprefixer';
import { MinusIcon, PlusIcon } from 'lucide-react';
export default function Home() {
    const router = useRouter();
    const apiCall = async () => {
        const url = '/api/python';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response;
            console.log(data);
            alert('Status fetched successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Data deletion failed. Check the console for details.');
        }
    }
    // const parallax = useParallax<HTMLDivElement>({
    //     translateX: [-10, 50],
    //     translateY: [0, 100],
    //     speed: -40,
    //     scale: [1.5, 1.5], // Fix: Update the scale property to an array with two numbers
    // });
    // const parallax2 = useParallax<HTMLDivElement>({
    //     translateX: [-50, -10],
    //     speed: 70,
    //     scale: [1.5, 1.5], // Fix: Update the scale property to an array with two numbers

    // });
    // const parallax2 = useParallax<HTMLDivElement>({
    //     easing: 'easeOutQuad',
    //     translateX: [0, 10],
    //     speed: 1,
    // });
    // const parallax3 = useParallax<HTMLDivElement>({
    //     translateX: [0, 100, 'easeOutQuint'],
    //     translateY: [-100, 100, 'easeInQuint'],
    // });

    return (
        <main className="flex flex-col items-center justify-between p-24 mb-80">


            {/* <div ref={parallax.ref} className='flex'>
                <Image src="/clouds.png" alt="ESG Image" width={200} height={200}/>
                <Image src="/clouds.png" alt="ESG Image" width={200} height={200} />
                <Image src="/clouds.png" alt="ESG Image" width={200} height={200}/>
            </div> */}


            <Drawer>
                <DrawerTrigger asChild>
                    <Button>Open Drawer</Button>
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


            <Button onClick={() => router.push('/invest')}>Start Investing</Button>
        </main>
    )
}
