'use client';

import { useEffect, useState } from 'react';

interface ScrollSpyOptions {
    sectionIds: string[];
    offset?: number;
    threshold?: number;
}

export default function useScrollSpy({
    sectionIds,
    offset = 0,
    threshold = 0.6,
}: ScrollSpyOptions): string | null {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
                });
            },
            {
                threshold,
                rootMargin: `-${offset}px 0px 0px 0px`,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds, offset, threshold]);

    return activeId;
}
