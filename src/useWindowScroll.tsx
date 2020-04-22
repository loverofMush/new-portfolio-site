import { useState, useEffect } from 'react';

function debounce(func: () => void, wait = 20, immediate = true) {
    let timeout: any;
    return function() {
        let context: any;
        const args: any = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
  
export function useWindowScroll() {
    const [scrollY, setScrollY] = useState(window.scrollY);
  
    useEffect(
        () => {
            const handleScroll = () => setScrollY(window.scrollY);
            window.addEventListener("scroll", debounce(handleScroll, 20, false));
            return () => window.removeEventListener("scroll", debounce(handleScroll));
        },
        [debounce] // If you remove this, things go 🍌🍌🍌
    );

    return {
        scrollY
    };
}