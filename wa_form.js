document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;
    const message = encodeURIComponent(document.getElementById("message").value);

    const link = `https://wa.me/${phoneNumber}?text=${message}`;

    document.getElementById("link").value = link;
    document.getElementById("result").classList.remove("hidden");
});

document.getElementById("copyButton").addEventListener("click", function () {
    const linkInput = document.getElementById("link");
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand("copy");
});

document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("phoneNumber").value = "";
    document.getElementById("message").value = "";
    document.getElementById("link").value = "";
    document.getElementById("result").classList.add("hidden");
});
