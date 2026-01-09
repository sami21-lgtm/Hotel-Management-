/**
 
 */
function updateImageFromUrl() {
    const urlInput = document.getElementById('imgUrlInput').value;
    const preview = document.getElementById('previewImg');
    
    if (urlInput.trim() !== "") {
        preview.src = urlInput; 
    } else {
        alert("https://www.hoteldel.com/");
    }
}

/**
 
 */
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    
    alert("Success! Guest '" + firstName + " " + lastName + "' has been registered in the system.");
    
    
    this.reset();
    document.getElementById('previewImg').src = "https://via.placeholder.com/150";
});
