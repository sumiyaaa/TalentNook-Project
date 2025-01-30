// import React from 'react'

// const SavedJobs = () => {
//   return (
//     <div>SavedJobs</div>
//   )
// }

// export default SavedJobs;

import React, { useState } from 'react';

const PostJob = () => {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [jobType, setJobType] = useState('Onsite');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle job post logic here
    console.log({
      companyName,
      jobTitle,
      description,
      skills,
      jobType,
    });
  };

  return (
    <div className="job-post-container flex justify-center items-center min-h-screen">
      <form 
        onSubmit={handleSubmit}
        className="job-post-form p-6 bg-white rounded-xl shadow-lg w-96"
      >
        <h1 className="text-center text-2xl font-bold mb-6">Create a Job Post</h1>

        <div className="mb-4">
          <label htmlFor="company_name" className="block mb-2">Company Name:</label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="job_title" className="block mb-2">Job Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Job Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block mb-2">Required Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="job_type" className="block mb-2">Job Type:</label>
          <select
            id="job_type"
            name="job_type"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition-all duration-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
