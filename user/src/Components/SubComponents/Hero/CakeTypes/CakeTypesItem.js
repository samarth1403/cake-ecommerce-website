import React from 'react'
import { Link } from 'react-router-dom';
import ButtonRYG from '../../../ReusableComponents/ButtonRYG';
import { ScrollToTop } from '../../../ReusableComponents/ScrollToTop';

const CakeTypesItem = ({cakeType}) => {
  return (
    <div>
      <Link to="/shop-page" onClick={()=>ScrollToTop()}>
        <ButtonRYG className="text-[24px] text-center rounded-[18.9338px] px-8 py-4 m-4">
          {cakeType}
        </ButtonRYG>
      </Link>
    </div>
  );
}

export default CakeTypesItem
