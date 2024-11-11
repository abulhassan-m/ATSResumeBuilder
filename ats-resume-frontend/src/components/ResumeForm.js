import React, { useState } from 'react';

const ResumeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: [{ degree: '', institution: '', startDate: '', endDate: '' }],
        experience: [{ title: '', company: '', startDate: '', endDate: '', description: '' }],
        skills: ['']
    });

    const handleChange = (e, index, section) => {
        const value = e.target.value;
        if (section === "education" || section === "experience") {
            const updatedSection = [...formData[section]];
            updatedSection[index][e.target.name] = value;
            setFormData({ ...formData, [section]: updatedSection });
        } else {
            setFormData({ ...formData, [e.target.name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />

            <h2>Education</h2>
            {formData.education.map((edu, index) => (
                <div key={index}>
                    <input type="text" name="degree" placeholder="Degree" onChange={(e) => handleChange(e, index, "education")} required />
                    <input type="text" name="institution" placeholder="Institution" onChange={(e) => handleChange(e, index, "education")} required />
                </div>
            ))}

            <h2>Experience</h2>
            {formData.experience.map((exp, index) => (
                <div key={index}>
                    <input type="text" name="title" placeholder="Job Title" onChange={(e) => handleChange(e, index, "experience")} required />
                    <input type="text" name="company" placeholder="Company" onChange={(e) => handleChange(e, index, "experience")} required />
                </div>
            ))}

            <h2>Skills</h2>
            {formData.skills.map((skill, index) => (
                <input key={index} type="text" name="skill" placeholder="Skill" onChange={(e) => handleChange(e, index, "skills")} />
            ))}

            <button type="submit">Generate Resume</button>
        </form>
    );
};

export default ResumeForm;