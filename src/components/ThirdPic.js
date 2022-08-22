import { Parallax } from 'react-parallax';
import Img3 from '../images/img3.jpg'
import './AllPics.css'

const ThirdPic = () => (
    <Parallax className='image' bgImage={Img3} strength={400}>
        <div className="content">
            <span className="img-text">Nice Mountain Image</span>
        </div>
    </Parallax> 
);

export default ThirdPic 