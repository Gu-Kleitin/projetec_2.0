  const btn1 = document.getElementById('send1');
  const btn2 = document.getElementById('send2');
  const btn3 = document.getElementById('send3');

  btn1.addEventListener('click', function send1() {
    btn1.classList.add('is-loading');

    // fake API call
    setTimeout(() => {
      btn1.classList.add('is-success');
      btn1.classList.remove('is-loading');
      btn1.removeEventListener('click', send1);
    }, 4000);
  });

  btn2.addEventListener('click', function send2() {
    btn2.classList.add('is-loading');

    // fake API call
    setTimeout(() => {
      btn2.classList.add('is-success');
      btn2.classList.remove('is-loading');
      btn2.removeEventListener('click', send2);
    }, 4000);
  });

  btn3.addEventListener('click', function send3() {
    btn3.classList.add('is-loading');

    // fake API call
    setTimeout(() => {
      btn3.classList.add('is-success');
      btn3.classList.remove('is-loading');
      btn3.removeEventListener('click', send3);
    }, 4000);
  });