import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[], offset = 100) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for (const sectionId of sectionIds) {
                const section = document.getElementById(sectionId);
                if (!section) continue;

                const { offsetTop, offsetHeight } = section;
                const sectionBottom = offsetTop + offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
};