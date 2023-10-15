import React from "react";

const App = () => {
  const portfolioData = {
    name: "Rishabh Sharma",
    reg: "21BCE0943",
    place: "Bangalore, Karnataka, India",
    skills: [
      "HTML",
      "CSS",
      "Python",
      "PHP",
      "Java",
      "C",
      "C++",
      "SQL",
      "NLP",
      "React.js",
      "Neural Networks",
      "JavaScript",
      "Generative AI",
      "LLM and Image Generators",
      "Teamwork",
      "Leadership",
      "Emotional Intelligence",
    ],
    projects: [
      {
        title: "Contract Maker LLM Chatbot",
        description:
          "Designed a web-based application with a UI, of a chatbot that you can interact with to generate and edit contracts in the real estate domain.",
      },
      {
        title: "Email Generator",
        description:
          "Used LLM, image generating AI, convolutional neural networks to generate emails with beautiful templates, all based on a single input from the user.",
      },
      {
        title: "Login and Sign-up System for a Social Website",
        description:
          "Designed web pages using HTML and CSS and provided database access using MySQL.",
      },
      {
        title: "Analysis of the Glassdoor Job Dataset",
        description:
          "Carried out data preprocessing using Pandas and performed graphical analysis of the data to extract meaningful trends and insights.",
      },
      {
        title: "Tripadvisor Hotel Reviews Sentiment Analysis using NLP",
        description:
          "Classified sentiments enhancing decision making.",
      },
      {
        title: "Blackjack Card Game using Python",
        description: null,
      },
    ],
    extraCurriculars: [
      "Dancing",
      "Playing Guitar",
      "Singing",
      "Volunteer Work",
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2>
            <u>REGISTRATION NUMBER:</u> {portfolioData.reg}
          </h2>
          <h2>
            <u>PLACE:</u> {portfolioData.place}
          </h2>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>About Me</u>
            </h3>
            <p>
              I am a hard working and passionate student with good communication skills, looking for opportunity in technical fields. I am a dependable candidate who is willing to learn new techniques.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>SKILLS</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>PROJECTS</u>
            </h3>
            {portfolioData.projects.map((project, index) => (
              <ul key={index}>
                <div className="project">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>
            ))}
          </div>
          <div className="extra-curriculars">
            <h3>
              <u>EXTRA-CURRICULARS</u>
            </h3>
            <ul>
              {portfolioData.extraCurriculars.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

