import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const skills = document.getElementById("skills");
    const certifications = document.getElementById("certifications");
    const contact = document.getElementById("contact");

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    if (
      about.offsetTop <= window.pageYOffset + 350 &&
      about.offsetTop + about.offsetHeight > window.pageYOffset + 350
    ) {
      navLinks[0].classList.add("active");
    } else if (
      projects.offsetTop <= window.pageYOffset + 350 &&
      projects.offsetTop + projects.offsetHeight > window.pageYOffset + 350
    ) {
      navLinks[1].classList.add("active");
    } else if (
      skills.offsetTop <= window.pageYOffset + 350 &&
      skills.offsetTop + skills.offsetHeight > window.pageYOffset + 350
    ) {
      navLinks[2].classList.add("active");
    } else if (
      contact.offsetTop <= window.pageYOffset + 350 &&
      contact.offsetTop + contact.offsetHeight > window.pageYOffset + 350
    ) {
      navLinks[4].classList.add("active");
    } else if (
      certifications.offsetTop <= window.pageYOffset + 350 &&
      certifications.offsetTop + certifications.offsetHeight >
        window.pageYOffset + 350
    ) {
      navLinks[3].classList.add("active");
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
