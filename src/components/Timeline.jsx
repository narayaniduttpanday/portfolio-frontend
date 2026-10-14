import { getExperience } from "../api";
import useFetch from "./useFetch";
import Status from "./Status";

export default function Timeline({ id, title, type, alt }) {
  const { data, error, loading } = useFetch(() => getExperience(type));
  return (
    <section id={id} className={alt ? "section alt" : "section"}>
      <div className="container">
        <h3 className="section-title">{title}</h3>
        <Status loading={loading} error={error} />
        <div className="timeline">
          {(data || []).map((e) => (
            <div className="t-item" key={e.id}>
              <div className="t-head">
                <h4>{e.title}</h4>
                <span className="period">{e.period}</span>
              </div>
              <p className="org">{e.organization}</p>
              {e.details && (
                <ul>{e.details.split("\n").map((d, i) => <li key={i}>{d}</li>)}</ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
