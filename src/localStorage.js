export const loadState = () => {
  try {
    const localState = localStorage.getItem("state");
    if (localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const newState = JSON.stringify(state);

    localStorage.setItem("state", newState);
    console.log("itemi localstorageen..");
  } catch (err) {
    // Ignore write errors.
  }
};
