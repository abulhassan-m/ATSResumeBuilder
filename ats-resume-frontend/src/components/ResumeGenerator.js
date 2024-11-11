import React, { useState } from 'react';
import { generateResume } from '../services/api';
import Loader from './Loader';
import Preview from './Preview';
import ResumeForm from './ResumeForm';

const ResumeGenerator = () => {
    const [loading, setLoading] = useState(false);
    const [resumeData, setResumeData] = useState(null);

    const handleGenerateResume = async (formData) => {
        setLoading(true);
        try {
            const data = await generateResume(formData);
            setResumeData(data);
        } catch (error) {
            alert("Failed to generate resume. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <Loader />
            ) : resumeData ? (
                <Preview resumeData={resumeData} />
            ) : (
                <ResumeForm onSubmit={handleGenerateResume} />
            )}
        </div>
    );
};

export default ResumeGenerator;