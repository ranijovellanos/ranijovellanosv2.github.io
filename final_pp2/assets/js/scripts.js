function downloadResume() {
    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = ""; // Replace with your resume path
    link.download = "John_Doe_Resume.pdf"; // Replace with your desired filename
    link.style.display = 'none'; // Hide the element
  
    // Append the element to the body and trigger the click
    document.body.appendChild(link);
    link.click();
  
    // Remove the element after click
    document.body.removeChild(link);
  }
  