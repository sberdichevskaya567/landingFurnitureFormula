import {useEffect, useState} from "react";

interface IWindowSizeProps {
    width: number
}

const useWindowSizeHook = (): IWindowSizeProps  => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = (event: Event) => {
            setWidth((event.target as Window).innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { width }
}

export { useWindowSizeHook }