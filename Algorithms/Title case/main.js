function titleCase(str) {
  const updatedTitle = [];
  const newTitle = str.split(" ");
  for (let i in newTitle) {
    updatedTitle[i] = newTitle[i][0].toUpperCase() + newTitle[i].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
