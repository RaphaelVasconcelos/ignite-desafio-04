import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

export function SwiperComponent() {
  return (
    <Flex maxWidth={1240} w="100%" height={450} mb="20" mx="auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, type: "bullets" }}
        parallax={true}
      >
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <SwiperSlide>
          <Image
            src="/images/europe.jpg"
            layout="responsive"
            width={100}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
