import React from 'react';

import Chip from './Chip';
import ProgressBar from './ProgressBar';

import './AboutMe.css';
import profilePic200 from '../../../static/images/profile-pic-200.jpg';
import profilePic300 from '../../../static/images/profile-pic-300.jpg';
import profilePic400 from '../../../static/images/profile-pic-400.jpg';

const AboutMe = () => {
  return (
    <article className="about-me">
      <div className="education-experience-container">
        <h2>Hello!</h2>
        <p>
          I am a front-end engineer, proactive, creative problem solver, and
          passionate developer. I learn things fast, and I pay attention to
          quality and details. As a tech lead, I have recently told to have: “a
          very effective way of convincing people — with results and working
          prototypes. This is the most effective technical leadership”. As a
          tech lead, I am still learning, but working for ING and Thunderhead
          gave me already valuable experience working for very different
          environments.
        </p>
        <p>
          I am looking forward to new challenges and to continue to improve my
          skills. Nice to meet you!
        </p>

        <section>
          <h2>Job Experience</h2>

          <section>
            <h3>FRONT-END ENGINEER CONSULTANT (ING. APR 16 – DEC 18)</h3>
            <p>
              I worked remote exclusively, so I became an external consultant to
              help with architecture and strategy decision making. I also spent
              time developing the new generation of web components and other
              NodeJS support tools for developers.
            </p>
          </section>

          <section>
            <h3>FRONT-END (TEACH LEAD) ENGINEER (ING. JAN – JUN 2019)</h3>
            <p>
              I worked as the principal developer working on maintaining the
              library of UI components and as tech lead for an organization of
              around ten teams and 50+ developers. I hosted regular meetings
              with all squads to discuss topics like security, quality, etc. I
              also met with other areas within ING to collaborate and decide how
              to move forward the global technology stack. Besides, I worked
              very closely with the UX team and business owners refining new
              features to determine their technical feasibility and to provide
              the best UX possible.
            </p>
          </section>

          <section>
            <h3>TEAM LEAD. SCRUM MASTER (THUNDERHEAD. MAR 15 – APR 16)</h3>
            <p>
              As Scrum Master and team lead, I hosted all regular meetings. I
              provided and helped to improve the performance metrics and worked
              with the Product Owner to refine stories and prepare and plan the
              backlog.
            </p>
          </section>

          <section>
            <h3>SENIOR FRONT-END ENGINEER (THUNDERHEAD. OCT 12 – APR 16) </h3>
            <p>
              I was one of the first UI engineers in the project working in some
              of the most complex UI components. As I was the most senior
              front-end engineer, I had a very active role in growing the team,
              questioning candidates, and preparing the interview material like
              tests and questions.
            </p>
          </section>

          <section>
            <h3>(LEAD) FRONT-END ENGINEER. CASENGO. OCT 11 – OCT 12</h3>
            <p>
              I was involved in the very early phase of the design and
              architecture of the app. I also worked as a full-stack, creating
              the push-notifications update system, including the backend and
              web services in Java. Working in a real-time hybrid communication
              tool was very challenging and exciting.
            </p>
          </section>

          <section>
            <h3>
              FULL-STACK ENGINEER. LIVECOM. MAY 11 – OCT 12 WEB DEVELOPMENT. IT
              SUPPORT. FEYECON NOV 10 – MAY 11
            </h3>
          </section>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            Master’s degree in Computer Engineering University of Las Palmas de
            Gran Canaria. Spain. July 2010
          </p>
        </section>
      </div>
      <div className="skills-container">
        <div className="profile-pic-container">
          <img
            src={profilePic400}
            srcSet={`${profilePic400} 400w, ${profilePic300} 300w, ${profilePic200} 200w`}
            // In small screens, might be displayed bigger as content is in one column. That's why
            // from less than 500px, I use 100vw to calculate the size
            sizes="(max-width: 500px) 100vw, 20vw"
            alt="Jaime Vega's face"
          />
        </div>
        <section>
          <h2>Skills</h2>
          <h3>Coding</h3>
          <div>
            <Chip label="JavaScript" />
            <Chip label="Node.js" />
            <Chip label="TypeScript" />
            <Chip label="Vue" />
            <Chip label="Web Components" />
            <Chip label="PWA" />
            <Chip label="CSS" />
            <Chip label="Webpack" />
            <Chip label="Less/SASS" />
            <Chip label="git" />
          </div>

          <h3>Personal</h3>
          <div>
            <p>Communication</p>
            <ProgressBar percentage="30" />
            <p>Leadership</p>
            <ProgressBar percentage="50" />
            <p>Mentorship</p>
            <ProgressBar percentage="80" />
            <p>Teamwork</p>
            <ProgressBar percentage="20" />
            <p>English (proficient), Spanish (native)</p>
          </div>
        </section>

        <section>
          <div className="disclaimer">
            <div className="exclamation">!</div>
            <div className="msg">
              <p>
                This document tries to show my professional career in a
                nutshell. Visit my
                <a
                  href="https://linkedin.com/in/jvegadev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;LinkedIn profile&nbsp;
                </a>
                for a more detailed description.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default AboutMe;
