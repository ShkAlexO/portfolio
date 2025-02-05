import {useEffect, RefObject} from "react";

type useCloseSidebarPropsType = {
    sidebarRef: RefObject<HTMLElement>;
    headerBtnSidebarToggleRef: RefObject<HTMLElement>;
    ignoreClickOnButton?: HTMLElement | null;
    condition: boolean;
    callback: () => void;
};

export const useCloseSidebar = (
    {
        sidebarRef,
        headerBtnSidebarToggleRef,
        ignoreClickOnButton,
        condition,
        callback
    }: useCloseSidebarPropsType) => {
    useEffect(() => {
        const handleCloseSidebar = (event: MouseEvent) => {
            if (ignoreClickOnButton && ignoreClickOnButton.contains(event.target as Node)) {
                return;
            }

            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                !headerBtnSidebarToggleRef.current?.contains(event.target as Node) &&
                condition
            ) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleCloseSidebar);

        return () => {
            document.removeEventListener('mousedown', handleCloseSidebar);
        };
    }, [sidebarRef, headerBtnSidebarToggleRef, ignoreClickOnButton, condition, callback]);
};