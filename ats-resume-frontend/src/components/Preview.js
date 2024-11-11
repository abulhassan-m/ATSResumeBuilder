import React from 'react';

const Preview = ({ resumeData }) => {
    return (
        <div>
            <h2>{resumeData.name}</h2>
            <p>{resumeData.email} | {resumeData.phone}</p>
            <h3>Education</h3>
            {resumeData.education.map((edu, index) => (
                <div key={index}>
                    <strong>{edu.degree}</strong> at {edu.institution}
                </div>
            ))}
            <h3>Experience</h3>
            {resumeData.experience.map((exp, index) => (
                <div key={index}>
                    <strong>{exp.title}</strong> at {exp.company}
                </div>
            ))}
            <h3>Skills</h3>
            <ul>
                {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Preview;