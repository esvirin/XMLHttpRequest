const app = document.querySelector("#app");

const addNode = function (nodeType, className, textCont) {
  const elem = document.createElement(nodeType);
  elem.classList.add(className);
  elem.textContent = textCont;
  return function putItInToTheDOM(where) {
    return where.append(elem);
  };
};

const newNode = addNode("h1", "treeSection", "i am a boss");
newNode(app);
