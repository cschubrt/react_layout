import MobileHeader from './MobileHeader';
import '../assets/css/stylesV1.css';

// add top header
const Layout = ({ children }) => {
  return (
    <>
      <MobileHeader />
      <div style={{ margin: '65px 10px 10px 10px'}}>
        {children}
      </div>
    </>
  );
}

export default Layout;