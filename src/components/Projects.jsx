import { getProjects } from "../api";
import useFetch from "./useFetch";
import Status from "./Status";

export default function Projects() {
  const { data, error, loading } = useFetch(getProjects);
  return (
    <section id="projects" className="section">
      <div className="container">
        <h3 className="section-title">Projects</h3>
        <Status loading={loading} error={error} />
        <div className="project-grid">
          {(data || []).map((p) => (
            <article className="card project" key={p.id}>
              <div className="project-head">
                <h4>{p.title}</h4>
                <span className="period">{p.period}</span>
              </div>
              <p>{p.description}</p>
              <div className="chips">
                {p.techStack.split(",").map((t) => <span className="chip" key={t}>{t.trim()}</span>)}
              </div>
              <div className="card-links">
                {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer">GitHub →</a>}
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer">Live demo →</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
