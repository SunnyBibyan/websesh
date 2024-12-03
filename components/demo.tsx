"use client";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

export function Demo() {
  return (
    <Container id="demo">
      <SectionHeader
        title="See Websesh in Action"
        description="Experience how Websesh transforms your meeting workflow"
      />
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80"
            alt="Websesh Demo"
            className="object-cover w-full h-full"
          />
        </div>
      </Card>
    </Container>
  );
}