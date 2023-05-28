import './Cover.css';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero h-[500px]" >
            <div className="cover-text px-36 py-16 text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{subTitle}</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;