import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Grain } from '../components/layout/Grain';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { ScrollToTopOnNav } from '../components/layout/ScrollToTopOnNav';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-background font-body">
            <ScrollToTopOnNav />
            <Grain />
            <Navbar />
            <ScrollToTop />
            <main className="pt-24 min-h-[calc(100vh-theme(spacing.24))] flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
};
