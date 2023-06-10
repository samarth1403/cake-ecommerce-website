import React from 'react'
import ButtonRYG from '../../../ReusableComponents/ButtonRYG';

const CakeTypesItem = ({cakeType}) => {
  return (
    <div>
      <ButtonRYG className="text-[24px] text-center rounded-[18.9338px] px-8 py-4 m-4">
        {cakeType}
      </ButtonRYG>
    </div>
  );
}

export default CakeTypesItem
