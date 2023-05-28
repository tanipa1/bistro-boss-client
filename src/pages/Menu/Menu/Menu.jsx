import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover
                img={menuImg}
                title={"Our Menu"}
                subTitle={"Would you like to try a dish?"}
            ></Cover>

            {/* offered */}
            <div className='my-10'>
                <SectionTitle
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                ></SectionTitle>
            </div>
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* Dessert */}
            <Cover
                img={dessertImg}
                title={"Desserts"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className='my-10'>
            <MenuCategory
                items={dessert}
            ></MenuCategory>
            </div>

            {/* Pizza */}
            <Cover
                img={pizzaImg}
                title={"Pizza"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className='my-10'>
            <MenuCategory
                items={pizza}
            ></MenuCategory>
            </div>

            {/* Salads */}
            <Cover
                img={saladImg}
                title={"Salad"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className='my-10'>
            <MenuCategory
                items={salad}
            ></MenuCategory>
            </div>

            {/* Soup */}
            <Cover
                img={soupImg}
                title={"Soup"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></Cover>
            <div className='my-10'>
            <MenuCategory
                items={soup}
            ></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;