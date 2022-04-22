const Layout = ({ children }) => {
  return (
    <div>
      <h1>Hello Layout</h1>
      {children}
    </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
