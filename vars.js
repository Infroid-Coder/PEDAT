let authPopupWrap = document.getElementById("auth-popup-wrapper");
let authPopup = document.getElementById("auth-popup");
let loginPopup =  document.getElementById("login-popup");
let registerPopup =  document.getElementById("register-popup");

let loginPopupOpenBtn = document.getElementById("login-a");
let registerPopupOpenBtn = document.getElementById("register-a");
let popupCloseBtn = document.getElementById("popup-close-btn");

let aboutCards = document.querySelectorAll(".about-card");
let aboutTexts = document.querySelectorAll(".about-text");

let registerAsStudent = document.getElementById("register-as-student");
let registerAsTeacher = document.getElementById("register-as-teacher");

let studentInputs = document.getElementById("register-s");
let teacherInputs = document.getElementById("register-t");

let registerName = document.getElementById("register-name");
let registerUName = document.getElementById("register-uname");
let registerPsw = document.getElementById("register-psw");
let registerSubject = document.getElementById("register-t-subject");
let registerGrade = document.getElementById("register-s-grade");
let registerBtn = document.getElementById("register");

let loginUName = document.getElementById("login-uname");
let loginPsw = document.getElementById("login-psw");
let loginBtn = document.getElementById("login");

let registerInputs = document.querySelectorAll("#register-popup input");
let loginInputs = document.querySelectorAll("#login-popup input");

let isTeacher = 0; // Bool(Student) = 0, Bool(Teacher) = 1;
