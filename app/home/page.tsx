import React from 'react'
import Image from 'next/image'

import styles from "../page.module.css"


export default function Home() {
  return (
    <div>

           {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.profileImage}>
          <Image 
            src="/fizaimg.jpeg"
            alt="Profile"
            width={150}
            height={150}
          />
        </div>
        <h1>Fiza Langah</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Passionate about creating beautiful and functional web applications. 
          Experienced in modern JavaScript frameworks and cloud technologies.
        </p>
      </section>
    </div>
  )
}
