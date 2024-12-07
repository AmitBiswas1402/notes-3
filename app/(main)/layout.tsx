"use client"

import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import {Navigation} from "./(routes)/_components/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Loader />
            </div>
        )
    }

    if (!isAuthenticated) {
        return redirect("/")
    }

  return (
    <div className="h-full flex dark:bg-black">
        <Navigation /> 
        <main>
            {children}
        </main>
    </div>
  );
}
