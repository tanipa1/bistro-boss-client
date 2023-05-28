import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenu(popularItem)
            })
    }, [])
    return (
        <section className="mx-auto w-3/4 mb-20">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-14 ">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="w-1/5 mt-10 mx-auto">
                <button className=" btn btn-outline border-black border-0 border-b-4 ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;