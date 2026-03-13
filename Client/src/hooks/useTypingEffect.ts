import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, delay = 0, speed = 50, trigger = true) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDone, setIsDone] = useState(false);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!trigger) return;
        const timer = setTimeout(() => setStart(true), delay);
        return () => clearTimeout(timer);
    }, [delay, trigger]);

    useEffect(() => {
        if (!start || !trigger) return;
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                setIsDone(true);
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [start, text, speed, trigger]);

    return { displayedText, isDone, start };
};
