document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    var currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Update last modified date in footer
    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last modified: ' + lastModified;
});


