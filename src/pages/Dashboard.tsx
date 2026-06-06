import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularTestimonialsDemo } from "./Testimonial";
import { Separator } from "@/components/ui/separator";
import AboutMeSummary from "./MySummary";
import MyHeadLine, { AnimatedTextCycleDemo, GooeyTextDemo } from "./MyHeading";
import { Car } from "lucide-react";

export default function Dashboard() {
    return (
        <>
            <PageHeader>
                <PageHeaderHeading></PageHeaderHeading>
            </PageHeader>
            <Card>
                <CardHeader>
                    <MyHeadLine></MyHeadLine>
                </CardHeader>
            </Card>

            <AboutMeSummary></AboutMeSummary>
            
            <Card>
                <AnimatedTextCycleDemo></AnimatedTextCycleDemo>
            </Card>

            <CircularTestimonialsDemo></CircularTestimonialsDemo>
        </>
    )
}
