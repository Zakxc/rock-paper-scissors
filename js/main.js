function o(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let c=getRandomInt(1,3) , b = 2;
  if (b==c){
    location.href = '../html/s.html'
 
  }
  if (b>c) {
    location.href = '../html/ss.html'

  }
  if (b<c) {
    location.href = '../html/sss.html'

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
    location.href = '../html/p.html'
  }
  if (b>c) {
    location.href = '../html/pp.html'
  }
  if (b<c) {
    location.href = '../html/ppp.html'
  }
}
function s(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let c=getRandomInt(1,3) , b = 2;
  if (b==c){
    location.href = '../html/r.html'
  }
  if (b>c) {
    location.href = '../html/rr.html'
  }
  if (b<c) {
    location.href = '../html/rrr.html'
  }
}