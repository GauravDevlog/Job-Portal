import React, { useState } from "react";
import "./Companies.css";
import Navbar from "./../Navbar/Navbar";
// import Footer from "../components/Footer";

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    {
      name: "Tata Consultancy Services",
      logo: "/images/tcs.png",
      industry: "IT Services",
      location: "Mumbai, India",
      desc: "Empowering digital transformation globally.",
    },
    {
      name: "Infosys",
      logo: "/images/infosys.png",
      industry: "Software Development",
      location: "Bangalore, India",
      desc: "Innovating with technology to drive progress.",
    },
    {
      name: "Wipro",
      logo: "/images/wipro.png",
      industry: "Technology Solutions",
      location: "Pune, India",
      desc: "Building smarter enterprises with AI and cloud.",
    },
    {
      name: "Accenture",
      logo: "/images/accenture.png",
      industry: "Consulting",
      location: "Gurgaon, India",
      desc: "Global leader in digital and business consulting.",
    },
    {
      name: "Tech Mahindra",
      logo: "/images/techm.png",
      industry: "Telecom & IT",
      location: "Hyderabad, India",
      desc: "Delivering connected world solutions.",
    },
    {
      name: "HCL Technologies",
      logo: "/images/hcl.png",
      industry: "IT & Engineering",
      location: "Noida, India",
      desc: "Supercharging progress through innovation.",
    },
  ];

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="companies-hero">
        <h1>Top Companies Hiring Now</h1>
        <p>Explore the most trusted employers across industries</p>
        <input
          type="text"
          placeholder="🔍 Search companies, industries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      {/* Filters Section */}
      <div className="company-filters">
        <select>
          <option>All Industries</option>
          <option>IT Services</option>
          <option>Consulting</option>
          <option>Telecom</option>
          <option>Engineering</option>
        </select>
        <select>
          <option>All Locations</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Pune</option>
          <option>Gurgaon</option>
          <option>Noida</option>
        </select>
        <select>
          <option>Company Size</option>
          <option>1-100</option>
          <option>100-1000</option>
          <option>1000+</option>
        </select>
        <select>
          <option>Top Rated</option>
          <option>★★★★★</option>
          <option>★★★★☆</option>
          <option>★★★☆☆</option>
        </select>
      </div>

      {/* Featured Companies Slider */}
      <section className="featured-slider">
        <h2>Featured Employers</h2>
        <div className="featured-scroll">
          {companies.map((c, index) => (
            <div key={index} className="featured-card">
              <img src={c.logo} alt={c.name} />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Grid */}
      <section className="companies-grid">
        {filteredCompanies.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <h3>{company.name}</h3>
            <p className="meta">
              {company.industry} • {company.location}
            </p>
            <p className="desc">{company.desc}</p>
            <button>View Jobs</button>
          </div>
        ))}
      </section>

      {/* Company Spotlight Section */}
      <section className="company-spotlight">
        <div className="spotlight-card">
          <img src="/images/accenture-banner.jpg" alt="Accenture" />
          <div className="spotlight-text">
            <h2>Accenture</h2>
            <p>
              Join a global leader in consulting and technology. Work with top
              clients and create impactful digital solutions.
            </p>
            <button>View Openings</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="join-section">
        <h2>Ready to take your career to the next level?</h2>
        <p>Discover opportunities with the world’s leading companies.</p>
        <button>Start Exploring Jobs</button>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Companies;
