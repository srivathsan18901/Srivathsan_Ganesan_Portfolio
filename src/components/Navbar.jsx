// src/components/Navbar.jsx
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ activeSection, scrollToSection }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
      <ThemeToggle/>
    </nav>
  );
};

export default Navbar;