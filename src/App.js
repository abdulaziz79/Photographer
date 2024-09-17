import logo from './logo.svg';
import './App.css';
import Header from './Navbar/Navbar';
import Hero from './Hero/Hero';
import styles from "./App.module.css"
import About from './About/About';
import MyWork from './MyWork/MyWork';
import Services from './Services/Services';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
      <Hero />
      </section>
      <section className={styles.about}>
        <About />
      </section>
      <section className={styles.work}>
        <MyWork />
      </section>
      <section className={styles.Services}>
        <Services />
      </section>
      <section className={styles.Contact}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
