import * as React from "react"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@/components/ui/drawer';
import { Button } from "../ui/button";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export function Quiz() {
    const router = useRouter();
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="w-40">Let's get started</Button>
            </DrawerTrigger>
            <DrawerContent className="h-2/3 max-h-full">
                <div className="mx-auto w-screen max-w-md overflow-y-auto">
                    <DrawerHeader className="m-2 flex flex-col justify-center items-center">
                        <DrawerTitle>Let's get started</DrawerTitle>
                        <DrawerDescription>Why don't you just take part in our coversation!</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex space-x-10">
                        <div>
                            <Image src="/boy.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div>
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                ESG investing focuses on companies that are good for the world. ESG stands for Environmental, Social, and Governance.                                </p>
                        </div>
                    </div>
                    <div className="flex space-x-10 m-2">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Rema Xing</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                It's about investing where your values are. Good for the planet, people, and with strong leadership.
                            </p>
                        </div>
                        <div>
                            <Image src="/girl.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div>
                    </div>
                    <div className="flex space-x-10 m-2">
                        <div><Image src="/boy.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div><div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                How do I know which companies are good at ESG?                                                           </p>
                        </div>
                    </div>
                    <div className="flex space-x-10 m-2">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Rema Xing</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                Companies get ESG scores based on things like how green they are, how they treat people, and how they're managed.                            </p>
                        </div>
                        <div>
                            <Image src="/girl.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div>
                    </div>

                    <div className="flex space-x-10 m-2">
                        <div><Image src="/boy.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div><div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                These scores help pick companies that might do well in the long run because they're responsible.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-10 m-2">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Rema Xing</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                Does this mean I make less money?
                            </p>
                        </div>
                        <div>
                            <Image src="/girl.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div>
                    </div>

                    <div className="flex space-x-10 m-2">
                        <div>
                            <Image src="/boy.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div>
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                Not really. Good ESG can mean good profits. It's about investing smartly and ethically.                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-10 m-2">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Rema Xing</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                I'm in! How do I start?
                            </p>
                        </div>
                        <div>
                            <Image src="/girl.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div>
                    </div>
                    <div className="flex space-x-10 m-2">
                        <div>
                            <Image src="/boy.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div>
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                                If you still have any queries click on our vestGPT or go directly to invest page to start your investment journey!
                            </p>
                        </div>
                    </div>
                    <DrawerFooter className="flex flex-col justify-center mt-10 mb-10 gap-10">
                        {/* <div className="">  */}
                        {/* <DrawerClose asChild>
                            <Button >vestGPT</Button>
                        </DrawerClose> */}
                        <label>
                            Let's begin with investing
                        </label>
                        <DrawerClose asChild>
                            <Button onClick={() => router.push('/invest')}>Invest</Button>
                        </DrawerClose>
                        <label>
                            Still confused? Ask our VestGPT on the homepage!
                            </label>
                        {/* </div> */}
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}