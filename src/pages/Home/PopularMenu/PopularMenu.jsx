import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem)})
    },[])
    return (
        <section>
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-14 mx-auto w-3/4 mb-20">
                {
                    menu.map(item => <MenuItem
                     key={item._id}
                     item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;