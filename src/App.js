import "./App.css";
import Navbar from "./components/Nav";

function Portfolio() {
  return (
    <div>
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
          <li>
            Programming Languages: List your programming language expertise
          </li>
          <li>
            Tools and Technologies: List your proficiency in tools and
            technologies
          </li>
          <li>
            Soft Skills: List your interpersonal skills, communication, team
            management, leadership, and problem-solving skills
          </li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form action="#" method="post">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Message</label>
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
