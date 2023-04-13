import "./App.css";
import Navbar from "./components/Nav";

function Portfolio() {
  return (
    <div className="portofolio--container">
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <Navbar />

      <section id="about">
        <h2>About Me</h2>
        <p>
          Insert your introduction or summary of your skills, expertise, and
          experience here.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project Title 1</h3>
            <p>Project Description 1</p>

            <a href="#">View Project</a>
          </li>
          <li>
            <h3>Project Title 2</h3>
            <p>Project Description 2</p>
            <a href="#">View Project</a>
          </li>
          <li>
            <h3>Project Title 3</h3>
            <p>Project Description 3</p>
            <a href="#">View Project</a>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages, Tools and Technologies I`ve used:</li>

          <div className="tools--icons">
            <div>
              <i className="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>

            <div>
              <i className="devicon-react-plain colored"></i>
              <p style={{ marginLeft: "30px" }}>React</p>
            </div>

            <div>
              <i className="devicon-visualstudio-plain colored"></i>
              <p>Visual Studio</p>
            </div>

            <div>
              <i className="devicon-npm-original-wordmark colored"></i>
              <p style={{ marginLeft: "30px" }}>NPM</p>
            </div>

            <div>
              <i className="devicon-firebase-plain colored"></i>
              <p>Firebase</p>
            </div>

            <div>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <p style={{ marginLeft: "27px" }}>Html5</p>
            </div>

            <div>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <p style={{ marginLeft: "30px" }}>CSS3</p>
            </div>

            <div>
              <i className="devicon-github-plain colored"></i>
              <p style={{ marginLeft: "25px" }}>Github</p>
            </div>

            <div>
              <i className="devicon-linux-plain colored"></i>
              <p style={{ marginLeft: "25px" }}>Linux</p>
            </div>

            <div>
              <i className="devicon-nodejs-plain colored"></i>
              <p style={{ marginLeft: "22px" }}>NodeJS</p>
            </div>

            <div>
              <i className="devicon-express-original-wordmark colored"></i>
              <p>Express</p>
            </div>

            <div>
              <i className="devicon-webpack-plain colored"></i>
              <p>Webpack</p>
            </div>

            <div>
              <i className="devicon-sqlite-plain colored"></i>
              <p>SQLite</p>
            </div>
          </div>

          <div className="soft--skills">
            <h3>Soft Skills:</h3>
            <li>
              <b>Interpersonal skills:</b> I am able to work well with people
              from different backgrounds and with diverse personalities. I am
              skilled in building relationships, networking, and collaborating
              effectively with others.
            </li>
            <li>
              <b> Communication:</b> I possess excellent verbal and written
              communication skills. I am able to convey complex ideas in a clear
              and concise manner, and I am a proficient active listener.
            </li>
            <li>
              <b>Leadership:</b> I possess strong leadership qualities, and I am
              able to inspire and motivate others to achieve common goals. I am
              skilled in setting a vision, communicating it effectively, and
              leading by example.
            </li>
            <li>
              <b>Problem-solving:</b> I have strong analytical skills and am
              able to identify problems, generate creative solutions, and make
              informed decisions. I am able to adapt to changing situations,
              think critically, and make decisions based on data and facts.
            </li>
          </div>
        </ul>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>

        <div className="certification--container">
          <a href="https://certificates.cs50.io/e434c454-d200-4ccd-a308-ce32fb560d22.png?size=letter">
            <h3>CS50's Introduction to Computer Science:</h3>
            <img
              className="cert--link"
              src="images/cs50x.png"
              alt="cs50 logo"
            />
          </a>

          <a href="https://certificates.cs50.io/0608492f-e1b9-4169-8e36-c37a61101a3d.png?size=letter">
            <h3>CS50's Web Programming with Python and JavaScript:</h3>
            <img
              className="cert--link"
              src="images/cs50w.png"
              alt="cs50w logo"
            />
          </a>

          <div className="theodinproject">
            <img src="images/top.png" alt="the odin project logo" />
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form action="#" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 - Your Name</p>
      </footer>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
      <h1>aaaaaaaa</h1>
    </div>
  );
}

export default Portfolio;
