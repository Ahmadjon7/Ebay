import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../loader/Loader';
import './categoriesId'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { v4 } from 'uuid';


const Categories = () => {


    const [data, isLoading] = useFetchData(`/categories`);
    const elData = data.slice(0 , 8)
    return (
        <section className='categoriesId'>
            <Container>
                <span className='categories-link'>
                    <h3 className='categories-link__title'>Extra 20% off for Presidents' Day</h3>
                    <div>
                        <Link to="/prodcut">See all</Link>
                        <AiOutlineArrowRight/>
                    </div>
                </span>
                <div className="categories-wrapper">
                    {!isLoading ?
                        elData.map(category =>
                            <Link key={v4()} className="category-item" to={`/category/${category.id}`}>
                                <div className="category__image--wrapper" >
                                    <img src={category.image} alt="category-img" className='category-image' />
                                </div>
                                <h3 className='category-title'>{category.name}</h3>
                            </Link>
                        ) :
                        <Loader />
                    }
                </div>
            </Container>
        </section>
    );
};

export default Categories;