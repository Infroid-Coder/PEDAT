function isValidUsername(username){
    const reg = /^[a-zA-Z0-9]\w{3,12}$/;
    return reg.test(username);
}
function isValidPSW(psw){
    const reg = /^.{10,25}$/;
    return reg.test(psw);
}
function isValidName(username){
    const reg = /^([a-zA-Z]{3,15} ){,2}([a-zA-Z]{3,15})$/;
    return reg.test(username);
}

registerBtn.onclick = () => {
    if(isValidUsername(registerUName.value)) alert("Valid Username");
    if(isValidPSW(registerPsw.value)) alert("Valid Password");
    if(isValidName(registerName.value)) alert("Valid Name");
}


loginBtn.onclick = () => alert("Logging In...");