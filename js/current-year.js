document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }
});
