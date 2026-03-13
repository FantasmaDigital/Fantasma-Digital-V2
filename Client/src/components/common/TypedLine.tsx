import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useIntersection } from '../../hooks/useIntersection';

interface TypedLineProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export const TypedLine: React.FC<TypedLineProps> = ({ text, delay = 0, speed = 50, className = "" }) => {
    const { elementRef, isIntersecting } = useIntersection();
    const { displayedText, isDone, start } = useTypingEffect(text, delay, speed, isIntersecting);

    return (
        <p ref={elementRef as any} className={className}>
            {displayedText}
            {!isDone && start && <span className="animate-pulse">_</span>}
        </p>
    );
};
