import { profile } from "../profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h3 className="section-title">About me</h3>
        <div className="about-grid">
          <div>{profile.about.map((p, i) => <p key={i}>{p}</p>)}</div>
          <div className="stats">
            {profile.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
