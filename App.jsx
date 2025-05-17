import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Fade-in animation on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Yousef Abdellatif</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="py-2 px-3 rounded-md text-sm font-medium hover:text-indigo-600 transition-colors">About</a>
              <a href="#experience" className="py-2 px-3 rounded-md text-sm font-medium hover:text-indigo-600 transition-colors">Experience</a>
              <a href="#education" className="py-2 px-3 rounded-md text-sm font-medium hover:text-indigo-600 transition-colors">Education</a>
              <a href="#certifications" className="py-2 px-3 rounded-md text-sm font-medium hover:text-indigo-600 transition-colors">Certifications</a>
              <a href="#skills" className="py-2 px-3 rounded-md text-sm font-medium hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#contact" className="py-2 px-3 rounded-md text-sm font-medium hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 fade-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Yousef Ibrahim Jaber Abdellatif</h1>
              <p className="text-lg text-gray-600 mb-6">
                Pharmacy Student | Data Science Enthusiast | Healthcare Innovator
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/201068587688 " 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Contact via WhatsApp
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://drive.google.com/file/d/1HxBwOBSdYl3FwN_16F3dJkrKWf-YOFdJ/view?usp=sharing " 
                  alt="Yousef Abdellatif" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white fade-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Dedicated and detail-oriented Pharmacy student with extensive experience in medication dispensing, patient counseling, and visual content creation. Proficient in data science and analytics, with a focus on enhancing healthcare outcomes through technology.
            </p>
            <p className="text-lg text-gray-600">
              Proven ability to collaborate effectively in team environments while actively contributing to patient education initiatives and pharmaceutical marketing strategies. Expected to graduate in 2027, aiming to leverage knowledge in pharmacy and data analytics to advance patient care and healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-16 bg-gray-50 fade-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold">Intern, Community Pharmacy</h3>
              <p className="text-gray-600">Al-Selini Pharmacy, Sohag, Egypt | June 2023 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Assisted in medication dispensing and management, ensuring accuracy and compliance with healthcare regulations.</li>
                <li>Provided patient counseling on medication use and potential side effects, enhancing patient understanding and adherence.</li>
                <li>Collaborated with pharmacy staff to develop promotional materials, improving customer engagement and awareness.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Volunteer, Health Awareness Campaign</h3>
              <p className="text-gray-600">EPSF_SINAI, NORTH SINAI, Egypt | January 2023 - April 2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li> Educated the community on preventive healthcare measures through workshops and informational sessions.</li>
                <li> Designed visually appealing materials for outreach programs, increasing public participation in health initiatives.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 bg-white fade-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Bachelor of Pharmacy</h3>
              <p className="text-gray-600">Sinai University, Arish, Egypt | Expected Graduation: 2027</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 bg-gray-50 fade-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold">Introduction to Data Science</h3>
              <p className="text-gray-600">Cisco Networking Academy | June 5, 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold">Epsf_PHocus Conference Attendance</h3>
              <p className="text-gray-600">May 25, 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold">Epsf_PHocus Conference Attendance</h3>
              <p className="text-gray-600">April 24, 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold">SUAPH Conference Attendance</h3>
              <p className="text-gray-600">May 4, 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Diploma in Total Quality & Infection Control</h3>
              <p className="text-gray-600">Medix</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-white fade-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Competencies</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Pharmaceutical Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Medication Dispensing & Management</li>
                <li>Patient Counseling</li>
                <li>Quality Assurance</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Data Science & Analytics</li>
                <li>Graphic Design (Adobe Photoshop, Adobe Illustrator)</li>
                <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Strong Communication</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 fade-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Yousef Abdellatif. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Youssef.Ibrahim004?spm=a2ty_o01.29997173.0.0.24f3c921ffLtWW&file=Youssef.Ibrahim004 " target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.777c0-3.086 1.893-4.796 4.659-4.796 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ph_eljoo/" target="_blank" rel="noopener noreferrer" className="text-black-600 hover:text-black-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.095 4.067 6.13 1.64 3.162c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.547 2.209 9.142 0 14.307-7.721 14.307-14.307 0-.222-.005-.442-.015-.661.989-.728 1.843-1.644 2.539-2.66z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/youssef-ibrahim-gaber-abdellatif-011356335/ " target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c.872-1.719 4-1.765 4 1.765v10.231z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
