import { FunctionComponent } from 'react';
import { IPartner } from 'types/IHomeBanner';
import SliderCarousel from 'templates/sharedModule/elements/slider';

type Props = {
  partnerData: IPartner[];
};
export const Partner: FunctionComponent<Props> = ({ partnerData }) => {
  if (!partnerData) return null;

  return (
    <section className="section-partner py-[50px]">
      <div className="container">
        <div className="section-wrap -mx-10 lg:-mx-[15px]">
          <SliderCarousel
            slides={partnerData}
            dots={true}
            infinite={true}
            speed={500}
            slidesToScroll={1}
            slidesToShow={5}
            // Parentwidth="187px"
            // Parentheight="45px"
            classes="mx-[15px] flex items-center"
            height="45px"
            width="187px"
          />
        </div>
      </div>
    </section>
  );
};
