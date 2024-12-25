function o(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let c=getRandomInt(1,3) , b = 2 ;
  if (b==c){
    alert("Ничья: противник выбрал ножницы")
  }
  if (b>c) {
    alert("победа: противник выбрал бумагу")
  }
  if (b<c) {
    alert("проигрыш: противник выбрал камень")
  }
}
function d(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let c=getRandomInt(1,3) , b = 2 ;
  if (b==c){
    alert("Ничья: противник выбрал бумагу")
  }
  if (b>c) {
    alert("победа: противник выбрал камень")
  }
  if (b<c) {
    alert("проигрыш: противник выбрал ножницы")
  }
}
function s(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let c=getRandomInt(1,3) , b = 2 ;
  if (b==c){
    alert("Ничья: противник выбрал камень")
  }
  if (b>c) {
    alert("победа: противник выбрал ножницы")
  }
  if (b<c) {
    alert("проигрыш: противник выбрал бумагу")
  }
}