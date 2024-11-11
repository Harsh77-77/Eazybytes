import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_no: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [detailedError, setDetailedError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setDetailedError('');

    try {
      const response = await fetch('https://backen-portfolio.vercel.app/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
        mode: 'no-cors' 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact details');
      }

      setStatus(data.message || 'Contact details submitted successfully!');
      setFormData({ username: '', email: '', phone_no: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus(`Error: ${error.message}`);
      if (error.details) {
        setDetailedError(`Detailed error: ${error.details}\n\nStack trace: ${error.stack}`);
      }
    }
  };

  return (
    <section id="Contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_no"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className={`mt-4 text-center text-sm font-medium ${status.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
              {status}
            </p>
          )}
          {detailedError && (
            <pre className="mt-4 p-4 bg-red-100 text-red-800 rounded-md overflow-x-auto">
              {detailedError}
            </pre>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;