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
  const [startDate, setStartDate] = useState('2021-06-10');
  const [endDate, setEndDate] = useState('2021-10-10');

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

      {/* Main Wrapper: adjusts left margin based on collapsed sidebar */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? 'lg:ml-20' : 'lg:ml-64'
        }`}
      >
        {/* Header */}
        <Header
          isCollapsed={isCollapsed}
          setIsMobileOpen={setIsMobileOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onOpenCreateInvoice={() => setIsCreateInvoiceOpen(true)}
          onOpenCreateEvent={() => setIsCreateEventOpen(true)}
          onOpenAddTask={() => setIsAddTaskOpen(true)}
        />

        {/* Content Outlet */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-10">
          <Outlet
            context={{
              searchTerm,
              startDate,
              endDate,
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
