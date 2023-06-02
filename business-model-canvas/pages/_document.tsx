import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-GQ1WVD16MQ"
            strategy="afterInteractive"
          />
          <Script
            id='google analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-GQ1WVD16MQ');
              `,
            }}
          />
        </body>
      </Html>
  )
}
