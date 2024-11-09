import React from 'react'
import styles from "../page.module.css";


interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }

export default function Projects() {


    const projects: Project[] = [
        {
          title: "E-commerce Platform",
          description: "A full-stack e-commerce solution with payment integration",
          technologies: ["React", "Next.js", "typescript", "tailwindcss"],
          link: "https://m3-ecomercewebsite.vercel.app/"
        },
        {
          title: "Expense- Tracker App",
          description: "A real-time expense-tracker application",
          technologies: ["Next.js", "tailwindcss", "TypeScript"],
          link: "https://expense-tracker-lime-rho.vercel.app/"
        },
        {
            title: "Simple-calculator",
            description: "A real-time calculating application",
            technologies: ["Next.js", "tailwindcss", "TypeScript"],
            link: "https://simplecalculator-gamma.vercel.app/"
          },
          {
            title: "Blog-website",
            description: "A food blog-website application",
            technologies: ["Next.js", "tailwindcss", "TypeScript"],
            link: "https://fppd-blog-post-git-master-fizas-projects-862845ac.vercel.app/"
          }
      ];
    

  return (
    <div>

           {/* Projects Section */}
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tag}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

