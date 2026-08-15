type SectionIntroProps = {
  id?: string;
  eyebrow: string;
  title: string;
  summary?: string;
  align?: "start" | "center";
};

export function SectionIntro({
  id,
  eyebrow,
  title,
  summary,
  align = "start",
}: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {summary ? <p className="section-summary">{summary}</p> : null}
    </div>
  );
}
