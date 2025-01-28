import { useEffect } from "react";

type useCloseSidebarPropsType = {
    ref: React.RefObject<HTMLElement>;
    toggleRef: React.RefObject<HTMLElement>;
    callback: () => void;
    condition: boolean;
};

export const useCloseSidebar = ({ ref, toggleRef, callback, condition }: useCloseSidebarPropsType) => {
    useEffect(() => {
        const handleCloseSidebar = (event: MouseEvent) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                !toggleRef.current?.contains(event.target as Node) &&
                condition
            ) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleCloseSidebar);

        return () => {
            document.removeEventListener('mousedown', handleCloseSidebar);
        };
    }, [ref, toggleRef, callback, condition]);
};
