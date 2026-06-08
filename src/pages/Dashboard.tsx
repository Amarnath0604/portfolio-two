import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Card, CardHeader } from "@/components/ui/card";
import { CircularTestimonialsDemo } from "./Testimonial";
import AboutMeSummary from "./MySummary";
import MyHeadLine, { AnimatedTextCycleDemo } from "./MyHeading";

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
