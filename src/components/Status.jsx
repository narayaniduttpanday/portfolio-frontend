export default function Status({ loading, error }) {
  if (loading) return <p className="muted">Loading...</p>;
  if (error) return <p className="muted">Couldn't load this section. Please try again later.</p>;
  return null;
}
