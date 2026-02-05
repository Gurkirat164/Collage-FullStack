// Load jobs from localStorage
const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
const jobListings = document.getElementById("job-listings");
const jobCount = document.getElementById("job-count");
const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

// Update count
jobCount.textContent = `Total openings: ${jobs.length}`;

if (jobs.length > 0) {
    jobs.forEach((jobData, index) => {
        const jobArticle = document.createElement("article");
        jobArticle.className = "border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-xl transition";
        
        const hasApplied = appliedJobs.includes(index);
        const applyButton = hasApplied 
            ? `<button disabled class="inline-block bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed font-semibold">Already Applied</button>`
            : `<button onclick="applyToJob(${index})" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">Apply Now</button>`;
        
        jobArticle.innerHTML = `
            <h3 class="text-2xl font-bold text-gray-800 mb-4">${jobData.title}</h3>
            <dl class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                    <dt class="text-sm font-semibold text-gray-600">Company:</dt>
                    <dd class="text-gray-800">${jobData.company}</dd>
                </div>
                <div>
                    <dt class="text-sm font-semibold text-gray-600">Location:</dt>
                    <dd class="text-gray-800">${jobData.location}</dd>
                </div>
                <div>
                    <dt class="text-sm font-semibold text-gray-600">Experience:</dt>
                    <dd class="text-gray-800">${jobData.experience || 'Not specified'}</dd>
                </div>
                <div>
                    <dt class="text-sm font-semibold text-gray-600">Salary:</dt>
                    <dd class="text-gray-800">${jobData.salary || 'Not specified'}</dd>
                </div>
                <div class="md:col-span-2">
                    <dt class="text-sm font-semibold text-gray-600">Skills:</dt>
                    <dd class="text-gray-800">${jobData.skills || 'Not specified'}</dd>
                </div>
            </dl>
            <div class="flex gap-3">
                ${applyButton}
                <button onclick="editJob(${index})" class="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold">Edit</button>
                <button onclick="deleteJob(${index})" class="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold">Delete</button>
            </div>
        `;
        
        jobListings.appendChild(jobArticle);
    });
} else {
    const noJobsMsg = document.createElement("div");
    noJobsMsg.className = "text-center mt-8";
    noJobsMsg.innerHTML = `
        <p class="text-gray-500 text-lg mb-4">No jobs posted yet. Post your first job!</p>
        <a href="post-job.html" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">Post a Job</a>
    `;
    jobListings.appendChild(noJobsMsg);
}

function applyToJob(index) {
    let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    appliedJobs.push(index);
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    window.location.href = "apply.html";
}

function editJob(index) {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const job = jobs[index];
    
    localStorage.setItem("editJobIndex", index);
    localStorage.setItem("editJobData", JSON.stringify(job));
    window.location.href = "post-job.html";
}

function deleteJob(index) {
    if (confirm("Are you sure you want to delete this job?")) {
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        jobs.splice(index, 1);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        location.reload();
    }
}
