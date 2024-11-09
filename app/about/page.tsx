

// components/About.tsx
import styles from "../page.module.css"
import Image from 'next/image';

export default function About() {
  const skills = [
    { category: "Frontend", techs: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
    { category: "Backend", techs: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL"] },
    { category: "Tools", techs: ["Git", "Docker", "AWS", "Firebase", "Figma"] }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container1}>
        <h2 className={styles.title}>About Me</h2>

        <h3 className={styles.subtitle}>Who I Am</h3>
            <p className={styles.description}>
              Hi, I'm Fiza Langah, a passionate Full Stack Developer based in Karachi City. 
              With over 2 years of experience in web development, I specialize in creating 
              responsive and user-friendly applications that solve real-world problems.
            </p>
        
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/fizaimg.jpeg" 
                alt="Profile Picture" 
                width={400} 
                height={400}
                className={styles.image}
              />
            </div>
          </div>

         
          <div className={styles.textSection}>
           
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Name:</span>
                <span>Fiza Langah</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Email:</span>
                <span>fizalangah2001@gail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Location:</span>
                <span>Kararchi,Pakistan</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Available:</span>
                <span>For Freelance</span>
              </div>
            </div>

            <div className={styles.skillsSection}>
              <h3 className={styles.skillsTitle}>My Skills</h3>
              <div className={styles.skillsContainer}>
                {skills.map((skillGroup, index) => (
                  <div key={index} className={styles.skillGroup}>
                    <h4 className={styles.skillCategory}>{skillGroup.category}</h4>
                    <div className={styles.skillTags}>
                      {skillGroup.techs.map((tech, i) => (
                        <span key={i} className={styles.skillTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cta}>
              <a href="/path-to-resume.pdf" className={styles.downloadBtn}>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
