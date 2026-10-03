type DetailSectionProps = {
  label: string;
  heading: string;
  body?: string;
  points?: string[];
  note?: string;
};

export function DetailSection({ label, heading, body, points, note }: DetailSectionProps) {
  return (
    <section className="detail-section" data-reveal="section">
      <div className="detail-section__label micro" data-parallax="" data-parallax-speed="-18">{label}</div>
      <div className="detail-section__content">
        <h2>{heading}</h2>
        {body && <p>{body}</p>}
        {points && (
          <ol className="process-list">
            {points.map((point, index) => (
              <li key={point}>
                <span className="micro">{String(index + 1).padStart(2, "0")}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        )}
        {note && <p className="detail-section__note">{note}</p>}
      </div>
    </section>
  );
}
