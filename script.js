function verifyCin() {
    // Updated information for the CIN number
    const cinData = {
        'CIN242419': {  // Updated CIN number
            name: 'RISHI SINGH',  // Updated name
            college: 'Veer Bahadur Singh Puruvanchal University',
            internship: 'Web Development Internship',
            lor: 'Recommendation Letter from Ashish',
            startDate: '2024-06-01',
            endDate: '2024-07-01',
            issueDate: '2024-08-01'
        }
    };
  
    const cinInput = document.getElementById('verifyCin').value.trim();
    const infoDisplay = document.getElementById('infoDisplay');
  
    if (cinData[cinInput]) {
        const data = cinData[cinInput];
        infoDisplay.innerHTML = `
            <h3>Internship Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>College:</strong> ${data.college}</p>
            <p><strong>Internship Track:</strong> ${data.internship}</p>
            <p><strong>LOR:</strong> ${data.lor}</p>
            <p><strong>Start Date:</strong> ${data.startDate}</p>
            <p><strong>End Date:</strong> ${data.endDate}</p>
            <p><strong>Issue Date:</strong> ${data.issueDate}</p>
        `;
    } else {
        infoDisplay.innerHTML = `<p>No information available for CIN: ${cinInput}</p>`;
    }
}
  
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
  
    // Here you would typically send the data to the server using fetch or XMLHttpRequest
    // For demonstration purposes, we'll just show an alert.
    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Clear the form fields
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
});
