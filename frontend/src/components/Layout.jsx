import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Footer />
      {children}
    </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
