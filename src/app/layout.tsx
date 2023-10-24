import type { FC, ReactNode } from 'react';
import { cookies } from 'next/headers';

import { Layout as RootLayout } from 'src/layouts/root';
import type { Settings } from 'src/types/settings';

const Favicon: FC = () => (
  <>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <link
      rel="icon"
      href="/favicon.ico"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
  </>
);

const Fonts: FC = () => (
  <>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap"
    />
  </>
);

const Vendors: FC = () => (
  <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </>
);

const SETTINGS_STORAGE_KEY = 'app.settings';

const restoreSettings = (): Settings | undefined => {
  const cookieList = cookies();

  let value: Settings | undefined;

  if (cookieList.has(SETTINGS_STORAGE_KEY)) {
    try {
      const restored = cookieList.get(SETTINGS_STORAGE_KEY);

      if (restored) {
        value = JSON.parse(restored!.value);
      }
    } catch (err) {
      console.error(err);
      // If stored data is not a strigified JSON this will fail,
      // that's why we catch the error
    }
  }

  return value;
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  const settings = restoreSettings();

  return (
    <html>
      <head>
        <title>
          Devias Kit PRO
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <Favicon />
        <Fonts />
        <Vendors />
      </head>
      <body>
      <RootLayout settings={settings}>
          {children}
      </RootLayout>
      </body>
    </html>
  );
};

export default Layout;
