import { Link } from "react-router-dom";

import "./JavaScript.scss";

function JavaScript() {
  return (
    <section>
      <h1>JavaScript Articles</h1>

      <div className="article-list">
        <Link
          className="article-link"
          to="/javascript/remove-duplicates"
          state={{ value: "RemoveDuplicates" }}
        >
          <span>Remove Duplicates from an Array</span>
        </Link>
      </div>
    </section>
  );
}

export default JavaScript;
