import * as React from "react"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@/components/ui/drawer';
import { Button } from "../ui/button";
import Image from 'next/image';

export function Quiz() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button>Let's Start</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-3/4 max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Let's Talk</DrawerTitle>
                        <DrawerDescription>Why don't you just take part in our coversation!</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex space-x-10 m-2">
                        <div><Image src="/boy.png" alt="ESG Image" width={100} height={100} className="py-2" />
                        </div><div className="flex flex-col w-full max-w-[320px] leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 py-1 mt-10">
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
                    
                    {/* <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter> */}
                </div>
            </DrawerContent>
        </Drawer>
    )
}
