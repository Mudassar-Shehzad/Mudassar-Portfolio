import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/style.css'; 

export default function Resume() {
  return (
    <div className="text-white p-4 rounded" style={{ textAlign: "left" }}>
      <div className="mb-4">
        <h2 className="custom-heading mb-3">Coding Skills</h2>
        <ul className="list-unstyled">
          <li className="mb-2">
            <strong>JavaScript:</strong> 80%
            <div className="progress mt-1" style={{ width: "70%" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <strong>React:</strong> 75%
            <div className="progress mt-1" style={{ width: "70%" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </li>
          <li className="mb-2">
            <strong>Design Skills:</strong> 70%
            <div className="progress mt-1" style={{ width: "70%" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="custom-heading mb-3">Knowledge</h2>
        <div>
          <p>
            <strong style={{fontSize :'1.5rem'}}>Web Development :</strong> I have a deep understanding of web development principles and best practices. I am skilled in creating interactive and dynamic web applications using JavaScript and React. My experience includes working with various web technologies to build responsive and user-friendly websites.
          </p>
          <p>
            <strong style={{fontSize :'1.5rem'}}>Responsive Design:</strong> Ensuring that websites are accessible and usable on all devices is a priority in my work. I have extensive experience in implementing responsive design techniques to create seamless user experiences across different screen sizes.
          </p>
          <p>
            <strong style={{fontSize :'1.5rem'}}>SEO:</strong> I understand the importance of search engine optimization in driving traffic to websites. I am knowledgeable in on-page SEO strategies and best practices to improve the visibility and ranking of web pages in search engine results.
          </p>
          <p>
            <strong style={{fontSize :'1.5rem'}}>Performance Optimization:</strong> Optimizing web performance is crucial for user satisfaction. I am adept at identifying performance bottlenecks and implementing solutions to enhance the speed and efficiency of web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
