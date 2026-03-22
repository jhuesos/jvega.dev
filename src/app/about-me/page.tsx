import type { Metadata } from 'next';
import Image from 'next/image';
import { Chip } from '@/components/Chip/Chip';
import { Disclaimer } from '@/components/Disclaimer/Disclaimer';
import { Header } from '@/components/Header/Header';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about Jaime Vega, front-end engineer and tech lead from Amsterdam.',
};

export default function AboutMe() {
  return (
    <>
      <Header />
      <article className={styles.content}>
        <div className={styles.leftColumn}>
          <h2>Hello!</h2>
          <p>
            I am a front-end engineer, proactive, creative problem solver, and
            passionate developer. I learn things fast, and I pay attention to
            quality and details. As a tech lead, I have recently told to have:
            &quot;a very effective way of convincing people — with results and
            working prototypes. This is the most effective technical
            leadership&quot;. As a tech lead, I am still learning, but working
            for ING and Thunderhead gave me already valuable experience working
            for very different environments.
          </p>
          <p>
            I am looking forward to new challenges and to continue to improve my
            skills. Nice to meet you!
          </p>

          <section>
            <h2>
              <Image
                className={styles.iconImg}
                src="/icons/profile.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
              <span> Job Experience</span>
            </h2>

            <section>
              <h3>
                <strong>Front-End Engineer Consultant </strong>
                <span>(ING. Jan 19 – Jun 19)</span>
              </h3>
              <p>
                I worked remote exclusively, so I became an external consultant
                to help with architecture and strategy decision making. I also
                spent time developing the new generation of web components and
                other NodeJS support tools for developers.
              </p>
            </section>

            <section>
              <h3>
                <strong>Front-End Engineer / Tech Lead </strong>
                <span>(ING. Apr 16 – Dec 18)</span>
              </h3>
              <p>
                I worked as the principal developer working on maintaining the
                library of UI components and as tech lead for an organization of
                around ten teams and 50+ developers. I hosted regular meetings
                with all squads to discuss topics like security, quality, etc. I
                also met with other areas within ING to collaborate and decide
                how to move forward the global technology stack. Besides, I
                worked very closely with the UX team and business owners
                refining new features to determine their technical feasibility
                and to provide the best UX possible.
              </p>
            </section>

            <section>
              <h3>
                <strong>Team Lead. Scrum Master </strong>
                <span>(Thunderhead. Mar 15 – Apr 16)</span>
              </h3>
              <p>
                As Scrum Master and team lead, I hosted all regular meetings. I
                provided and helped to improve the performance metrics and
                worked with the Product Owner to refine stories and prepare and
                plan the backlog.
              </p>
            </section>

            <section>
              <h3>
                <strong>Senior Front-End Engineer </strong>
                <span>(Thunderhead. Oct 12 – Apr 16)</span>
              </h3>
              <p>
                I was one of the first UI engineers in the project working in
                some of the most complex UI components. As I was the most senior
                front-end engineer, I had a very active role in growing the
                team, questioning candidates, and preparing the interview
                material like tests and questions.
              </p>
            </section>

            <section>
              <h3>
                <strong>(Lead) Front-End Engineer </strong>
                <span>(Casengo. Oct 11 – Oct 12)</span>
              </h3>
              <p>
                I was involved in the very early phase of the design and
                architecture of the app. I also worked as a full-stack, creating
                the push-notifications update system, including the backend and
                web services in Java. Working in a real-time hybrid
                communication tool was very challenging and exciting.
              </p>
            </section>

            <section>
              <h3>
                <strong>Full stack Engineer </strong>
                <span>(Livecom. May 11 – Oct 12)</span>
              </h3>

              <h3>
                <strong>Web Development. IT Support </strong>
                <span>(Feyecon. Nov 10 – May 11)</span>
              </h3>
            </section>
          </section>

          <section>
            <h2>
              <Image
                className={styles.iconImg}
                src="/icons/book.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
              <span>Education</span>
            </h2>

            <h3>
              <strong>Master&apos;s degree in Computer Engineering</strong>
              <br />
              <span>
                (University of Las Palmas de Gran Canaria. Spain. Jul 10)
              </span>
            </h3>
          </section>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.profilePicContainer}>
            <Image
              src="/images/profile-pic-600.jpg"
              alt="Jaime Vega"
              width={600}
              height={600}
              sizes="(max-width: 559px) 100vw, 20vw"
              className={styles.profilePic}
            />
          </div>
          <section>
            <h2>Skills</h2>
            <h3>
              <strong>Coding</strong>
            </h3>
            <div>
              <Chip label="JavaScript" />
              <Chip label="React.js" />
              <Chip label="Node.js" />
              <Chip label="Redux" />
              <Chip label="Vue" />
              <Chip label="Web Components" />
              <Chip label="PWA" />
              <Chip label="HTML" />
              <Chip label="CSS" />
              <Chip label="Webpack" />
              <Chip label="git" />
              <Chip label="Less/SASS" />
            </div>

            <h3>
              <strong>Personal</strong>
            </h3>

            <div>
              <p>Communication</p>
              <ProgressBar percentage={84} />
              <p>Leadership</p>
              <ProgressBar percentage={50} />
              <p>Mentorship</p>
              <ProgressBar percentage={80} />
              <p>Teamwork</p>
              <ProgressBar percentage={95} />
              <p>English (proficient), Spanish (native)</p>
              <p>
                Love traveling, keeping up to date with new tech-trends and
                great TV shows and movies.
              </p>
            </div>
          </section>

          <section>
            <Disclaimer>
              <p>
                This document tries to show my professional career in a
                nutshell. Visit my
                <a
                  href="https://linkedin.com/in/jvegadev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  LinkedIn profile{' '}
                </a>
                for a more detailed description.
              </p>
            </Disclaimer>
          </section>
        </div>
      </article>
    </>
  );
}
