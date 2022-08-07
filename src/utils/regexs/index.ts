const regexs = {
  emailRegx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  passwordRegx: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
}
const { emailRegx, passwordRegx } = regexs;
export { emailRegx, passwordRegx };