import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, House, PanelsTopLeft } from "lucide-react";
import BeSpokeDesignsProject, { CountriesDeck, SsrInfraProject } from "./ComingSoon";

function MyProjects() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea>
        <TabsList className="mb-3">
          <TabsTrigger value="tab-1">
            <House
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Professional
          </TabsTrigger>
          <TabsTrigger value="tab-2" className="group">
            <PanelsTopLeft
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Personal
            <Badge
              className="ms-1.5 min-w-5 bg-primary/15 px-1 transition-opacity group-data-[state=inactive]:opacity-50"
              variant="secondary"
            >
              3
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="tab-3" className="group">
            <Box
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Freelance
            <Badge className="ms-1.5 transition-opacity group-data-[state=inactive]:opacity-50">
              New
            </Badge>
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">
        <div className="md:flex gap-[2vw] min-h-min">
          <BeSpokeDesignsProject></BeSpokeDesignsProject>
          <SsrInfraProject></SsrInfraProject>
          <SsrInfraProject></SsrInfraProject>
        </div>
      </TabsContent>
      <TabsContent value="tab-2" className="min-h-min">
        <div className="md:flex gap-[2vw] ">
            <CountriesDeck></CountriesDeck>
        </div>
      </TabsContent>
      <TabsContent value="tab-3" className="min-h-min">
        <div className="md:flex gap-[2vw] ">
            <SsrInfraProject></SsrInfraProject>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export { MyProjects };
