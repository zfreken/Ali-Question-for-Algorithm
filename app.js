function mahmut_question(N,K) {

  var K,N,ai_count=0,c_count=0;

  while (N != 1) {
    if (N%2 == 0 && ai_count < K) {
      N = N/2;
      ai_count++;
    }else{
      N = N-1;
      c_count++;
    }
  }

  console.log('All in Oynanan El Sayısı:',ai_count);
  console.log('Chip Para Oynanan El Sayısı:',c_count);

  return ai_count + c_count;

}


console.log('Toplam El Sayısı:',mahmut_question(18,2));
console.log('---------------------------------');
console.log('Toplam El Sayısı:',mahmut_question(8,0));
console.log('---------------------------------');
console.log('Toplam El Sayısı:',mahmut_question(10,10));