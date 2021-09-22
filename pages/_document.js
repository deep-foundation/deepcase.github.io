import Document, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '../imports/provider';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-3WH4B0WR4L"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3WH4B0WR4L');
                `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
