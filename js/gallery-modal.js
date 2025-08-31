document.addEventListener("DOMContentLoaded", function () {
    // Create modal elements
    const modal = document.createElement("div");
    modal.id = "img-modal";
    modal.style.cssText = `
        display:none;position:fixed;z-index:9999;top:0;left:0;width:100vw;height:100vh;
        background:rgba(0,0,0,0.85);justify-content:center;align-items:center;
    `;
    const modalImg = document.createElement("img");
    modalImg.style.cssText = `
        max-width:90vw;
        max-height:90vh;
        box-shadow:0 0 20px #000;
        object-fit:contain;
        width:auto;
        height:auto;
        display:block;
    `;
    modal.appendChild(modalImg);

    // Close modal on click
    modal.addEventListener("click", () => { modal.style.display = "none"; });

    document.body.appendChild(modal);

    // Attach click listeners to gallery images
    document.querySelectorAll("a.photo").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            modalImg.src = link.href;
            modal.style.display = "flex";
        });
    });
});