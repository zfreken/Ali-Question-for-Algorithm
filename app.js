const gameofgamble = (n,k) => {

  let ai_count=0,c_count=0;

  while (n > 1) {
    if (n%2 == 0 && ai_count < k) {
      n = n/2;
      ai_count++;
    }else{
      n--;
      c_count++;
    }
  }
  console.log('All in Oynanan El Sayısı:',ai_count);
  console.log('Chip Para Oynanan El Sayısı:',c_count);

  return ai_count + c_count;
}


console.log('Toplam El Sayısı:',gameofgamble(18,2));
console.log('---------------------------------');
console.log('Toplam El Sayısı:',gameofgamble(8,0));
console.log('---------------------------------');
console.log('Toplam El Sayısı:',gameofgamble(10,10));



//Alternative method

// function denk(n, k){
//   if(k===0 || n === 1) return n-1;
//   else if(n%2 === 0) return denk(n/2, k-1) + 1;
//   else return denk(n-1, k) + 1;
// }
// console.log(denk(10,10));

