import logo from './logo.svg';
import './App.css';
import Header from './Navbar/Navbar';
import Hero from './Hero/Hero';
import styles from "./App.module.css"
import About from './About/About';
import MyWork from './MyWork/MyWork';

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
    </div>
  );
}

export default App;
