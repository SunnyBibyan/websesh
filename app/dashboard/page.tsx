'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Header } from "@/components/header";
import { CalendarDays, Users, Settings } from "lucide-react";

export default function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/signin');
    },
  });

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome back, {session?.user?.name?.split(' ')[0]}! 👋</h1>
          <p className="text-muted-foreground text-lg">
            Your meetings dashboard is ready for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Quick Actions</h2>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10">
                  Join Meeting
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Recent Meetings</h2>
              </div>
              <div className="text-muted-foreground">
                <p>No recent meetings found.</p>
                <p className="mt-2">Schedule a meeting to get started!</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">AI Insights</h2>
              </div>
              <div className="text-muted-foreground">
                <p>Your meeting analytics and AI-powered insights will appear here.</p>
                <Button variant="link" className="mt-2 p-0 h-auto text-primary hover:text-primary/80">
                  Learn more about AI features →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
