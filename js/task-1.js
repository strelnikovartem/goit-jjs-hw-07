const categories = document.querySelector("#categories");
const totalCategories = categories.children;
console.log(totalCategories);
console.log(`Number of categores: ${totalCategories.length}`);
[...totalCategories].forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
