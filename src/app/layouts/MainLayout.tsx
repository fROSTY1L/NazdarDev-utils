import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/shared/ui/sidebar'
import AppSidebar from '@/widgets/sidebar'

import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <main className="p-6">
          <Outlet /> 
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}