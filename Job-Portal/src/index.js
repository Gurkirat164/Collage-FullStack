console.log("Hello World!");
let jobTitle = document.getElementById("job_title");
let companyName = document.getElementById("company");
let jobLocation = document.getElementById("location");
let jobType = document.getElementById("job_type");
let experience = document.getElementById("experience");
let salary = document.getElementById("salary");
let jobDescription = document.getElementById("description");
let skills = document.getElementById("skills");
let contact = document.getElementById("contact_person");
let email = document.getElementById("contact_email");

let submit = document.getElementById("submit_button");
let clear = document.getElementById("clear_button");

const editJobIndex = localStorage.getItem("editJobIndex");
const editJobData = localStorage.getItem("editJobData");

if (editJobIndex !== null && editJobData) {
    const job = JSON.parse(editJobData);
    jobTitle.value = job.title;
    companyName.value = job.company;
    jobLocation.value = job.location;
    jobType.value = job.type;
    experience.value = job.experience;
    salary.value = job.salary;
    jobDescription.value = job.description;
    skills.value = job.skills;
    contact.value = job.contactPerson;
    email.value = job.contactEmail;
    
    submit.textContent = "Update Job";
}

submit.addEventListener("click", function(event) {
    event.preventDefault(); 
    let jobData = {
        title: jobTitle.value,
        company: companyName.value,
        location: jobLocation.value,
        type: jobType.value,
        experience: experience.value,
        salary: salary.value,
        description: jobDescription.value,
        skills: skills.value,
        contactPerson: contact.value,
        contactEmail: email.value
    };
    clearForm();
    
    if (editJobIndex !== null) {
        updateJob(parseInt(editJobIndex), jobData);
        localStorage.removeItem("editJobIndex");
        localStorage.removeItem("editJobData");
        alert("Job Updated Successfully!");
    } else {
        addJobs(jobData);
        alert("Job Posted Successfully!");
    }
    
    console.log("Job Data Submitted: ", jobData);
});

function addJobs(jobData) 
{
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(jobData);
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

function updateJob(index, jobData) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs[index] = jobData;
    localStorage.setItem("jobs", JSON.stringify(jobs));
}



function clearForm() {
    jobTitle.value = "";
    companyName.value = "";
    jobLocation.value = "";
    jobType.value = "";
    experience.value = "";
    salary.value = "";
    jobDescription.value = "";
    skills.value = "";
    contact.value = "";
    email.value = "";
    console.log("Form Cleared");
}


clear.addEventListener("click", function(event) {
    event.preventDefault(); 
    clearForm();
    console.log("Form Cleared");
});
