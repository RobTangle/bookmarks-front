import "./card.style.css";

export function Card({ resource }) {
  return (
    <div className="card">
      <h3>{resource.title}</h3>
      <p>{resource.description || "No description provided."}</p>
      <a href={resource.link} target="_blank">
        LINK TO RESOURCE
      </a>
    </div>
  );
}
