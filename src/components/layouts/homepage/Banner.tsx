import Button from 'templates/sharedModule/elements/button';
import { RiShoppingBagFill } from 'react-icons/ri';
import bannerImage from '../public/images/homeBanner.png';
import FigureWithOverlay from 'templates/sharedModule/figureWithOverlay';
import { FunctionComponent } from 'react';
import { IBlock } from 'types/IHomeBanner';

type Props = {
  bannerData: IBlock;
};

export const Banner: FunctionComponent<Props> = ({ bannerData }) => {
  //if banner data is not available then return null
  if (!bannerData) return null;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bannerData.content }} />
      {/* <section className="py-[60px] section-banner">
				<div className="container">
					<div className="flex flex-wrap items-end section-wrap">
						<div className="w-1/2 md:w-full pr-10 md:pr-0 md:mb-[50px]">
							<h2 className="section-title text-black-3a3 text-[54px] lg:text-[32px] font-bold leading-none mb-[30px] pl-[35px] border-l-[11px] border-primary">
								Your Standard
								<span className="block">
									For Reliability <br className="lg:hidden" />
									& Speed
								</span>
							</h2>
							<div className="section-description text-lg text-gray-656 mb-[50px]">
								<p>
									As a general industrial supplier, we can
									source almost anything you may require,
									however our specialty is in the supply of
									blind rivets, rivet tools and thermo tools
									including heat guns and hot melt glue guns.
								</p>
							</div>

							<div>
								<Button
									href="/"
									label="START SHOPPING"
									icon={<RiShoppingBagFill />}
									classes="inline-flex items-center px-[35px] py-[15px] bg-black-3a3 text-white text-lg font-medium uppercase"
								/>
							</div>
						</div>
						{bannerImage.src && (
							<div className="w-1/2 pl-10 text-right md:w-full md:text-left md:pl-0">
								<FigureWithOverlay
									source={bannerImage.src}
									height="460px"
									width="510px"
									altText="featured Image"
								/>
							</div>
						)}
					</div>
				</div>
			</section> */}
    </>
  );
};
