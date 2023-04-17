import "./App.css";
import "./Animation.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Nav";

function Portfolio() {
  const [name, setName] = useState(
    "Welcome to my website, my name is Stefan Andrei."
  );
  const [loading, setLoading] = useState(true);
  const [displayedName, setDisplayedName] = useState("");
  const [nameAppeared, setNameAppeared] = useState(false);

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3500);
      return () => clearTimeout(timeout);
    } else if (displayedName.length < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(name.slice(0, displayedName.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!nameAppeared) {
      setNameAppeared(true);
    }
  }, [name, displayedName, loading, nameAppeared]);

  return (
    <div className="portofolio--container">
      <div className="welcome--page">
        {loading ? (
          <div className="loading-line"></div>
        ) : (
          <div className="welcome--page">
            <span id="name-display">{displayedName}</span>
            {nameAppeared && (
              <div className="arrow-pulsating">
                <span className="arrow"></span>
              </div>
            )}
          </div>
        )}
      </div>

      <Navbar />

      <section id="about">
        <h2>About Me</h2>
        <img src="images/placeholder.png" alt="male placeholder" />
        <hr />
        <br />
        <p>
          Hey there! I'm a web developer with expertise in a variety of
          technologies, including React, JavaScript, Firebase, HTML, CSS, npm,
          and Visual Studio. I've also got experience using Ubuntu, so I'm
          comfortable working with different operating systems. I've completed
          both Harvard's CS50x and CS50w courses, which have given me a solid
          foundation in computer science concepts and web development.
          Currently, I'm in the process of finishing The Odin Project, a
          comprehensive web development curriculum that's been great for
          expanding my full-stack skills. One of my favorite things to do is
          work on personal projects using the tools mentioned above, and I've
          got around a dozen of them under my belt. I'm always excited to take
          on new projects and challenges, and I think my skills and experience
          make me a great asset to any team.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Global Chat</h3>
            <img src="images/chat-globe.png" alt="homepage" />
            <br />
            <p>
              Chat application made with React for frontend and Firebase for
              backend. Features: Gmail account login, Receive and send messages
              in real-time, Upload files in chat, Emoticon button using
              EmojiPicker, and others.
            </p>
            <a href="https://chatglobe-ac09d.web.app/">View Project</a>
          </li>

          <li>
            <h3>Shopping Cart</h3>
            <img src="images/shopping-cart.png" alt="homepage" />
            <br />
            <p>
              Shopping Cart website made with React using props, hooks and api
              from fakestoore.com. Features: Add items to cart, correctly update
              number of items in cart, add/substract items from card using +/-
              buttons, correctly update the total price.
            </p>
            <a href="https://stefanpython.github.io/shopping-cart-project/">
              View Project
            </a>
          </li>

          <li>
            <h3>Elemental Calculator </h3>
            <img src="images/calculator.png" alt="" />
            <br />
            <p>
              Calculator application made with Vanilla Javascript. Features:
              Add, Substract, Multiply, Divide numbers.
            </p>
            <a href="https://stefanpython.github.io/Calculator-Project/">
              View Project
            </a>
          </li>

          <li>
            <h3>Memory Card Game</h3>
            <img src="images/memory-card-game.png" alt="" />
            <br />
            <p>
              Memory card game made with React. User must click an image and
              collect points. If an images is clicked twice in a row, score is
              resetted to 0. After each click the images are re-arranged
              randomly.
            </p>
            <a href="https://stefanpython.github.io/memory_card-project/">
              View Project
            </a>
          </li>

          <li>
            <h3>DOMore To-Do List</h3>
            <img src="images/todolist.png" alt="" />
            <br />
            <p>
              To-Do list made with Vanilla Javascript. Features: Add projects,
              add tasks to specific project, mark tasks as important, add
              due-date to each task, delete projets/tasks, display
              finished/important/today/all tasks.
            </p>
            <a href="https://stefanpython.github.io/ToDoList-Project/">
              View Project
            </a>
          </li>

          <li>
            <h3>Battleship</h3>
            <img src="images/battleship.png" alt="" />
            <br />

            <p>
              Battleship project made with Vanilla Javascript.Ships are placed
              in random order on each board. Click on the enemy board and try to
              sink their ships first. (Sometimes the boats have more "hp" - bug
              or feature, depends on perspective).
            </p>
            <a href="https://stefanpython.github.io/Battleship/">
              View Project
            </a>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages, Tools and Technologies I`ve used:</li>
          <hr />
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
            <h3> &#9776; Soft Skills:</h3>
            <hr style={{ marginTop: "15px" }} />
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
            <h3 style={{ marginLeft: "20px" }}>And:</h3>
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
        <p>&copy; 2023 - Stefan Andrei</p>{" "}
        <a href="https://github.com/stefanpython">
          <img
            className="git"
            alt="git logo"
            src="https://c.tenor.com/A15H8E1VUh8AAAAM/github-cat.gif"
          />
        </a>
      </footer>
    </div>
  );
}

export default Portfolio;
