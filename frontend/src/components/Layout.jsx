import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Main from './Main/Main';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
      {children}
    </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
