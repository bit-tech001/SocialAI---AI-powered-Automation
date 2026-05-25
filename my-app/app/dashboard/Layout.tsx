import React from 'react';

export const metadata = {
  title: 'SocialAI Workspace - Dashboard',
  description: 'Manage your autonomous AI content distribution agent nodes.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full select-none antialiased">
      {children}
    </section>
  );
}