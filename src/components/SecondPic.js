import { Parallax } from 'react-parallax';
import Img2 from '../images/img2.jpg'
import './AllPics.css'

const SecondPic = () => (
    <Parallax className='image' bgImage={Img2} strength={400}>
        <div className="content">
            <span className="img-text">A trip with lots of fun</span>
        </div>
    </Parallax> 
);

export default SecondPic 