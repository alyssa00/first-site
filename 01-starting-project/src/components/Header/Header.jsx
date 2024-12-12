import reactImage from './../../assets/react-core-concepts.png'
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) { 
  return Math.floor(Math.random() * (max + 1));
}

// Displays the header of the page with a random word generated in the description
function Header() {
  const descriptionForConcepts = reactDescriptions[genRandomInt(2)];
  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptionForConcepts} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

export default Header;