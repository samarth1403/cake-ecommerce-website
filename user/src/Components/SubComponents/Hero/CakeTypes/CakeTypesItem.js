import React from 'react'
import { Link } from 'react-router-dom';
import ButtonRYG from '../../../ReusableComponents/ButtonRYG';
import { ScrollToTop } from '../../../ReusableComponents/ScrollToTop';

const CakeTypesItem = ({cakeType}) => {
  return (
    <div className='p-4'>
      <Link to="/shop-page" onClick={()=>ScrollToTop()}>
        <ButtonRYG className="min-[320px]:text-[18px] sm:text-[20px] text-center rounded-[18.9338px] px-8 py-4">
          {cakeType}
        </ButtonRYG>
      </Link>
    </div>
  );
}

export default CakeTypesItem
