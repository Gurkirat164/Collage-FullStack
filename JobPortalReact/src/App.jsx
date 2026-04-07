import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

const JOBS_KEY = 'jobs'
const APPLIED_JOBS_KEY = 'appliedJobs'
const EDIT_JOB_INDEX_KEY = 'editJobIndex'
const EDIT_JOB_DATA_KEY = 'editJobData'

const initialForm = {
  title: '',
  company: '',
  location: '',
  type: '',
  experience: '',
  salary: '',
  description: '',
  skills: '',
  contactPerson: '',
  contactEmail: '',
}

function getStoredJobs() {
  return JSON.parse(localStorage.getItem(JOBS_KEY)) || []
}

function getStoredAppliedJobs() {
  return JSON.parse(localStorage.getItem(APPLIED_JOBS_KEY)) || []
}

function Header({ title, subtitle }) {
  return (
    <header className="bg-linear-to-r from-blue-600 to-purple-600 px-4 py-12 text-white">
      <h1 className="mb-2 text-center text-4xl font-bold md:text-5xl">{title}</h1>
      <p className="text-center text-lg text-blue-100">{subtitle}</p>
    </header>
  )
}

function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold hover:text-blue-800 transition'
      : 'text-gray-700 hover:text-blue-600 transition'

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <ul className="flex flex-wrap justify-center gap-6 px-4 py-4 md:gap-8">
        <li><NavLink to="/" className={navClass}>Home</NavLink></li>
        <li><NavLink to="/jobs" className={navClass}>Browse Jobs</NavLink></li>
        <li><NavLink to="/post-job" className={navClass}>Post a Job</NavLink></li>
        <li><NavLink to="/apply" className={navClass}>Apply</NavLink></li>
      </ul>
    </nav>
  )
}

function Footer({ maxWidth = 'max-w-6xl', showHomeLink = false }) {
  return (
    <footer className="mt-12 bg-gray-800 px-4 py-8 text-white">
      <div className={`${maxWidth} mx-auto text-center`}>
        <p className="mb-2">&copy; 2026 Job Portal. All rights reserved.</p>
        {showHomeLink ? (
          <p>
            <Link to="/" className="text-blue-400 hover:text-blue-300">Return to Home</Link>
          </p>
        ) : (
          <address className="not-italic text-gray-300">
            Email:{' '}
            <a href="mailto:support@jobportal.com" className="text-blue-400 hover:text-blue-300">
              support@jobportal.com
            </a>
            <br />
            Phone:{' '}
            <a href="tel:1234567890" className="text-blue-400 hover:text-blue-300">
              1234567890
            </a>
          </address>
        )}
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <Header title="Job Portal" subtitle="Your gateway to career opportunities" />
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="mb-12 rounded-lg bg-white p-8 text-center shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Welcome to Job Portal</h2>
          <p className="text-xl text-gray-600">Find jobs or post openings. Simple. Direct. No nonsense.</p>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Browse by Category</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="rounded-lg bg-blue-50 p-4 transition hover:bg-blue-100"><strong className="text-blue-700">IT Jobs</strong> - Software, Web Development, Data Science</li>
            <li className="rounded-lg bg-purple-50 p-4 transition hover:bg-purple-100"><strong className="text-purple-700">Design Jobs</strong> - Graphic Design, UI/UX</li>
            <li className="rounded-lg bg-green-50 p-4 transition hover:bg-green-100"><strong className="text-green-700">Remote Jobs</strong> - Work from anywhere</li>
            <li className="rounded-lg bg-orange-50 p-4 transition hover:bg-orange-100"><strong className="text-orange-700">Internships</strong> - Build your experience</li>
          </ul>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-lg bg-linear-to-br from-blue-50 to-blue-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-blue-700">For Job Seekers</h3>
              <ol className="list-inside list-decimal space-y-2 text-gray-700">
                <li>Browse available job listings</li>
                <li>Click on jobs that interest you</li>
                <li>Fill out the application form</li>
                <li>Track your applications</li>
              </ol>
            </article>
            <article className="rounded-lg bg-linear-to-br from-purple-50 to-purple-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-purple-700">For Employers</h3>
              <ol className="list-inside list-decimal space-y-2 text-gray-700">
                <li>Create a job posting</li>
                <li>Set job details and requirements</li>
                <li>Review applications</li>
                <li>Connect with talented candidates</li>
              </ol>
            </article>
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Featured Opportunities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-gray-200 p-6 transition hover:shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Senior Full Stack Developer</h3>
              <p className="mb-2"><strong className="text-gray-600">Company:</strong> Tech Innovations Inc.</p>
              <p className="mb-2"><strong className="text-gray-600">Location:</strong> Remote</p>
              <p className="mb-4"><strong className="text-gray-600">Salary Range:</strong> $80,000 - $120,000/year</p>
              <Link to="/apply" className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">Apply Now</Link>
            </article>
            <article className="rounded-lg border border-gray-200 p-6 transition hover:shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-gray-800">UX/UI Designer</h3>
              <p className="mb-2"><strong className="text-gray-600">Company:</strong> Creative Solutions</p>
              <p className="mb-2"><strong className="text-gray-600">Location:</strong> San Francisco, CA</p>
              <p className="mb-4"><strong className="text-gray-600">Salary Range:</strong> $70,000 - $100,000/year</p>
              <Link to="/apply" className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">Apply Now</Link>
            </article>
          </div>
        </section>

        <section className="mb-12 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <article className="mb-6 border-b border-gray-200 pb-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Is it free to apply for jobs?</h3>
            <p className="text-gray-600">Yes! Job applications are completely free.</p>
          </article>
          <article>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Can I apply to multiple jobs?</h3>
            <p className="text-gray-600">Absolutely! You can apply to as many jobs as you want.</p>
          </article>
        </section>
      </main>

      <Footer maxWidth="max-w-6xl" />
    </>
  )
}

function JobsPage() {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])
  const [appliedJobs, setAppliedJobs] = useState([])

  useEffect(() => {
    setJobs(getStoredJobs())
    setAppliedJobs(getStoredAppliedJobs())
  }, [])

  const appliedSet = useMemo(() => new Set(appliedJobs), [appliedJobs])

  const applyToJob = (index) => {
    const nextAppliedJobs = [...appliedJobs, index]
    localStorage.setItem(APPLIED_JOBS_KEY, JSON.stringify(nextAppliedJobs))
    setAppliedJobs(nextAppliedJobs)
    navigate('/apply')
  }

  const editJob = (index) => {
    const job = jobs[index]
    localStorage.setItem(EDIT_JOB_INDEX_KEY, index.toString())
    localStorage.setItem(EDIT_JOB_DATA_KEY, JSON.stringify(job))
    navigate('/post-job')
  }

  const deleteJob = (index) => {
    if (!window.confirm('Are you sure you want to delete this job?')) {
      return
    }

    const updatedJobs = jobs.filter((_, i) => i !== index)
    localStorage.setItem(JOBS_KEY, JSON.stringify(updatedJobs))
    setJobs(updatedJobs)
  }

  return (
    <>
      <Header title="Available Jobs" subtitle="Explore exciting career opportunities" />
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-8">
        <section className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Current Job Openings</h2>
          <p className="mb-8 text-gray-600">Total openings: {jobs.length}</p>

          {jobs.length > 0 ? (
            jobs.map((job, index) => {
              const hasApplied = appliedSet.has(index)
              return (
                <article key={`${job.title}-${index}`} className="mb-6 rounded-lg border border-gray-200 p-6 transition hover:shadow-xl">
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">{job.title}</h3>
                  <dl className="mb-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <dt className="text-sm font-semibold text-gray-600">Company:</dt>
                      <dd className="text-gray-800">{job.company}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-gray-600">Location:</dt>
                      <dd className="text-gray-800">{job.location}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-gray-600">Experience:</dt>
                      <dd className="text-gray-800">{job.experience || 'Not specified'}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-gray-600">Salary:</dt>
                      <dd className="text-gray-800">{job.salary || 'Not specified'}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-sm font-semibold text-gray-600">Skills:</dt>
                      <dd className="text-gray-800">{job.skills || 'Not specified'}</dd>
                    </div>
                  </dl>
                  <div className="flex flex-wrap gap-3">
                    {hasApplied ? (
                      <button disabled className="inline-block cursor-not-allowed rounded-lg bg-gray-400 px-6 py-2 font-semibold text-white">Already Applied</button>
                    ) : (
                      <button
                        onClick={() => applyToJob(index)}
                        className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
                      >
                        Apply Now
                      </button>
                    )}
                    <button onClick={() => editJob(index)} className="inline-block rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition hover:bg-green-700">Edit</button>
                    <button onClick={() => deleteJob(index)} className="inline-block rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700">Delete</button>
                  </div>
                </article>
              )
            })
          ) : (
            <div className="mt-8 text-center">
              <p className="mb-4 text-lg text-gray-500">No jobs posted yet. Post your first job!</p>
              <Link to="/post-job" className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">Post a Job</Link>
            </div>
          )}
        </section>
      </main>

      <Footer maxWidth="max-w-5xl" showHomeLink />
    </>
  )
}

function PostJobPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialForm)
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    const storedEditIndex = localStorage.getItem(EDIT_JOB_INDEX_KEY)
    const storedEditData = localStorage.getItem(EDIT_JOB_DATA_KEY)

    if (storedEditIndex !== null && storedEditData) {
      setEditIndex(Number(storedEditIndex))
      setFormData(JSON.parse(storedEditData))
    }
  }, [])

  const onInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const clearForm = () => {
    setFormData(initialForm)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const jobs = getStoredJobs()

    if (editIndex !== null) {
      jobs[editIndex] = formData
      localStorage.setItem(JOBS_KEY, JSON.stringify(jobs))
      localStorage.removeItem(EDIT_JOB_INDEX_KEY)
      localStorage.removeItem(EDIT_JOB_DATA_KEY)
      alert('Job Updated Successfully!')
    } else {
      const updatedJobs = [...jobs, formData]
      localStorage.setItem(JOBS_KEY, JSON.stringify(updatedJobs))
      alert('Job Posted Successfully!')
    }

    clearForm()
    setEditIndex(null)
    navigate('/jobs')
  }

  return (
    <>
      <Header title="Post a Job Opening" subtitle="Reach out to talented candidates" />
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section className="mb-8 rounded border-l-4 border-blue-600 bg-blue-50 p-4">
          <h2 className="text-xl font-bold text-gray-800">Post Your Job Listing</h2>
        </section>

        <form onSubmit={onSubmit} className="rounded-lg bg-white p-8 shadow-lg">
          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Basic Job Information</legend>

            <label htmlFor="job_title" className="mb-2 block font-semibold text-gray-700">Job Title:</label>
            <input type="text" id="job_title" name="title" required value={formData.title} onChange={onInputChange} placeholder="e.g., Senior Software Engineer" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="company" className="mb-2 block font-semibold text-gray-700">Company Name:</label>
            <input type="text" id="company" name="company" required value={formData.company} onChange={onInputChange} placeholder="Your company name" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="location" className="mb-2 block font-semibold text-gray-700">Location:</label>
            <input type="text" id="location" name="location" required value={formData.location} onChange={onInputChange} placeholder="e.g., Remote" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="job_type" className="mb-2 block font-semibold text-gray-700">Job Type:</label>
            <select id="job_type" name="type" required value={formData.type} onChange={onInputChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none">
              <option value="">-- Select Job Type --</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="temporary">Temporary</option>
              <option value="internship">Internship</option>
            </select>
          </fieldset>

          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Job Details</legend>

            <label htmlFor="experience" className="mb-2 block font-semibold text-gray-700">Experience Required:</label>
            <input type="text" id="experience" name="experience" value={formData.experience} onChange={onInputChange} placeholder="e.g., 2+ years" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="salary" className="mb-2 block font-semibold text-gray-700">Salary Range:</label>
            <input type="text" id="salary" name="salary" value={formData.salary} onChange={onInputChange} placeholder="e.g., $50,000 - $80,000" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="description" className="mb-2 block font-semibold text-gray-700">Job Description:</label>
            <textarea id="description" name="description" rows="6" required value={formData.description} onChange={onInputChange} placeholder="Describe the job role, responsibilities, and requirements..." className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>

            <label htmlFor="skills" className="mb-2 block font-semibold text-gray-700">Required Skills:</label>
            <textarea id="skills" name="skills" rows="3" value={formData.skills} onChange={onInputChange} placeholder="List the key skills needed for this position..." className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>
          </fieldset>

          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Contact Information</legend>

            <label htmlFor="contact_person" className="mb-2 block font-semibold text-gray-700">Contact Person Name:</label>
            <input type="text" id="contact_person" name="contactPerson" required value={formData.contactPerson} onChange={onInputChange} className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="contact_email" className="mb-2 block font-semibold text-gray-700">Contact Email:</label>
            <input type="email" id="contact_email" name="contactEmail" required value={formData.contactEmail} onChange={onInputChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
          </fieldset>

          <div className="flex flex-col gap-4 md:flex-row">
            <button type="submit" className="flex-1 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
              {editIndex !== null ? 'Update Job' : 'Post Job'}
            </button>
            <button type="button" onClick={clearForm} className="flex-1 rounded-lg bg-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-400">
              Clear Form
            </button>
          </div>
        </form>

        <section className="mt-8 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Posting Guidelines</h2>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            <li>Provide detailed and accurate job descriptions</li>
            <li>Be clear about salary and benefits</li>
            <li>Ensure contact information is correct</li>
          </ul>
        </section>
      </main>

      <Footer maxWidth="max-w-4xl" showHomeLink />
    </>
  )
}

function ApplyPage() {
  return (
    <>
      <Header title="Job Application Form" subtitle="Apply for your dream job today" />
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section className="mb-8 rounded border-l-4 border-blue-600 bg-blue-50 p-4">
          <h2 className="mb-2 text-xl font-bold text-gray-800">Submit Your Application</h2>
          <p className="text-gray-700"><strong>All fields marked with <span className="text-red-600">*</span> are required</strong></p>
        </section>

        <form className="rounded-lg bg-white p-8 shadow-lg">
          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Personal Information</legend>

            <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">Full Name: <span className="text-red-600">*</span></label>
            <input type="text" id="name" name="name" required placeholder="Your full name" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="email" className="mb-2 block font-semibold text-gray-700">Email Address: <span className="text-red-600">*</span></label>
            <input type="email" id="email" name="email" required placeholder="your.email@example.com" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="phone" className="mb-2 block font-semibold text-gray-700">Phone Number: <span className="text-red-600">*</span></label>
            <input type="tel" id="phone" name="phone" required placeholder="1234567890" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
          </fieldset>

          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Professional Information</legend>

            <label htmlFor="job_title" className="mb-2 block font-semibold text-gray-700">Applying For (Job Title): <span className="text-red-600">*</span></label>
            <input type="text" id="job_title" name="job_title" required placeholder="e.g., Web Developer" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none" />

            <label htmlFor="experience_level" className="mb-2 block font-semibold text-gray-700">Years of Experience:</label>
            <select id="experience_level" name="experience" className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none">
              <option value="">-- Select Experience Level --</option>
              <option value="0">Fresher</option>
              <option value="1-2">1-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>

            <label htmlFor="skills" className="mb-2 block font-semibold text-gray-700">Your Key Skills:</label>
            <textarea id="skills" name="skills" rows="3" placeholder="List your main skills and expertise..." className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>
          </fieldset>

          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Application Details</legend>

            <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">Why should we hire you? <span className="text-red-600">*</span></label>
            <textarea id="message" name="message" rows="6" required placeholder="Tell us about yourself, your relevant experience, and why you're interested in this position..." className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>
          </fieldset>

          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Preferences</legend>

            <label className="mb-3 flex cursor-pointer items-center">
              <input type="checkbox" name="remote_willing" className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              <span className="text-gray-700">I&apos;m willing to work remotely</span>
            </label>

            <label className="mb-3 flex cursor-pointer items-center">
              <input type="checkbox" name="relocation_willing" className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              <span className="text-gray-700">I&apos;m willing to relocate for this position</span>
            </label>

            <label className="flex cursor-pointer items-center">
              <input type="checkbox" name="subscribe_newsletter" className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              <span className="text-gray-700">Subscribe me to job alerts and company updates</span>
            </label>
          </fieldset>

          <fieldset className="mb-6 rounded-lg border border-gray-300 p-6">
            <legend className="px-2 text-xl font-bold text-gray-800">Agreements</legend>

            <label className="mb-3 flex cursor-pointer items-center">
              <input type="checkbox" name="agree_terms" required className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              <span className="text-gray-700">I agree to the terms and conditions <span className="text-red-600">*</span></span>
            </label>

            <label className="flex cursor-pointer items-center">
              <input type="checkbox" name="agree_privacy" required className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              <span className="text-gray-700">I have read and agree to the privacy policy <span className="text-red-600">*</span></span>
            </label>
          </fieldset>

          <div className="flex flex-col gap-4 md:flex-row">
            <button type="submit" className="flex-1 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">Submit Application</button>
            <button type="reset" className="flex-1 rounded-lg bg-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-400">Clear Form</button>
          </div>
        </form>

        <section className="mt-8 rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Application FAQs</h2>
          <article className="mb-6 border-b border-gray-200 pb-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">When will I hear back about my application?</h3>
            <p className="text-gray-600">Most companies respond within 1-2 weeks.</p>
          </article>
          <article>
            <h3 className="mb-2 text-lg font-semibold text-gray-800">Can I apply for multiple positions?</h3>
            <p className="text-gray-600">Yes! You can apply to multiple jobs.</p>
          </article>
        </section>
      </main>

      <Footer maxWidth="max-w-4xl" showHomeLink />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </div>
  )
}

export default App
