import MobileHeader from './MobileHeader';
import '../assets/css/stylesV1.css';

// add top header
export default function Layout(props) {
  return (
    <>
      <MobileHeader toggleLogin={props.toggleLogin} />
      <div style={{ margin: '65px 10px 10px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {props.children}
      </div>
    </>
  );
}