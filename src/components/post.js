import { useState } from "react";
import Heart from "./heart";

export default function Post({ src, title, date, explanation }) {
  const [isLiked, setLiked] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  return (
    <article className="card">
      <img src={src} alt={title} onDoubleClick={() => setLiked(true)} />

      <div className="card-strip">
        <Heart isLiked={isLiked} setLiked={setLiked} />
        <span className="card-date">{date}</span>
      </div>

      <div className={"card-text " + (!isExpanded && "truncate")}>
        <h3>{title}</h3>
        <span>{explanation}</span>
      </div>

      {!isExpanded && (
        <button
          className="more"
          onClick={() => setExpanded(true)}
          type="button"
        >
          more
        </button>
      )}
    </article>
  );
}
