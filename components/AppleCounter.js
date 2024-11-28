import React, {useState} from 'react'
import BasketName from './BasketName'
import Button from './Button'
import leftArrow from "./../assets/left.svg";
import rightArrow from "./../assets/right.svg";
const totalApples=10;

function AppleCounter() {
    const [leftBasketCount, setLeftBasketCount]= useState(0);
    const [rightBasketCount, setRightBasketCount] = useState(totalApples - leftBasketCount);
    const leftBasketClick= () => {
        
        if (rightBasketCount> 0) {
        
            setLeftBasketCount(prevValue=> prevValue+1);
            setRightBasketCount(prevValue=> prevValue-1);
        }
        
    }

    const rightBasketClick= () => {
        if (leftBasketCount > 0) {
            setLeftBasketCount(prevValue=> prevValue-1);
            setRightBasketCount(prevValue=> prevValue+1);
        }
        
        console.log("Right button clicked");
    }
  return (
    <section>
        <BasketName name="Basket 1" appleCount={leftBasketCount} />
        <Button image={leftArrow} title="left arrow" clickHandler={leftBasketClick}/>
        <Button image={rightArrow} title="right arrow" clickHandler={rightBasketClick}/>
        <BasketName name="Basket 2" appleCount={rightBasketCount} />
    </section>
  )
}

export default AppleCounter