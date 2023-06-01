import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../../shared/Cover/Cover";

const MenuCategory = ({ items, img, title, subTitle }) => {
    return (
        <div className="">
            { title &&
                <Cover
                img={img}
                title={title}
                subTitle={subTitle}
            ></Cover>
            }
            <div className="mx-auto w-3/4 my-10 grid md:grid-cols-2 gap-14 ">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="w-1/5 mt-10 mx-auto">
                <Link to={`/order/${title}`}>
                    <button className=" btn btn-outline border-black border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;