import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/style.css';

export default function Resume() {
  return (
    <div className="container text-white p-4 rounded" style={{ textAlign: "left" }}>
      
    

      {/* Web Development Skills Section */}
      <div className="mb-4">
        <h2 className="custom-heading mb-3">Web Development Skills</h2>
        <div className=" text-white p-3 mb-3">
          <p className="card-text">
            I have a deep understanding of web development principles and best practices. 
            Skilled in creating interactive and dynamic web applications using JavaScript and React.
          </p>
        </div>
      </div>

      {/* Firebase Section */}
      <div className="mb-4">
        <h2 className="custom-heading mb-3">Firebase Integration</h2>
        <div className=" text-white p-3 mb-3">
          <p className="card-text">
            Experienced in integrating Firebase services, including Authentication, Firestore, and Cloud Messaging, 
            to develop scalable and secure web applications with real-time capabilities.
          </p>
        </div>
      </div>

      {/* Responsive Design Section */}
      <div className="mb-4">
        <h2 className="custom-heading mb-3">Responsive Design</h2>
        <div className=" text-white p-3 mb-3">
          <p className="card-text">
            Ensuring that websites are accessible and usable on all devices is a priority in my work.
            Extensive experience in implementing responsive design techniques to create seamless user experiences across different screen sizes.
          </p>
        </div>
      </div>
  {/* Education Section */}
  <div className="mb-4">
        <h2 className="custom-heading mb-3">Education</h2>
        <div className=" text-white p-3 mb-3">
          <h5 className="card-title">Govt Graduate College (Kahuta, Pakistan)</h5>
          <p className="card-text">Intermediate</p>
        </div>
      </div>
     
    </div>
  );
}
