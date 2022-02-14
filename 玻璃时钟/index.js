const DEF = 6;
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let minute = day.getMinutes() * 6;
    let second = day.getSeconds() * 6;
    hr.style.transform = `rotateZ(${hour + (minute / 12)}deg)`;
    mn.style.transform = `rotateZ(${minute}deg)`;
    sc.style.transform = `rotateZ(${second}deg)`;
});