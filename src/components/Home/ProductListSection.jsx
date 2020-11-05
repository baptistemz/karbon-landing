import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const ProductListSection = () => {
  const [numberOfVisibleProducts, setNumberOfVisibleProducts] = useState((window.innerWidth > 1280 ? 1280 : window.innerWidth) / 200)
  const handleResize = () => {
    setNumberOfVisibleProducts((window.innerWidth > 1280 ? 1280 : window.innerWidth) / 200);
  }
  const productsArray = [...Array(10)];
  window.addEventListener('resize', handleResize);
  return(
    <div id="product_list_pictures">
      <CarouselProvider
        infinite
        isPlaying
        lockOnWindowScroll
        naturalSlideWidth={1}
        naturalSlideHeight={1.3}
        visibleSlides={numberOfVisibleProducts}
        totalSlides={10}
      >
        <Slider>
          {productsArray.map((el, index) => (
            <Slide index={index}>
              <Card>
                <img src={`/product${index > 9 ? index - 9 : index + 1}.webp`} alt=""/>
              </Card>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
}


export default ProductListSection;
