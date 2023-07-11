let email = document.getElementById('email').value;
let pass = document.getElementById('passwordKu').value;

function checkEmail() {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById('email').value;

  if (mailformat.test(email)) {
    return true;
  }
  return false;
}
function checkPassword() {
  let pass = document.getElementById('passwordKu').value;

  if (pass.length < 6) {
    return false;
  }
  return true;
}
function sendData() {
  let labelEmail = document.getElementById('warning-email');
  let labelPass = document.getElementById('warning-password');

  if (checkEmail() && checkPassword()) {
    return alert('Berhasil login yay');
  } else {
    if (!checkEmail()) {
      labelEmail.classList.add('show');
      labelEmail.classList.remove('hidden');
    } else if (!checkPassword()) {
      labelEmail.classList.add('hidden');
      labelEmail.classList.remove('show');
      labelPass.classList.add('show');
      labelPass.classList.remove('hidden');
    }
    return alert('Gagal login');
  }
}
