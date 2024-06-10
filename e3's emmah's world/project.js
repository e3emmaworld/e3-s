function startTime () {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" +  m  + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
// mouseflash move light
document.addEventListener('mousemove', function(e) {
    const flashlight = document.getElementById('flashlight');
    flashlight.style.left = `${e.clientX - flashlight.offsetWidth / 1}px`;
    flashlight.style.top = `${e.clientY - flashlight.offsetHeight / 1}px`;
  });

  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!email.match(emailPattern)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password === '') {
      document.getElementById('passwordError').textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      isValid = false;
    }

    // If form is valid, display a success message
    if (isValid) {
      document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    }
  });
  
  