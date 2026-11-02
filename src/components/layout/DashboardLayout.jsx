import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import CreateInvoiceModal from '../modals/CreateInvoiceModal';
import CreateEventModal from '../modals/CreateEventModal';
import AddTaskModal from '../modals/AddTaskModal';

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Global search & date range filters
  const [searchTerm, setSearchTerm] = useState('');

  // Modals state
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false);
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex flex-col font-sans">
      {/* Sidebar Component */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? 'lg:ml-[76px]' : 'lg:ml-64'
        }`}
      >
        {/* Header */}
        <Header
          isCollapsed={isCollapsed}
          setIsMobileOpen={setIsMobileOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onOpenCreateInvoice={() => setIsCreateInvoiceOpen(true)}
          onOpenCreateEvent={() => setIsCreateEventOpen(true)}
          onOpenCreateSchedule={() => setIsAddTaskOpen(true)}
        />

        {/* Page Content */}
        <main className="flex-1 px-6 sm:px-8 pb-10">
          <Outlet
            context={{
              searchTerm,
              openCreateInvoice: () => setIsCreateInvoiceOpen(true),
              openCreateEvent: () => setIsCreateEventOpen(true),
              openAddTask: () => setIsAddTaskOpen(true),
            }}
          />
        </main>
      </div>

      {/* Modals */}
      <CreateInvoiceModal
        isOpen={isCreateInvoiceOpen}
        onClose={() => setIsCreateInvoiceOpen(false)}
      />

      <CreateEventModal
        isOpen={isCreateEventOpen}
        onClose={() => setIsCreateEventOpen(false)}
      />

      <AddTaskModal
        isOpen={isAddTaskOpen}
        onClose={() => setIsAddTaskOpen(false)}
      />
    </div>
  );
}
