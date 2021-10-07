export const loginValidation = (username, password) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (username === '') {
    return {
      valid: false,
      errors: username === '' ? "Please Enter Your Email" : null
    }
  }
  else if (reg.test(username) === false) {
    return {
      valid: false,
      errors: reg.test(username) === false ? "Email format is invalid" : null
    }
  }

  else if (password === '') {
    return {
      valid: false,
      errors: password === '' ? "Please Enter Your Password" : null
    }
  }
  else if (password.length < 6) {
    return {
      valid: false,
      errors: password.length < 6 ? "Password must should contain 6 digits" : null
    }
  }
  else {
    return { valid: true, errors: null }
  }
}
