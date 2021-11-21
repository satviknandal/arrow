/*
  Keyboard Accessibility:
  for clicking on interactive elements like those with role="button"
 */
export const handleClickEquivalentKeyDown = (e, handler) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handler();
  }
};

/*
  Keyboard Accessibility:
  for closing a dropdown (or other purposes you see fit)
 */
export const handleEscapeKeyDown = (e, handler) => {
  if (e.key === "Escape") {
    e.preventDefault();
    handler();
  }
};
