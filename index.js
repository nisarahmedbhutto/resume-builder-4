// get elemnts
var formInputData = document.getElementById("formInput");
var displayResumeGenerateData = document.getElementById("displayResumeData");
// handle form submission
formInputData.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page re loaded
    // collect input values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // dynamically generate resume
    var resumeHtml = "\n    <h2><b> Editable Resume Builder </b></h2>\n    <h3>Personal Informition</h3>\n    <p><b>Name :</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Phone :</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p><b>Email :</b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    ");
    // display generated resume
    if (displayResumeGenerateData) {
        displayResumeGenerateData.innerHTML = resumeHtml;
    }
    else {
        console.error("the resume display element is missing");
    }
});
