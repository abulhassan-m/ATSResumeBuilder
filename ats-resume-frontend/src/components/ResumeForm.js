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
    const [errors, setErrors] = useState({});

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

    const validateForm = () => {
        let validationErrors = {};
        if (!formData.name) validationErrors.name = "Name is required.";
        if (!formData.email) validationErrors.email = "Email is required.";
        if (!formData.phone) validationErrors.phone = "Phone is required.";
        if (formData.education.some(edu => !edu.degree || !edu.institution)) {
            validationErrors.education = "All education fields are required.";
        }
        if (formData.experience.some(exp => !exp.title || !exp.company)) {
            validationErrors.experience = "All experience fields are required.";
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <div className="form-section">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <div className="error">{errors.name}</div>}
                
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
                
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                {errors.phone && <div className="error">{errors.phone}</div>}
            </div>

            <h2>Education</h2>
            {formData.education.map((edu, index) => (
                <div key={index} className="form-section">
                    <label>Degree</label>
                    <input type="text" name="degree" value={edu.degree} onChange={(e) => handleChange(e, index, "education")} />
                    <label>Institution</label>
                    <input type="text" name="institution" value={edu.institution} onChange={(e) => handleChange(e, index, "education")} />
                    {errors.education && <div className="error">{errors.education}</div>}
                </div>
            ))}

            <h2>Experience</h2>
            {formData.experience.map((exp, index) => (
                <div key={index} className="form-section">
                    <label>Job Title</label>
                    <input type="text" name="title" value={exp.title} onChange={(e) => handleChange(e, index, "experience")} />
                    <label>Company</label>
                    <input type="text" name="company" value={exp.company} onChange={(e) => handleChange(e, index, "experience")} />
                    {errors.experience && <div className="error">{errors.experience}</div>}
                </div>
            ))}

            <h2>Skills</h2>
            {formData.skills.map((skill, index) => (
                <div key={index} className="form-section">
                    <input type="text" name="skill" value={skill} onChange={(e) => handleChange(e, index, "skills")} placeholder="Skill" />
                </div>
            ))}

            <button type="submit">Generate Resume</button>
        </form>
    );
};

export default ResumeForm;