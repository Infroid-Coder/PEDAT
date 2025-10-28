function isValidUsername(username){
    const reg = /^[a-z0-9]\w{3,12}$/;
    return reg.test(username);
}
function isValidPSW(psw){
    const reg = /^.{10,25}$/;
    return reg.test(psw);
}
function isValidName(name){
    const reg = /^([a-zA-Z]{3,15} ){0,2}([a-zA-Z]{3,15})$/;
    return reg.test(name);
}
function isValidGrade(gradeVal){
    const reg = /^g([1-9]|1[0-3])$/;
    return reg.test(gradeVal);
}
function isValidSubject(subj){
    const reg = /^(buddhism|sinhala|math|science|history|english|commerce|entrepreneur|geo|tamil|civic|emusic|wmusic|drama|dancing|art|ict|health)$/
    return reg.test(subj);
}

registerBtn.onclick = () => {
    let valid = true;
    let uname = registerUName.value.trim().toLowerCase(),
        psw = registerPsw.value.trim(),
        name = registerName.value.trim(),
        subj = registerSubject.value.trim(),
        grade = registerGrade.value.trim();
    if(!isValidUsername(uname)) valid = false;
    if(!isValidPSW(psw)) valid = false;
    if(!isValidName(name)) valid = false;

    let sendObj;

    if(valid){
        sendObj = {
            isTeacher: Boolean(isTeacher),
            isStudent: !Boolean(isTeacher),
            username: uname,
            psw: psw,
            name: name,
        };
        if(isTeacher){
            if(!isValidSubject(subj)) valid = false;
            sendObj.subject = subj;
        } else{
            if(!isValidGrade(grade)) valid = false;
            sendObj.grade = grade;
        }
    }

    if(valid){
        fetch('/register', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendObj)
        })
        .then(res => res.json())
        .then(json => alert(json.message));
    }
}


loginBtn.onclick = () => {
    let valid = true;
    let uname = loginUName.value, psw = loginPsw.value;
    if(!isValidUsername(uname)) valid = false;
    if(!isValidPSW(psw)) valid = false;

    let sendObj = {
        username: uname,
        psw: psw
    }

    if(valid){
        fetch('/login', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendObj)
        })
        .then(res => res.json())
        .then(json => alert(json.message));
    }
};
