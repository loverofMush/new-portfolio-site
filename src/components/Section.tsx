import React from "react";
import '../styles/portfolio.css';
import '../styles/skills.css';

interface SectionProps {
    content: any;
    dark: boolean;
    id: string;
}

const Section: React.FC<SectionProps> = ({ content, dark, id }): JSX.Element => {
    return (
        <div className={"hashes section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default Section;