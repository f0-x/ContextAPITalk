import Img from 'templates/sharedModule/elements/image';
import ctaImage from '../public/images/cta.png';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import BorderOverlay from 'templates/sharedModule/borderOverlay';
import { FunctionComponent } from 'react';
import { IBlock } from 'types/IHomeBanner';

type Props = {
  ctaData: IBlock;
};

export const CTA: FunctionComponent<Props> = ({ ctaData }) => {
  if (!ctaData) return null;
  return (
    <div dangerouslySetInnerHTML={{ __html: ctaData.content }} />
    // <section className="section-cta relative bg-black py-[50px]">
    // 	<BorderOverlay style="absolute w-[41px] lg:w-[11px] h-[100px] bg-primary top-1/2 left-0 -translate-y-1/2 lg:-translate-y-0 lg:top-[50px]" />
    // 	<div className="container">
    // 		<div className="flex flex-wrap items-center section-wrap">
    // 			<div className="flex flex-wrap w-1/2 lg:w-full items-center lg:mb-[30px]">
    // 				<figure className="mr-10">
    // 					<Img
    // 						src={ctaImage.src}
    // 						altText="Find The Perfect Rivet For You"
    // 						width={107}
    // 						height={107}
    // 					/>
    // 				</figure>
    // 				<div className="">
    // 					<h2 className="section-title text-white text-[42px] font-bold leading-none">
    // 						Find The Perfect
    // 						<span className="block">Rivet For You</span>
    // 					</h2>
    // 				</div>
    // 			</div>

    // 			<div className="description w-1/2 lg:w-full pl-[50px] lg:pl-0">
    // 				<div className="mb-[30px] text-white text-4">
    // 					<p>
    // 						As a general industrial supplier, we can source
    // 						almost anything you may require, however our
    // 						specialty is in the supply of blind rivets,
    // 						rivet tools and thermo tools including heat guns
    // 						and hot melt glue guns.
    // 					</p>
    // 				</div>

    // 				<div>
    // 					<Link href="/">
    // 						<a className="inline-flex items-center text-lg font-medium text-white">
    // 							<span className="text-primary mr-[10px]">
    // 								CLICK HERE
    // 							</span>
    // 							TO GET STARTED{' '}
    // 							<BsFillArrowRightCircleFill
    // 								size="26px"
    // 								className="ml-5 text-primary"
    // 							/>
    // 						</a>
    // 					</Link>
    // 				</div>
    // 			</div>
    // 		</div>
    // 	</div>
    // </section>
  );
};
