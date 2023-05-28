import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
        <div className="mx-auto w-3/4 mb-20">
            <div className="grid md:grid-cols-2 gap-14 ">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="w-1/5 mt-10 mx-auto">
                <button className=" btn btn-outline border-black border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;