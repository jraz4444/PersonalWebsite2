document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleResumeButton').addEventListener('click', function() {
        var resumeSection = document.getElementById('resumeSection');
        if (resumeSection.style.display === 'none' || resumeSection.style.display === '') {
            resumeSection.style.display = 'block';  // Show the resume
        } else {
            resumeSection.style.display = 'none';   // Hide the resume
        }
    });
});
