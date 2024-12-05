"use client";

import * as React from 'react';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Suspense } from 'react';
import Loading from './loading';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <PageContainer>
      <Suspense fallback={<Loading/>}>
        {props.children}
      </Suspense>

        </PageContainer>
    </DashboardLayout>
  );
}  
