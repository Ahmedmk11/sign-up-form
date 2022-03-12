function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}
document.querySelector('.theme-toggle').addEventListener('click', setTheme)

let currentYear = new Date().getFullYear(); 
let startYr = document.getElementById("starting-year").textContent;
if(startYr != currentYear){
    document.getElementById("current-year").textContent = `-${currentYear}`;
}