import React from "react";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
} from "./style/NotFound";

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Movie Not Found</NotFoundTitle>
      <NotFoundText>
        Sorry, the movie you are looking for could not be found.
      </NotFoundText>
    </NotFoundContainer>
  );
}
export default NotFound;
