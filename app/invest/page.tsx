'use client'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
interface Fund {
    [key: string]: number;
}

interface FundsData {
    top_k_funds: Fund;
}
const InvestPage: React.FC = () => {
    const [persona, setPersona] = useState<any>(null);
    const [funds, setFunds] = useState<FundsData[]>([]);

    const getPersona = async () => {
        const url = '/api/persona';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response;
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
            alert('Data deletion failed. Check the console for details.');
        }
    }

    const getFunds = async () => {
        const url = '/api/get_top_k_funds';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setFunds(data.top_k_funds);
        } catch (error) {
            console.error('Error:', error);
            alert('Data deletion failed. Check the console for details.');
        }
    }
    useEffect(() => {
        getPersona();
        getFunds();
    }, []);
    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-20 pt-24 pb-24 pl-12 pr-12 bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA]">
            <div className=" font-bold text-6xl text-[#de3919]">VisionVest</div>

            <Card className="p-4 flex flex-col items-center justify-center shadow-2xl">
                <CardTitle className="p-4">Persona : Climate change</CardTitle>
                <CardContent className="text-center">
                    Focused on the impacts of investments on climate change, including greenhouse gas emissions, fossil fuels, and energy efficiency.
                </CardContent>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center w-4/5 shadow-2xl">
                <CardTitle className="p-4 font-bold mb-10">COMPANIES</CardTitle>
                <CardContent className="text-center flex items-center justify-center space-x-10 text-center">
                    <div>
                        <div className="font-semibold">Adidas</div>

                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            88
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">Apple</div>

                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            93
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">Siemens</div>

                        <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                            74
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="text-center font-semibold">
                    ESG Scores
                </CardFooter>
            </Card>
            <Card className="p-4 flex flex-col items-center justify-center w-4/5 shadow-2xl">
                <CardTitle className="p-4 font-bold mb-10">FUNDS</CardTitle>
                <CardContent className="text-center flex items-center justify-center space-x-10 text-center">
                    {Object.entries(funds).map(([fundName, value]) => (
                        <div>
                            <div className="font-semibold">{(fundName).split(" ")[0]}</div>

                            <div className="rounded-full bg-[#de3919] h-20 w-20 text-center flex items-center justify-center">
                                {Number(value) * 100}
                            </div>
                        </div>
                    ))}
                </CardContent>
                <CardFooter className="text-center font-semibold">
                    ESG Scores
                </CardFooter>
            </Card>
        </div>
    );
};

export default InvestPage;