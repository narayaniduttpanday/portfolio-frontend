import { useState } from "react";
import { sendMessage } from "../api";
import { profile } from "../profile";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendMessage(form);
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section alt">
      <div className="container contact-grid">
        <div>
          <h3 className="section-title">Get in touch</h3>
          <p>Have an opportunity or a question? Send a message or reach me directly.</p>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
        <form className="card form" onSubmit={submit}>
          <label>Name<input name="name" value={form.name} onChange={change} required maxLength={100} /></label>
          <label>Email<input type="email" name="email" value={form.email} onChange={change} required maxLength={150} /></label>
          <label>Message<textarea name="message" rows="5" value={form.message} onChange={change} required maxLength={2000} /></label>
          <button className="btn primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <p className="ok">Thanks! Your message has been sent.</p>}
          {status === "error" && <p className="err">Something went wrong. Please email me directly.</p>}
        </form>
      </div>
    </section>
  );
}
