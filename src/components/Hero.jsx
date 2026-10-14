import { profile } from "../profile";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="lead">{profile.tagline}</p>
          <div className="actions">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn" href={profile.resume} download>Download resume</a>
            <a className="btn ghost" href="#contact">Contact me</a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
        <img className="avatar" src="/profile.jpg" alt={profile.name} />
      </div>
    </section>
  );
}
