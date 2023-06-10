import React from 'react'
import CakeTypesItem from './CakeTypesItem'
const CakeTypesList = () => {
    const cakeTypesList = [
        "Pinata","Chocolate","Vanilla","Black Forest","ButterScotch","Fruit","Dry Fruit"
    ]

    const renderedCakeTypesList = cakeTypesList.map((cakeType)=>{
        return <CakeTypesItem key={cakeType} cakeType={cakeType}/>
    })
  return (
    <div className="bg-[#0D103C] flex flex-row flex-wrap justify-center items-center mx-16 pl-24 pr-16 py-4 my-4">
    {renderedCakeTypesList}
    </div>
  );
}

export default CakeTypesList
