import React from 'react'
import styles from "./Home.module.css"
import SideBar from '../SideBar/SideBar'
import PDf from "../../Images/Resume_2024.pdf"
import ProVideo from "../../Images/Resume_2024.pdf"
const Home = () => {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + PDf;

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume_2024.pdf';
    link.click();
  };
  const youtubeVideo = "https://youtube.com/playlist?list=PLcoyXzU8vy1qzmqgbpZgPY7nOosQ9hOBJ&si=YbP4WcriMnVceNTW";



  return (
    <div className={styles.homeMain}>
      <SideBar />
      <div className={styles.homeContainer}>
        <h2 className={styles.videoTitle}>
          <a href={youtubeVideo} target='_blank' rel='noopener noreferrer' className={styles.youtubeLink}>
            Check out my new Youtube video
          </a>
        </h2>
        <div className={styles.videoMain}>
          <div className={styles.videoContainer}>
            <video width="900" controls>
              <source src={ProVideo} type="video/mp4" />
            </video>

          </div>

          I am a Master of Science in Computer Science student at the University of Kansas with a 4.0 GPA, deeply engaged in the fields of Data Privacy and Security, Autonomous Driving Software, and Machine Learning. My academic achievements are marked by my high GPA and a solid foundation in subjects like Computer Vision, Cryptography, and Data Security.
          <br /><br />
          In my role as a Graduate Research Assistant, I have focused on exploring vulnerabilities in machine learning systems, specifically in data privacy and security. My research uses SHAP analysis to identify critical features in ML decision-making processes, aiming for publication at AAAI 2024. This work showcases my dedication to advancing knowledge in AI security and ethics.
          <br /><br />
          My autonomous driving research involves developing a driving model for F1TENTHS racing that switches between optimized track, attack, and defensive modes. This project demonstrates my skill with PyTorch and my ability to apply theoretical knowledge to solve real-world problems.
          <br /><br />
          Working as a Graduate Teaching Assistant has improved my skills in explaining complex concepts clearly and contributing to the development of computer science curriculum materials. My experience as an IT Student Technician at KU and my internship at 3M India, where I engaged in Agile development and enhanced project efficiency by 30% with C++ and Python, have both contributed significantly to my technical and collaborative skills.
          <br /><br />
          My leadership skills are evidenced by my roles as President of the KU Software Engineers Club, a Programming Member of the KU Artificial Intelligence Organization, Captain of the KU Esports Team, and Member of the KU Cyber Security Club. These experiences have developed my leadership and teamwork abilities.
          <br /><br />
          I have a broad technical skill set, including C++, Python, PHP, Kotlin, Swift, and JavaScript. My interests include participating in Hackathons, exploring Machine Learning and Robotics, and working on personal software projects, including game development. My projects, such as a Movie Recommendation System and a Restaurant Management System, show my ability to apply complex algorithms to create useful solutions.
          <br /><br />
          I am looking for opportunities that match my passion for using technology to solve important problems. My academic record, research projects, professional experiences, and leadership roles reflect a commitment to excellence and innovation in computer science.
        </div>
        {/* <button   onClick={handleDownload} className={styles.btnHome}>Dowload Resume</button> */}

        {/* <div className={styles.buttonMain}>
            <button className={styles.btnHome2}>C++</button>
            <button className={styles.btnHome2}>Python</button>
            <button className={styles.btnHome2}>R</button>
            <button className={styles.btnHome2}>ML</button>
            <button className={styles.btnHome2}>Data Science</button>
        </div> */}
      </div>
    </div>
  )
}

export default Home
