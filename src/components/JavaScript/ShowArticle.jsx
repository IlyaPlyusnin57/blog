import { useLocation } from "react-router-dom";
import RemoveDuplicates from "./Articles/RemoveDuplicates";
import IsArray from "./Articles/IsArray";

import "./ShowArticle.scss";

const mappingComponents = {
  RemoveDuplicates,
  IsArray,
};

function ShowArticle() {
  const {
    state: { value: component },
  } = useLocation();

  const Component = mappingComponents[component];

  return <Component />;
}

export default ShowArticle;
