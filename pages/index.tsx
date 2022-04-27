import { NextPage } from 'next';
import { Fragment, FunctionComponent } from 'react';
import { IHomeBanner } from 'types/IHomeBanner';
import { GetHomeData } from '_services/homeData';

type Props = {
  homeData: IHomeBanner;
};

const Home: NextPage<Props> = props => {
  const { homeData } = props;

  return <Fragment></Fragment>;
};

// Fetch Required datas
export async function getStaticProps() {
  try {
    const homeData = await GetHomeData();
    return {
      props: {
        homeData,
      },
      revalidate: 1,
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default Home;
