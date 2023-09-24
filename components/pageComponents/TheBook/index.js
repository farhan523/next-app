import Layout from '../../Layouts/HomeLayout';
import Header from '../../BookPageHeader';
import Cards from '../../BookCards';
import Caoursel from '../../BookSlider';
import Author from '../../BookAuthor';
const Index = () => {
  return (
    <Layout>
      <Header />
      <Cards />
      <Caoursel />
      <Author />
    </Layout>
  );
};
export default Index;
