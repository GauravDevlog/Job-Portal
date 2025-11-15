import React, { useState } from "react";
import "./Jobs.css";
import Navbar from "../Navbar/Navbar";

const Jobs = () => {
  const allJobs = [
    { id: 1, title: "Senior Graphic Designer", company: "The Printo Choice", location: "New Delhi", experience: "3-5 years", salary: "₹5-8 LPA", posted: "2 days ago" },
    { id: 2, title: "AI Engineer", company: "TechWave", location: "Bangalore", experience: "1-3 years", salary: "₹8-12 LPA", posted: "1 day ago" },
    { id: 3, title: "Voice & Accent Trainer", company: "Global Academy", location: "Hyderabad", experience: "0-2 years", salary: "₹3-5 LPA", posted: "5 hours ago" },
    { id: 4, title: "Frontend Developer", company: "InnoSoft", location: "Mumbai", experience: "2-4 years", salary: "₹6-9 LPA", posted: "3 days ago" },
    { id: 5, title: "Backend Developer", company: "NextGen IT", location: "Delhi", experience: "3-6 years", salary: "₹7-11 LPA", posted: "1 week ago" },
    { id: 6, title: "Cloud Architect", company: "SkyTech", location: "Bangalore", experience: "5-10 years", salary: "₹15-22 LPA", posted: "2 weeks ago" },
    { id: 7, title: "Data Analyst", company: "Insight Corp", location: "Hyderabad", experience: "1-3 years", salary: "₹4-7 LPA", posted: "4 days ago" },
    { id: 8, title: "UI/UX Designer", company: "DesignHub", location: "Mumbai", experience: "2-5 years", salary: "₹5-8 LPA", posted: "1 day ago" },
  ];

  const [jobs, setJobs] = useState(allJobs);
  const [filters, setFilters] = useState({ location: [], experience: [], salary: [] });

  // handle checkbox filter
  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      const updated = { ...prev };
      updated[type] = prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value];
      return updated;
    });
  };

  // clear filters
  const clearFilters = () => {
    setFilters({ location: [], experience: [], salary: [] });
    setJobs(allJobs);
  };

  // apply filters
  const applyFilters = () => {
    let filtered = allJobs;

    if (filters.location.length) {
      filtered = filtered.filter(job => filters.location.includes(job.location));
    }
    if (filters.experience.length) {
      filtered = filtered.filter(job =>
        filters.experience.some(exp => job.experience.includes(exp))
      );
    }
    if (filters.salary.length) {
      filtered = filtered.filter(job =>
        filters.salary.some(sal => job.salary.includes(sal))
      );
    }
    setJobs(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="jobs-page">
        {/* Sidebar Filters */}
        <aside className="filters">
          <h3>Filters</h3>

          <div className="filter-section">
            <h4>Location</h4>
            {["Bangalore", "Hyderabad", "Delhi", "Mumbai"].map(loc => (
              <label key={loc}>
                <input
                  type="checkbox"
                  checked={filters.location.includes(loc)}
                  onChange={() => handleFilterChange("location", loc)}
                />
                {loc}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h4>Experience</h4>
            {["0-2 years", "1-3 years", "2-5 years", "3-6 years", "5-10 years"].map(exp => (
              <label key={exp}>
                <input
                  type="checkbox"
                  checked={filters.experience.includes(exp)}
                  onChange={() => handleFilterChange("experience", exp)}
                />
                {exp}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h4>Salary</h4>
            {["₹3-5 LPA", "₹5-8 LPA", "₹6-9 LPA", "₹7-11 LPA", "₹10+ LPA", "₹15-22 LPA"].map(sal => (
              <label key={sal}>
                <input
                  type="checkbox"
                  checked={filters.salary.includes(sal)}
                  onChange={() => handleFilterChange("salary", sal)}
                />
                {sal}
              </label>
            ))}
          </div>

          <div className="filter-actions">
            <button className="apply-btn" onClick={applyFilters}>Apply Filters</button>
            <button className="clear-btn" onClick={clearFilters}>Clear All</button>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="job-listings">
          <h2>Available Jobs</h2>
          <div className="job-grid">
            {jobs.length ? (
              jobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="posted">{job.posted}</span>
                  </div>
                  <p><strong>{job.company}</strong></p>
                  <p>{job.location}</p>
                  <p>{job.experience} | {job.salary}</p>
                  <div className="job-actions">
                    <button className="save-btn">Save</button>
                    <button className="apply-btn">Apply Now</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No jobs found with current filters.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Jobs;
