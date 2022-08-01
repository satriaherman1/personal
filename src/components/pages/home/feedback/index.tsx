import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import ReviewCard from "@src/components/pages/home/feedback/review-card";
import FeedbackService from "@src/service/rest/feedback.service";
import { useQuery } from "react-query";
import SkeletonReview from "@src/components/pages/home/feedback/skeleton";

export default function Feedback() {
  const feedbackService = new FeedbackService();

  const { data: feedbacks } = useQuery("feedback-list", feedbackService.getFeedbacks);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {!feedbacks ? (
          <SkeletonReview />
        ) : (
          feedbacks?.data?.data.map((s: any) => (
            <SwiperSlide>
              <ReviewCard name={s.attributes.name} stars={s.attributes.stars} description={s.attributes.description} title={s.attributes.title} photo={s.attributes.photo.data.attributes.url} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
