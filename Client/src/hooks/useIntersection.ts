import { useState, useEffect, useRef } from 'react';

export const useIntersection = (options = { threshold: 0.1, rootMargin: '0px' }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Once it's intersecting, we can keep it true to keep animation running
            // or toggle it if we want it to reset. For typing, usually once is enough.
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                // We can stop observing if we only need to trigger it once
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            }
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [options]);

    return { elementRef, isIntersecting };
};
