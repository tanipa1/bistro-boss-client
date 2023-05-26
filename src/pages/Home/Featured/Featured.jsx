import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item py-16 bg-fixed text-white mb-20">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex w-3/4 mx-auto gap-12 items-center ">
                <div>
                    <img className="w-[748px]" src={featuredImg} alt="" />
                </div>
                <div className="w-3/4 ">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</small></p>
                    <button className="mt-3 btn btn-outline border-white text-white border-0 border-b-4 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;