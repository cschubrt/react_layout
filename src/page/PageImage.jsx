import pic from '../assets/mt.jpg';
import '../assets/css/picture.css'

//page header
const PageImage = () => {
  return (
    <div className="imgContainer">
      <img src={pic} alt="MT Mountains" style={{ width: '100vw', height: '60vh' }} />
      <div className="top-left w3-xxlarge w3-opacity">Another CS Template</div>
    </div>
  );
};

export default PageImage;