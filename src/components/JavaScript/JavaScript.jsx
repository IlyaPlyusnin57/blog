import { Link } from "react-router-dom";

import "./JavaScript.scss";

function JavaScript() {
  return (
    <section>
      <h1>JavaScript Articles</h1>

      <div className="article-list">
        <h2>Arrays</h2>

        <Link
          className="article-link"
          to="/javascript/is-array"
          state={{ value: "IsArray" }}
        >
          <span>Check if an Object is an Array</span>
        </Link>

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
