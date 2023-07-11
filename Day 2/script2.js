function printNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      setTimeout(() => {
        console.log('3');
      }, 3000);
      setTimeout(() => {
        console.log('4');
      }, 4000);
      setTimeout(() => {
        console.log('2');
      }, 2000);
      console.log('1');
      resolve('berhasil');
    }, 1000);
  });
}

printNumbers()
  .then((ss) => {
    return ss;
  })
  .then((s) => {
    console.log('111', s);
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });
