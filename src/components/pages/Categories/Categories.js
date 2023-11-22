import React from 'react';
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';


const Categories = props => {
    const categories = useSelector(state => state.categories);
    console.log('categories', categories);
    return  (
        <div className={`d-flex flex-column  ${styles.categoriesContainer}`}>
          <div className="mb-4 mt-3 px-3"> {/* Added px-3 for padding */}
            <h1 className="mb-3">All Categories</h1>
          </div>
          <div className="d-flex flex-column align-items-center m-5"> {/* Centered the second div */}
            {categories.map((category) => (
              <Link key={props.id} to={`/post/category/${category}`} className={`text-center ${styles.link}`}>
                <Button variant="outline-dark" className={`mb-2 ${styles.button}`}>{category}</Button>{' '}
              </Link>
            ))}
          </div>
        </div>
      );
}

export default Categories;