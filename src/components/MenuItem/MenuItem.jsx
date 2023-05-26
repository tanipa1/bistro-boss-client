import './MenuItem.css';

const MenuItem = ({item}) => {
    const {name, recipe, price, image} = item;
    return (
        <div className="flex space-x-4">
            <img className="menu-img w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-lg">{name}----------</h3>
                <p><small>{recipe}</small></p>
            </div>
            <p className="text-[#D99904]">${price}</p>
        </div>
    );
};

export default MenuItem;