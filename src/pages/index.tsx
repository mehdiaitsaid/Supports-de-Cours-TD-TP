import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import {useSiteData} from "@site/src/utilities/helper";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
    const { contact }:any = useSiteData();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
              <Link
                  className="button button--secondary button--lg"
                  href={contact.linkedin}
                  target="_blank">
                  LinkedIn
              </Link>

              <Link
                  className="button button--primary button--lg"
                  href={contact.github}
                  target="_blank">
                  GitHub

              </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
    const { contact }:any = useSiteData();

    const courses = [
        { title: 'Base de données', image: '/Supports-de-Cours-TD-TP/courses/db.svg', link: '/db/intro', description: 'Conception de base de données: MERISE et SQL' , tags: [ 'MCD', 'MLD', 'MySQL'] },
        { title: 'Systemes information', image: '/Supports-de-Cours-TD-TP/courses/si.png', link: '/noaccess/course-disabled',  description: 'Systèmes d’Information Modélisation UML' , tags: ['Modélisation','Agile', 'Sécurité'] },
        { title: 'POO', image: '/Supports-de-Cours-TD-TP/courses/oop.png', link: '/noaccess/course-disabled',  description: 'Programmation Orientée Objet'  , tags: ['Java', 'SOLID']},
        { title: 'Spring Boot', image: '/Supports-de-Cours-TD-TP/courses/spring.png', link: '/noaccess/course-disabled',  description: 'Développement d\'un système monolithique, modulaire et distribué'  , tags: ['Modulith', 'Microservices']},
        { title: 'Laravel', image: '/Supports-de-Cours-TD-TP/courses/laravel.png', link: '/noaccess/course-disabled',  description: 'Développement d\'une application web moderne'  , tags: ['Livewrire', 'Inertia.js']},
        { title: 'Cloud Computing', image: '/Supports-de-Cours-TD-TP/courses/cloud.png', link: '/noaccess/course-disabled',  description: 'Architecture et ingénierie du cloud public et privé'  , tags: [ 'Containerization', 'Virtualization', 'Automation']},
        { title: 'DevOps', image: '/Supports-de-Cours-TD-TP/courses/devops.png', link: '/noaccess/course-disabled',  description: 'Continuous Integration/Continuous Delivery'  , tags: [ 'Agile', 'Toolchain']},
        { title: 'Cybersecurity', image: '/Supports-de-Cours-TD-TP/courses/cs.png', link: '/noaccess/course-disabled',  description: 'Sécurité des systèmes, des réseaux et des applications'  , tags: [ 'Ethical hacking', 'DEVSECOPS']},
        { title: 'Systèmes Multi-Agents', image: '/Supports-de-Cours-TD-TP/courses/agentic.png', link: '/noaccess/course-disabled',  description: 'Développement et automatisation d\'un système multi-agents complexe et distribué'  , tags: [ 'Automation', 'IA', 'Toolchain']},

    ];
    // Function to generate a random color
    const randomColor = () => {
        const colors = ['#E27D60', '#85DCB', '#E8A87C', '#C38D9E', '#41B3A3', '#6B4226', '#FFD166'];
        return colors[Math.floor(Math.random() * colors.length)];
    };


    return (
      <Layout title={siteConfig.title} description={siteConfig.tagline}>
          {/* HERO */}
          <HomepageHeader />

          <main>
              {/* ABOUT */}
              <section style={{ padding: '4rem 0' }}>
                  <div className="container">
                      <div className="row">
                          <div className="col col--8 col--offset-2 text--center">
                              <h2>À propos</h2>
                              <p>
                                  Cette plateforme regroupe l'ensemble des cours de Pr Ait Said Mehdi.
                                  Elle permet aux étudiants d'accéder facilement aux supports pédagogiques,
                                  organisés de manière claire et structurée.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* FEATURES */}
              <section style={{ background: 'var(--ifm-color-emphasis-100)', padding: '4rem 0' }}>
                  <div className="container">
                      <div className="row">
                          <div className="col col--4 text--center">
                              <h3>Organisation claire</h3>
                              <p>
                                  Les cours sont structurés en chapitres et sections pour faciliter la navigation.
                              </p>
                          </div>

                          <div className="col col--4 text--center">
                              <h3>Accès rapide</h3>
                              <p>
                                  Accédez directement aux contenus essentiels sans perte de temps.
                              </p>
                          </div>

                          <div className="col col--4 text--center">
                              <h3>Support centralisé</h3>
                              <p>
                                  Tous les supports sont disponibles sur une seule plateforme.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* COURSES GRID */}
              <section style={{ padding: '4rem 0' }}>
                  <div className="container text--center">
                      <h2>Consulter les cours</h2>
                      <p>Accédez à l'ensemble des modules et contenus pédagogiques.</p>

                      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
                          {courses.map((course, idx) => (
                              <div key={idx} className="col col--4" style={{ maxWidth: '300px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                  <Link to={course.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                      <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                          <img
                                              src={course.image}
                                              alt={course.title}
                                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                          />
                                      </div>
                                      <div style={{ padding: '1rem' }}>
                                          <h3>{course.title}</h3>
                                          <div style={{ margin: '0.5rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                                              {course.tags.map((tag, tIdx) => (
                                                  <span key={tIdx} style={{ backgroundColor:  '#41B3A3FF', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                            {tag}
                          </span>
                                              ))}
                                          </div>
                                          <p style={{ fontSize: '0.9rem', color: '#444' }}>{course.description}</p>
                                      </div>
                                  </Link>
                              </div>
                          ))}
                      </div>
                  </div>
              </section>




              {/* CONTACT */}
              <section style={{ background: 'var(--ifm-color-emphasis-100)', padding: '4rem 0' }}>
                  <div className="container text--center">
                      <h2>Contact</h2>
                      <p>Pour toute information complémentaire :</p>

                      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '20px' }}>
                          <Link className="button button--secondary" href={contact.instagram}>
                              Instagram
                          </Link>

                          <Link className="button button--outline" href={contact.github} target="_blank">
                              GitHub
                          </Link>

                          <Link className="button button--primary" href={contact.linkedin} target="_blank">
                              LinkedIn
                          </Link>
                      </div>
                  </div>
              </section>
          </main>
      </Layout>

  );
}
