import * as React from 'react';
import { AppProvider } from '@toolpad/core/nextjs';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import InfoIcon from '@mui/icons-material/Info';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import type { Navigation } from '@toolpad/core/AppProvider';
import { Suspense } from 'react';
import Loading from '@/app/(dashboard)/loading';
import theme from '../theme';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const NAVIGATION: Navigation = [
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'about',// <--- hyperlink
    title: 'About',
    icon: <InfoIcon />,
  },
  {
    segment: 'holidays',
    title: 'Holidays',
    icon: <EventOutlinedIcon />,
  },
  {
    segment: 'guidelines',
    title: 'Guidelines',
    icon: <FormatListBulletedOutlinedIcon />,
  },
];

const BRANDING = {
  title: 'UPRM Calendar Generation Tool',
  logo: <PetsOutlinedIcon sx={{ marginTop:.8, marginRight:.2, color: '#008000'}}/>,

};

export default function RootLayout(props: { children: React.ReactNode }) {

  return (
    <html lang="en" data-toolpad-color-scheme="light" suppressHydrationWarning>
      <body>
      <Suspense fallback={<Loading/>}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <AppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              theme={theme}
            >
              {props.children}
              <SpeedInsights />
              <Analytics />

            </AppProvider>
          </AppRouterCacheProvider>
      </Suspense>
        
      </body>
    </html>
  );
}
