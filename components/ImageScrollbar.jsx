// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box } from '@chakra-ui/react';

const ImageScrollbar = ({data, open}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      className={open ? 'zIndex-minus' : ''}
    >
      {data?.slice(0, 4).map((item) => (
        <SwiperSlide key={item.id}>
          <Box itemID={item.id} position='absolute' top={'50%'} transform='translateY(-50%)' width={'100%'}>
            <img src={item.url} style={{width: '100%', objectFit: 'cover', objectPosition: '50% 50%'}} alt='property photos'/>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageScrollbar;
