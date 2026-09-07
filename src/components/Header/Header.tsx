import * as Styles from "./Header.styles";
import { useEffect, useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection.tsx";
import { useMediaQuery } from "react-responsive";

interface HeaderProps {
    scheduleOpen: boolean;
    bracketOpen: boolean;
    feedbackOpen: boolean;
}

export const Header = ({scheduleOpen, bracketOpen, feedbackOpen}: HeaderProps) => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 700 });

    const sections = ["main", "about", "schedule", "feedback"];
    const activeSection = useActiveSection(sections);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <Styles.Header isScroll={isScroll} isMenuOpen={isMenuOpen}>
            {isMobile ? (
                <>
                    <Styles.MenuToggle onClick={handleMenuToggle}>
                        {isMenuOpen ? <Styles.Cross /> : <Styles.Burger />}
                    </Styles.MenuToggle>
                    {isMenuOpen && (
                        <Styles.MobileMenu>
                            <Styles.Link isActive={activeSection === "main"} href="#main" onClick={handleLinkClick}>Главная</Styles.Link>
                            <Styles.Link isActive={activeSection === "about"} href="#about" onClick={handleLinkClick}>О турнире</Styles.Link>
                            <Styles.Link isActive={activeSection === "schedule"} href="#schedule" onClick={handleLinkClick} disabled={!scheduleOpen}>Расписание</Styles.Link>
                            <Styles.Link isActive={activeSection === "bracket"} disabled={!bracketOpen} href="#bracket" onClick={handleLinkClick}>Турнирная сетка</Styles.Link>
                            <Styles.Link isActive={activeSection === "feedback"} href="#feedback" onClick={handleLinkClick} disabled={!feedbackOpen}>Обратная связь</Styles.Link>
                        </Styles.MobileMenu>
                    )}
                </>
            ) : (
                <>
                    <Styles.Link isActive={activeSection === "main"} href="#main">Главная</Styles.Link>
                    <Styles.Link isActive={activeSection === "about"} href="#about">О турнире</Styles.Link>
                    <Styles.Link isActive={activeSection === "schedule"} href="#schedule" onClick={handleLinkClick} disabled={!scheduleOpen}>Расписание</Styles.Link>
                    <Styles.Link isActive={activeSection === "bracket"} disabled={!bracketOpen} href="#bracket" onClick={handleLinkClick}>Турнирная сетка</Styles.Link>
                    <Styles.Link isActive={activeSection === "feedback"} href="#feedback" disabled={!feedbackOpen}>Обратная связь</Styles.Link>
                </>
            )}
        </Styles.Header>
    );
};
