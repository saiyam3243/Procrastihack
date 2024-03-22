'use client'
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React from 'react';

const InvestPage: React.FC = () => {

    const getPersona = async () => {
        const url = '/api/persona';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json;
            console.log(data);
            alert('Status fetched successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Data deletion failed. Check the console for details.');
        }
    }

    return (
        <div className="p-20 flex flex-col items-center justify-center space-y-20">
            <div className=" text-extrabold text-5xl text-[#de3919]1">ESG</div>
            <Card className="p-4 flex flex-col items-center justify-center">
                <CardTitle className="p-4">Persona : Climate change</CardTitle>
                <CardContent className="text-center">
                    Focused on the impacts of investments on climate change, including greenhouse gas emissions, fossil fuels, and energy efficiency.
                </CardContent>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center w-4/5">
                <CardTitle className="p-4 font-bold mb-10">COMPANIES</CardTitle>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold"> Company name</div>
                    <div className="flex m-10 space-x-10">
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            49
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            88
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            81
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold"> Company name</div>
                    <div className="flex m-10 space-x-10">
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            89
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            64
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            34
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold"> Company name</div>
                    <div className="flex m-10 space-x-10">
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            21
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            91
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            77
                        </div>
                    </div>
                </div>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center w-4/5">
                <CardTitle className="p-4 font-bold mb-10">COMPANIES</CardTitle>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold"> Company name</div>
                    <div className="flex m-10 space-x-10">
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            49
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            88
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            81
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold"> Company name</div>
                    <div className="flex m-10 space-x-10">
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            89
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            64
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            34
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="font-semibold"> Company name</div>
                    <div className="flex m-10 space-x-10">
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            21
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            91
                        </div>
                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            77
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default InvestPage;