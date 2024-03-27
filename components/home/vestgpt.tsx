import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { use, useEffect, useState } from "react"

interface QAPair {
    question: string;
    answer: string;
}

export function VestGPT() {
    const [question, setQuestion] = useState<string>("")
    const [questions, setQuestions] = useState<string[]>([])
    const [qaPairs, setQAPairs] = useState<QAPair[]>([])
        let qaPairs2: QAPair[] = [
        {
            question: "What is ESG investing?",
            answer: "ESG investing is something"
        }
        // Add more pairs here as needed
    ];
    const query = async () => {
        try {
            setQuestions((prevAnswers: any[]) => [...prevAnswers, question])
            const response = await fetch("/api/llm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "prompt": question
                }),
            });

            if (response.ok) {
                // Handle successful response
                const data = await response.json();
                setQAPairs((prevPairs) => [...prevPairs, { question: question, answer: data.response }]);
                // qaPairs.push({ question: question, answer: data.response })
                qaPairs2.push({
                    question: "What is ESG investing?",
                    answer: "ESG investing is something"
                })

                setQuestion("");
                console.log(data);
                console.log(qaPairs);
            } else {
                // Handle error response
                console.error("Error:", response.status);
            }
        } catch (error) {
            // Handle network error
            console.error("Error:", error);
        }
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="rounded-full border-4 bg-[#de3919] h-24 w-24 shadow-2xl shadow-black"> VestGPT</Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col sm:max-w-[425px] lg:max-w-[900px] h-5/6">
                <DialogHeader>
                    <DialogTitle>Chat with VestGPT</DialogTitle>
                    <DialogDescription>
                        You can ask the questions related to ESG and we will try to answer them.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col h-full p-6 space-y-4 overflow-y-auto">
                    {qaPairs.map((pair, index) => (
                        <div key={index} className="flex gap-4 flex-col">
                            <div className="flex gap-6">
                                <div className="shrink-0">
                                    <img src="/boy.png" alt="ESG Image" width={40} height={40} />
                                </div>
                                <div className="col-span-11">
                                    {pair.question}
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="shrink-0">
                                    <img src="/gpt.png" alt="ESG Image" width={40} height={40} />
                                </div>
                                <div className="col-span-11">
                                    {pair.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <DialogFooter>
                    <div className=" w-full m-4 flex gap-x-4">
                        <Input placeholder="Type your questions here..." onChange={(e) => { setQuestion(e.target.value) }} value={question} />
                        <Button type="submit" onClick={query} disabled={question ===""}>Ask</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
