// Get the modals
var pdfModal = document.getElementById("pdfModal");
var contactModal = document.getElementById("contactModal");

// Get the button that opens the PDF modal
var btnPdf = document.getElementById("btnShowPdf");

// PDF button click event
if (btnPdf) {
  // Check if btnPdf exists on the page
  btnPdf.onclick = function () {
    pdfModal.style.display = "block";
  };
}

// Contact link click event
var btnContact = document.querySelector(".navigation a[href='contact.html']");
if (btnContact) {
  btnContact.onclick = function (e) {
    e.preventDefault(); // Prevent navigation
    contactModal.style.display = "block";
  };
}

// Close button click events
var spanCloseButtons = document.getElementsByClassName("close");
for (var i = 0; i < spanCloseButtons.length; i++) {
  spanCloseButtons[i].onclick = function () {
    if (pdfModal) pdfModal.style.display = "none";
    if (contactModal) contactModal.style.display = "none";
  };
}

// Clicking outside modal events
window.onclick = function (event) {
  if (event.target == pdfModal) {
    pdfModal.style.display = "none";
  }
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
};
