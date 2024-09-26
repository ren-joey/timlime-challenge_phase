import { RefObject, useCallback, useEffect, useRef } from 'react';

const useScrollSyncByY = (...refs: RefObject<HTMLDivElement>[]) => {
    const isSyncingRef = useRef(false);

    useEffect(() => {
        refs.forEach((ref) => {
            ref.current?.addEventListener('scroll', scrollListener);
        });

        return () => {
            refs.forEach((ref) => {
                ref.current?.removeEventListener('scroll', scrollListener);
            });
        };
    }, []);

    const scrollListener = useCallback((e: Event) => {
        if (isSyncingRef.current) return;

        isSyncingRef.current = true;
        const targetDom = e.target as HTMLDivElement;
        refs.forEach((ref) => {
            if (ref.current && ref.current !== targetDom) {
                ref.current.scrollTop = targetDom.scrollTop;
            }
        });

        // Prevent call loop
        requestAnimationFrame(() => {
            isSyncingRef.current = false;
        });
    }, []);
};

const useScrollSyncByX = (...refs: RefObject<HTMLDivElement>[]) => {
    const isSyncingRef = useRef(false);

    useEffect(() => {
        refs.forEach((ref) => {
            ref.current?.addEventListener('scroll', scrollListener);
        });

        return () => {
            refs.forEach((ref) => {
                ref.current?.removeEventListener('scroll', scrollListener);
            });
        };
    }, []);

    const scrollListener = useCallback((e: Event) => {
        if (isSyncingRef.current) return;

        isSyncingRef.current = true;
        const targetDom = e.target as HTMLDivElement;
        refs.forEach((ref) => {
            if (ref.current && ref.current !== targetDom) {
                ref.current.scrollLeft = targetDom.scrollLeft;
            }
        });

        // Prevent call loop
        requestAnimationFrame(() => {
            isSyncingRef.current = false;
        });
    }, []);
};

export {
    useScrollSyncByX,
    useScrollSyncByY
};