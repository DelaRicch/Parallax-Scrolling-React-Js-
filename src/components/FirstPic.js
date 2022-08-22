import { Parallax } from 'react-parallax';
import Img1 from '../images/img1.jpg'
import './AllPics.css'

const FirstPic = () => (
    <Parallax className='image' bgImage={Img1} strength={400}>
        <div className="content">
            <span className="img-text">Nice Mountain Image</span>
        </div>
    </Parallax> 
);

export default FirstPic 