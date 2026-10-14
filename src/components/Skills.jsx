import { getSkills } from "../api";
import useFetch from "./useFetch";
import Status from "./Status";

export default function Skills() {
  const { data, error, loading } = useFetch(getSkills);
  const groups = (data || []).reduce((acc, s) => {
    (acc[s.category] = acc[s.category] || []).push(s.name);
    return acc;
  }, {});
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h3 className="section-title">Skills</h3>
        <Status loading={loading} error={error} />
        <div className="skill-grid">
          {Object.entries(groups).map(([cat, names]) => (
            <div className="card" key={cat}>
              <h4>{cat}</h4>
              <div className="chips">{names.map((n) => <span className="chip" key={n}>{n}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
