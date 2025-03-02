import {useState, useEffect} from "react";

export const useResponsiveVisibility = (breakpoint: number) => {
    const [isVisible, setIsVisible] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < breakpoint) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [breakpoint]);

    return isVisible;
};