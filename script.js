// function to get the current scroll height of an element
function getScrollHeight(elem){
    const rect = elem.getBoundingClientRect();
    const height = scrollY + rect.top - innerHeight;
    return height;
}

authPopupWrap.onclick = e => {
    if(e.target === authPopupWrap){
        popupCloseBtn.click();
    }
}
loginPopupOpenBtn.onclick = () => {
    authPopupWrap.style.display = "grid";
    loginPopup.style.display = "block";
}
registerPopupOpenBtn.onclick = () => {
    authPopupWrap.style.display = "grid";
    registerPopup.style.display = "block";
}
popupCloseBtn.onclick = () => {
    authPopup.style.animation = "shrink .3s";
    authPopup.onanimationend = () => {
        authPopupWrap.style.display = "none";
        registerPopup.style.display = "none";
        loginPopup.style.display = "none";
        authPopup.style.animation = "expand .3s"
        authPopup.onanimationend = null;
        studentInputs.style.animation = "none";
        teacherInputs.style.animation = "none";
    }
}


let animationStyle = ["slide-from-left .3s", "slide-from-left-2 .4s", "slide-from-left-3 .7s"];

window.addEventListener("scroll", e => {
    aboutCards.forEach((card, i) => {
        if(scrollY >= getScrollHeight(card)){
            card.style.animation = animationStyle[i];
            card.style.dispay = "grid";
        }
    });
    aboutTexts.forEach((text, i) => {
        if(scrollY >= getScrollHeight(text)){
            text.style.animation = "slide-fade-in 1.1s";
            text.style.dispay = "block";
        }
    });
    if(scrollY >= getScrollHeight(aboutTextRes)){
        aboutTextRes.style.animation = "slide-fade-in 1.1s";
    }
});



if(isTeacher){
    registerAsTeacher.classList.add("register-type-selected");
    registerAsStudent.classList.remove("register-type-selected");
    studentInputs.style.display = "none"
    teacherInputs.style.display = "block";
} else{
    registerAsTeacher.classList.remove("register-type-selected");
    registerAsStudent.classList.add("register-type-selected");
    studentInputs.style.display = "block";
    teacherInputs.style.display = "none"
}

registerAsStudent.onclick = () => {
    registerAsTeacher.classList.remove("register-type-selected");
    registerAsStudent.classList.add("register-type-selected");

    let isTeacherVisible = getComputedStyle(teacherInputs).display !== "none";

    if(isTeacherVisible){
        teacherInputs.style.animation = "register-option-shrink .2s";
        teacherInputs.onanimationend = () => {
            teacherInputs.style.display = "none";
            studentInputs.style.animation = "register-option-slide .5s";
            studentInputs.style.display = "block";
            teacherInputs.onanimationend = null;
            teacherInputs.style.animation = "none";
        }
    } else{
        studentInputs.style.display = "block";
    }
    isTeacher = 0;
}
registerAsTeacher.onclick = () => {
    registerAsTeacher.classList.add("register-type-selected");
    registerAsStudent.classList.remove("register-type-selected");

    let isStudentVisible = getComputedStyle(studentInputs).display !== "none";

    if(isStudentVisible){
        studentInputs.style.animation = "register-option-shrink .2s";
        studentInputs.onanimationend = () => {
            studentInputs.style.display = "none";
            teacherInputs.style.animation = "register-option-slide .5s";
            teacherInputs.style.display = "block";
            studentInputs.onanimationend = null;
            studentInputs.style.animation = "none";
        }
    } else{
        teacherInputs.style.display = "block";
    }
    isTeacher = 1;
}

registerInputs.forEach(elem => {
    elem.addEventListener("keydown", e => {
        if(e.key === "Enter" && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey){
            registerBtn.click();
        }
    })
});
loginInputs.forEach(elem => {
    elem.addEventListener("keydown", e => {
        if(e.key === "Enter" && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey){
            loginBtn.click();
        }
    })
});
