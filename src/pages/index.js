import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Skills from '../components/Skills';
import Works from '../components/Works';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Skills />
    <Works />
    <Footer />
  </Layout>
);

export default IndexPage;
