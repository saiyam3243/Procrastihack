import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {Cards} from "@/components/home/cards"

const Stories = () => {
    const stories = [
        ["The Conscious Millennial", "Alex, 29, finds the platform's ESG-focused investments align with her environmental values. Investing in green energy, she's pleased with both her positive impact and returns."],
        ["The Socially Responsible Retiree", "John, 65, uses the platform to invest in socially responsible companies, aligning his savings with his values of employee welfare and community development, adding a fulfilling dimension to his retirement."],
        ["The Ethical Entrepreneur", "Sara, 38, focuses on gender equality and diversity through her investments. She appreciates the detailed ESG scoring system, feeling proud of her societal contributions and financial growth."],
        ["The Environmental Advocate", "Michael, 42, invests in renewable energy and sustainable practices, motivated by the platform's environmental impact analysis and carbon footprint tracking, actively contributing to climate change mitigation."],
        ["The Impact Investor", "Priya, 34, new to investing, seeks positive world impact, especially in emerging markets. Attracted to the platform's ESG focus, she invests in renewable energy projects in Africa, achieving decent returns and improving access to clean energy."]
    ]    
    
    return (
            <Carousel className="w-full max-w-xs">
                <CarouselContent className="flex aspect-square items-center justify-center p-6 w-[350px] m-2">
                    {stories.map((story) => (
                        <CarouselItem>
                            <div className="p-1">
                                <Cards heading={story[0]} content={story[1]} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
    );
};

export default Stories;