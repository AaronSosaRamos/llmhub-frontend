"use client";

import Layout from '@/components/Layout';
import ModelDeploymentScreen from '@/components/model-deployment/ModelDeploymentSection';

export default function Home() {
  return (
    <Layout>
      <ModelDeploymentScreen />
    </Layout>
  );
}
