import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardsProps {
    heading: string;
    content: string;
}

export function Cards({ heading, content }: CardsProps) {    
     return (
    <Card>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center p-6">
        {content}
      </CardContent>
    </Card>
  )
}
