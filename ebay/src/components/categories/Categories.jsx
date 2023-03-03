import Container from '../../utils/Container';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../loader/Loader';
import './Categories.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { v4 } from 'uuid';


const Categories = () => {


    const [data, isLoading] = useFetchData(`categories/2/products`);
    const elData = data.slice(0 , 8)
    return (
        <section className='categories'>
            <Container>
                <span className='categories-link'>
                    <h3 className='categories-link__title'>Score these trending kicks</h3>
                    <div>
                        <Link to="/category/2">See all</Link><AiOutlineArrowRight/>
                    </div>
                </span>
                <div className="categories-wrapper">
                    {!isLoading ?
                        elData.map(category =>
                            <Link key={v4()} className="category-item" to={`/product/${category.id}`} >
                                <div className="category__image--wrapper">
                                    <img src={category.images?.at(0)} alt="category-img" className='category-image' />
                                </div>
                                <h3 className='category-title'>{category.title}</h3>
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