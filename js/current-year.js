function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
}

document.addEventListener("DOMContentLoaded", setCurrentYear);
