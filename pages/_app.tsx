import type { AppContext, AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { GetHeaderData } from '_services/site.service';
import { ContextWrapper } from 'components/contextWrapper/ContextWrapper';
import { AppLayout } from 'components/layouts/AppLayout';
import { IHeader } from 'types/IHeader';

//Styles
import 'assets/sass/style.scss';
import 'assets/sass/tailwind.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface MainAppProps extends AppProps {
  globalData: IHeader;
}

function MyApp({ Component, pageProps, globalData }: MainAppProps) {
  const { events: routerEvents } = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const startLoader = () => {
      setPageLoading(true);
    };

    const stopLoader = () => {
      setPageLoading(false);
    };

    routerEvents.on('routeChangeStart', startLoader);
    routerEvents.on('routeChangeComplete', stopLoader);
    routerEvents.on('routeChangeError', stopLoader);
  }, [routerEvents]);

  return (
    <>
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            httpEquiv: 'content-type',
            content: 'text/html; charset=utf-8',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1',
          },
        ]}
      />
      <ContextWrapper headerData={globalData}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        {pageLoading ? <div className="loader"></div> : ''}
      </ContextWrapper>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx: context }: AppContext) => {
  let pageProps = {};

  try {
    const globalData = await GetHeaderData();
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(context);
    }
    return {
      globalData,
      pageProps,
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default MyApp;
