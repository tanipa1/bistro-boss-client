import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={"Our Menu"}
                subTitle={"Would you like to try a dish?"}
            ></Cover>
            <div className='my-12'>
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Menu;