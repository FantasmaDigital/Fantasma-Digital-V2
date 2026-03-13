import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

export const ScrollToTop = () => {
    const { isScrolled } = useScroll(500);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className={`fixed bottom-10 right-10 z-[49] p-3 bg-[#040406] border border-primary/30 text-primary rounded-sm transition-all duration-500 hover:bg-primary hover:text-[#040406] hover:shadow-[0_0_30px_rgba(250,177,110,0.3)] ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
            <ArrowUp size={20} />
        </button>
    );
};
