
// get elemnts

const formInputData = document.getElementById("formInput") as HTMLFormElement;
const displayResumeGenerateData = document.getElementById("displayResumeData") as HTMLDivElement;

// handle form submission
formInputData.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // prevent page re loaded


    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;


    // dynamically generate resume
    const resumeHtml = `
    <h2><b> Editable Resume Builder </b></h2>
    <h3>Personal Informition</h3>
    <p><b>Name :</b><span contenteditable="true">${name}</span></p>
    <p><b>Phone :</b><span contenteditable="true">${phone}</span></p>
    <p><b>Email :</b><span contenteditable="true">${email}</span></p>


    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    `;
    // display generated resume

    if (displayResumeGenerateData) {
        displayResumeGenerateData.innerHTML = resumeHtml;

    }
    else {
        console.error("the resume display element is missing")
    }
});