const categories = document.querySelector("#categories");
const totalCategories = categories.children;
console.log(`Number of categores: ${totalCategories.length}`);
[...totalCategories].forEach((element) => {
  console.log(element.textContent);
});
