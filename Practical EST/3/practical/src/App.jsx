// Q3) Create a React Form with fields: Name, Email and Message
// Use useState to manage input values and display them below the form after submission.


import { useState } from 'react';

function App() {
  const [form, setForm] = useState({nme: "", email: "", message: ""});


    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)

  };

  return (
    <>
          <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <textarea name="message" placeholder="Message" onChange={handleChange} />
          <button type="submit">Submit</button>
          </form>

    </>
  )
}

export default App























//   const [submitted, setSubmitted] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(form);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" onChange={handleChange} />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <textarea name="message" placeholder="Message" onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>

//       {submitted && (
//         <div>
//           <p>Name: {submitted.name}</p>
//           <p>Email: {submitted.email}</p>
//           <p>Message: {submitted.message}</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default ContactForm;