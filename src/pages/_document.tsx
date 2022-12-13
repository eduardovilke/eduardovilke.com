import { GA_TRACKING_ID } from '@lib/gtag'
import {Html, Head, Main, NextScript} from 'next/document'

export default function MyDocument() {

  return(
    <Html lang='pt-BR'>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2968035,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        <script 
          async 
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </Head>
      <body className='bg-white-100 ease-in duration-200 dark:bg-gray-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}