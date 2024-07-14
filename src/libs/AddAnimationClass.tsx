const addAnimationClass = async (ms: number) => {
  // Accessing body and adding class in it
  const body = document.querySelector("body");
  body?.classList.add("page-transition");

  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default addAnimationClass;
