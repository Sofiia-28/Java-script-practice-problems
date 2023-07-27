const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}
    Elements: ${element.lastElementChild.children.length}`);
});
