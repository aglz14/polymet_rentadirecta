import React from "react";
import Header from "@/polymet/components/header";
import Footer from "@/polymet/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}
