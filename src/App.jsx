import React, { useEffect, useRef } from 'react';
import GitHubIcon from './assets/github.png';
import LinkedInIcon from './assets/linkedin.png';
import profile from './assets/profile.png'
import DiscordIcon from './assets/discord.png'
import gmailIcon from './assets/gmail.png'
import HTMLLogo from './assets/html.png'
import CSSLogo from './assets/css-3.png'
import JSLogo from './assets/js.png'
import REACTLogo from './assets/react.png'
import EXPRESSLogo from './assets/pngwing.com.png'
import monogoLogo from './assets/mongo.png'
import VSCodeLogo from './assets/visual-studio.png'
import GithubLogo from './assets/github.png'
import TailwindLogo from './assets/tailwind.png'
import EJS from './assets/ej.png'


function App() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'transform', 'scale-75');
            entry.target.classList.add('opacity-100', 'transform', 'scale-100');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    skillRefs.current.forEach((ref) => observer.observe(ref));

    return () => {
      skillRefs.current.forEach((ref) => observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 p-4 shadow-md">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <div className="text-2xl font-bold mr-4">My Portfolio</div>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl">
        RU
      </div>
    </div>
    <div className="flex items-center space-x-3">
      <a href="#about" className="hover:text-green-400 transition-colors duration-300 font-semibold">About</a>
      <a href="#skills" className="hover:text-green-400 transition-colors duration-300 font-semibold">Skills</a>
      <a href="#contact" className="hover:text-green-400 transition-colors duration-300 font-semibold">Contact</a>
      <a href="https://www.linkedin.com/in/raghav-upadhyay-769410252/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
      </a>
      <a href="https://github.com/viper-raghav" target="_blank" rel="noopener noreferrer">
        <img src={GitHubIcon} alt="GitHub" className="w-6 h-6" />
      </a>
    </div>
  </div>
</nav>
      {/* About Section */}
      <div className="flex flex-col items-center text-center p-12 bg-black mb-32" id="about">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I am <span className="text-green-400">Raghav Upadhyay</span>
        </h1>
        <img
          src={profile} // Replace with your picture URL
          alt="Profile"
          className="w-40 h-40 rounded-full mb-2 border-4 border-gray-700"
        />
        <p className="text-gray-300 text-lg mb-10 font-bold">
          Computer Science Student
        </p>

        <h1 className='text-4xl font-bold mb-4 text-green-400'>About Me</h1>
        <p className="text-gray-300 text-lg max-w-3xl font-semibold leading-relaxed">
          I am Raghav Upadhyay, currently pursuing a degree in Computer Science. Passionate about technology and always eager to learn and explore new things. With a keen interest in software development and a knack for problem-solving, I strive to stay updated with the latest tech trends and continuously improve my skills. Whether it's building web applications or diving into new programming languages, I am always excited about new challenges and opportunities.
        </p>
        <div class="flex items-center justify-center bg-black mt-10">
  <a href="https://app.luminpdf.com/viewer/66a0f972c6930952179a06a6" target="_blank" rel="noopener noreferrer">
    <button type="button" class="rounded-full bg-green-400 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      View Resume
    </button>
  </a>
</div>

      </div>

  

      {/* Skills Section */}


<section id="skills" className="h-screen bg-black p-12 text-center text-white">
  <h2 className="text-3xl font-bold mb-8 text-green-400">Technical Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
    {[
      { name: 'HTML', logo: HTMLLogo },
      { name: 'CSS', logo: CSSLogo },
      // eslint-disable-next-line no-undef
      { name: 'JavaScript', logo: JSLogo },
      // eslint-disable-next-line no-undef
      { name: 'ReactJS', logo: REACTLogo },
      // eslint-disable-next-line no-undef
      { name: 'ExpressJS', logo: EXPRESSLogo },
      { name: 'EJS', logo: EJS },
      // eslint-disable-next-line no-undef
      { name: 'MongoDB', logo: monogoLogo },
      // eslint-disable-next-line no-undef
      { name: 'VS Code', logo: VSCodeLogo },
      // eslint-disable-next-line no-undef
      { name: 'GitHub', logo: GithubLogo },
      // eslint-disable-next-line no-undef
      { name: 'Tailwind CSS', logo: TailwindLogo },
    ].map((skill, index) => (
      <div
        key={index}
        ref={(el) => (skillRefs.current[index] = el)}
        className="opacity-0 transform scale-75 transition-all duration-700 ease-out bg-gray-800 p-8 rounded-lg shadow-lg flex items-center justify-center"
      >
        {skill.logo && (
          <img src={skill.logo} alt={`${skill.name} logo`} className="w-8 h-8 mr-2" />
        )}
        <span className="text-lg font-bold text-green-400">{skill.name}</span>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
<div id="contact" className="h-screen bg-black p-12 text-center text-white">
  <h2 className="text-3xl font-bold mb-8 text-green-400">Contact Me</h2>
  <div className="space-y-6">
    <p className="text-gray-300 text-lg font-semibold">
      Feel free to reach out to me through any of the platforms below:
    </p>
    <div className="space-y-6">
      <div className="flex justify-center items-center transition-transform transform hover:scale-110 duration-300">
        <a href="https://github.com/viper-raghav" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="w-12 h-12 transition-transform duration-300 hover:rotate-45" />
        </a>
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-110 duration-300">
        <a href="https://www.linkedin.com/in/raghav-upadhyay-769410252/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12 transition-transform duration-300 hover:rotate-45" />
        </a>
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-110 duration-300">
        <img src={DiscordIcon} alt="Discord" className="w-12 h-12 mr-2 transition-transform duration-300 hover:rotate-45" />
        <span className="text-lg font-semibold transition-colors duration-300 hover:text-green-400">ghostyy_02</span> {/* Replace with your Discord username */}
      </div>
      <div className="flex justify-center items-center transition-transform transform hover:scale-110 duration-300">
        <img src={gmailIcon} alt="Gmail" className="w-12 h-12 mr-2 transition-transform duration-300 hover:rotate-45" />
        <span className="text-lg font-semibold transition-colors duration-300 hover:text-green-400">upadhyayraghav17@gmail.com</span> {/* Replace with your Gmail address */}
      </div>
    </div>
  </div>
</div>

</div>
  );
  
  
}

export default App;
