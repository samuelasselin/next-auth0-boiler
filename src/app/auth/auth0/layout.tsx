'use client';

import { ReactNode } from 'react';

import { IssuerGuard } from 'src/guards/issuer-guard';
import { Issuer } from 'src/utils/auth';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <IssuerGuard issuer={Issuer.Auth0}>
        {children}
    </IssuerGuard>
  );
};

export default Layout;
