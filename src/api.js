const BASE = import.meta.env.VITE_API_URL || "";

async function get(path) {
  const res = await fetch(`${BASE}/api${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const getProjects = () => get("/projects");
export const getSkills = () => get("/skills");
export const getExperience = (type = "WORK") => get(`/experience?type=${type}`);

export async function sendMessage(data) {
  const res = await fetch(`${BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Could not send message");
  return res.json();
}
