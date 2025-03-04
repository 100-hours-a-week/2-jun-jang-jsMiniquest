console.log('Start');

setTimeout(() => {
  console.log('Async Operation Complete');
}, 1000);

console.log('End');


//비동기적 동작이기 때문에, setTimeout의 콜백 함수는 1초가 지나야 실행되며, 그 전에 console.log('End')가 먼저 실행됩니다.