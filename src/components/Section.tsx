import React from "react";

interface SectionProps {
    title: string;
    subtitle: string;
    dark: boolean;
    id: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, dark, id }): JSX.Element => {
  return (
    <div className={"hashes section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Section;