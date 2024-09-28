function downloadResumeAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Sample content - Replace with dynamic content from your form
    const name = "John Doe";
    const contact = "johndoe@example.com";
    const skills = "JavaScript, HTML, CSS";
    const education = "B.Sc. in Computer Science";
    const workExperience = "Frontend Developer at XYZ Corp.\nDeveloped web applications using React.";

    // Add content to PDF
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Contact: ${contact}`, 10, 20);
    doc.text(`Skills: ${skills}`, 10, 30);
    doc.text(`Education: ${education}`, 10, 40);
    doc.text(`Work Experience:`, 10, 50);
    doc.text(workExperience, 10, 60);

    // Save the generated PDF
    doc.save('resume.pdf');
}
