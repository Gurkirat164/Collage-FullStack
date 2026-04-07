function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gray-800 px-4 py-4 text-white md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="flex text-2xl font-bold">
            <span className="text-orange-500">Gurkirat</span>
            <span className="ml-2 text-white">Singh</span>
          </h1>

          <nav className="flex flex-wrap gap-2 text-sm font-bold md:gap-4 md:text-base">
            <a href="#projects" className="px-2 hover:text-orange-400">Portfolio</a>
            <a href="#projects" className="px-2 hover:text-orange-400">Services</a>
            <a href="#projects" className="px-2 hover:text-orange-400">Experience</a>
            <a href="#projects" className="px-2 hover:text-orange-400">Projects</a>
            <a href="#education" className="px-2 hover:text-orange-400">Education</a>
          </nav>

          <a
            href="#contact"
            className="inline-block rounded-md bg-white px-4 py-2 font-bold text-gray-800 hover:bg-gray-200"
          >
            Contact Me
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 py-12 md:flex-row md:justify-between md:px-10 md:py-20">
        <div className="max-w-xl">
          <p className="mb-2 text-4xl font-bold md:text-5xl">
            Hi, I&apos;m <span className="text-orange-500">Gurkirat</span>
          </p>
          <p className="mb-4 text-xl font-semibold text-gray-700 md:text-2xl">Full Stack Developer</p>
          <p className="mb-6 text-base text-gray-600 md:text-lg">
            I build modern, scalable web applications and love turning ideas into reality. Let&apos;s create something amazing together!
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="rounded-2xl bg-gray-800 px-6 py-3 font-bold text-white hover:bg-gray-700">
              Projects
            </a>
            <a href="#contact" className="rounded-2xl bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:pr-16">
          <img
            className="h-64 w-64 rounded-full border-4 border-orange-500 object-cover shadow-lg md:h-96 md:w-96"
            src="/image.png"
            alt="Gurkirat Singh"
          />
        </div>
      </main>

      <section id="projects" className="bg-gray-100 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold">Projects</h2>
          <div className="flex flex-col gap-6">
            <article className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-2xl font-bold text-orange-500">E-Commerce Platform</h3>
              <p className="mb-2">Built a full-stack e-commerce website with user authentication, shopping cart, and payment integration.</p>
              <p className="font-bold">Tech Stack: React, Node.js, MongoDB, Stripe API</p>
            </article>
            <article className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-2xl font-bold text-orange-500">Task Management App</h3>
              <p className="mb-2">Developed a collaborative task manager with real-time updates and team features.</p>
              <p className="font-bold">Tech Stack: Vue.js, Express, Socket.io, PostgreSQL</p>
            </article>
            <article className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-2xl font-bold text-orange-500">Weather Dashboard</h3>
              <p className="mb-2">Created a responsive weather application with location-based forecasts and data visualization.</p>
              <p className="font-bold">Tech Stack: JavaScript, OpenWeather API, Chart.js</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold">Skills</h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-orange-500">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                  <span key={skill} className="rounded-md bg-gray-800 px-4 py-2 text-white">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-orange-500">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                  <span key={skill} className="rounded-md bg-gray-800 px-4 py-2 text-white">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-orange-500">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'GitHub', 'VS Code', 'Docker', 'Postman'].map((skill) => (
                  <span key={skill} className="rounded-md bg-gray-800 px-4 py-2 text-white">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="bg-gray-100 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold">Education</h2>
          <div className="flex flex-col gap-6">
            <article className="rounded-lg bg-white p-6">
              <h3 className="text-2xl font-bold text-orange-500">BE - CSE</h3>
              <p className="mt-2 text-xl font-bold">Chandigarh University</p>
              <p className="mt-1 text-gray-600">2024 - 2028</p>
              <p className="mt-3">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, Software Engineering</p>
            </article>
            <article className="rounded-lg bg-white p-6">
              <h3 className="text-2xl font-bold text-orange-500">Senior Secondary (12th)</h3>
              <p className="mt-2 text-xl font-bold">School</p>
              <p className="mt-1 text-gray-600">2024</p>
              <p className="mt-3">Stream: Science (PCM)</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-8 text-center text-4xl font-bold">Contact Me</h2>
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex w-full flex-col gap-6 lg:w-1/2">
              <p className="text-2xl font-semibold text-gray-800">Let&apos;s Connect!</p>
              <p className="text-lg text-gray-700">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out through any of the ways below:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Email for work inquiries or collaborations</li>
                <li>Phone for quick chats or urgent matters</li>
                <li>LinkedIn for professional networking</li>
                <li>GitHub for open source and code</li>
              </ul>
              <div className="flex flex-col gap-4">
                <p><span className="mr-2 text-xl font-bold text-orange-500">Email:</span><a href="mailto:gurkirat@example.com" className="hover:text-orange-500">gurkirat@example.com</a></p>
                <p><span className="mr-2 text-xl font-bold text-orange-500">Phone:</span><a href="tel:+911234567890" className="hover:text-orange-500">+91 12345 67890</a></p>
                <p><span className="mr-2 text-xl font-bold text-orange-500">LinkedIn:</span><a href="#" className="hover:text-orange-500">linkedin.com/in/gurkiratsingh</a></p>
                <p><span className="mr-2 text-xl font-bold text-orange-500">GitHub:</span><a href="#" className="hover:text-orange-500">github.com/gurkiratsingh</a></p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <form className="flex flex-col gap-4 rounded-lg bg-gray-100 p-6 md:p-8">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2 font-bold">Name</label>
                  <input type="text" id="name" className="rounded-md border border-gray-300 p-3" placeholder="Your Name" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-2 font-bold">Email</label>
                  <input type="email" id="email" className="rounded-md border border-gray-300 p-3" placeholder="your.email@example.com" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="mb-2 font-bold">Subject</label>
                  <input type="text" id="subject" className="rounded-md border border-gray-300 p-3" placeholder="Subject" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-2 font-bold">Message</label>
                  <textarea id="message" rows="5" className="rounded-md border border-gray-300 p-3" placeholder="Your Message..." required></textarea>
                </div>
                <button type="submit" className="rounded-2xl bg-orange-500 px-8 py-3 font-bold text-white hover:bg-orange-600">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 px-6 py-6 text-center text-white">
        <p>&copy; 2026 Gurkirat Singh. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
