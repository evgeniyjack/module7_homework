const createEmptyObject = () => {
  return Object.create(null);
}

const obj = createEmptyObject();
console.log(obj.toString()); // ошибка, так как у объекта нет прототипа