import React from 'react'
import styles from "../page.module.css";

interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string[];
  }
  

export default function Experience() {
    const experiences: Experience[] = [
        {
          company: "Tech Corp",
          role: "Senior Frontend Developer",
          duration: "2023 - Present",
          description: [
            "Led a team of 5 developers",
            "Improved app performance by 40%",
            "Implemented CI/CD pipeline"
          ]
        }
      ];
    
  return (
    <div>
 {/* Experience Section */}
 <section className={styles.experience}>
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <h3>{exp.company}</h3>
            <div className={styles.roleInfo}>
              {exp.role} | {exp.duration}
            </div>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
