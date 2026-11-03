import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  MoreHorizontal,
  Plus,
  Search
} from 'lucide-react';

export default function Messages() {
  const { searchTerm } = useOutletContext();
  const [chatTab, setChatTab] = useState('Personal'); // 'All' | 'Personal' | 'Teams'
  const [activeContactId, setActiveContactId] = useState('c-3'); // Default to John Carlio matching Figma
  const [localSearch, setLocalSearch] = useState('');
  const [inputText, setInputText] = useState('');

  // 7 Contacts matching Figma media_... "Chat" frame
  const [contacts, setContacts] = useState([
    {
      id: 'c-1',
      name: 'Shelby Goode',
      snippet: 'Lorem Ipsum is simply dummy text of the printing',
      time: '1 min ago',
      online: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      messages: [
        { id: 1, sender: 'them', text: 'Hey Easin! Reviewing the dashboard sprint.', time: '09:00 PM' }
      ]
    },
    {
      id: 'c-2',
      name: 'Robert Bacins',
      snippet: 'Lorem Ipsum is simply dummy text of the printing',
      time: '9 min ago',
      online: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      messages: [
        { id: 1, sender: 'them', text: 'Everything looks great on the analytics chart.', time: '08:50 PM' }
      ]
    },
    {
      id: 'c-3',
      name: 'John Carlio',
      snippet: 'Lorem Ipsum is simply dummy text of the printing',
      time: '15 min ago',
      online: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      messages: [
        {
          id: 1,
          sender: 'them',
          text: 'Lorem Ipsum is simply',
          time: null
        },
        {
          id: 2,
          sender: 'them',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          time: '09:02 PM'
        },
        {
          id: 3,
          sender: 'them',
          isMedia: true,
          mediaImages: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=260&fit=crop',
            'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=260&fit=crop'
          ],
          time: null
        },
        {
          id: 4,
          sender: 'them',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          time: '09:04 PM'
        }
      ]
    },
    {
      id: 'c-4',
      name: 'Adriene Watson',
      snippet: 'Lorem Ipsum is simply dummy text of the printing',
      time: '21 min ago',
      online: true,
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face',
      messages: [
        { id: 1, sender: 'them', text: 'Can you export the monthly invoice report?', time: '08:30 PM' }
      ]
    },
    {
      id: 'c-5',
      name: 'Jhon Deo',
      snippet: 'Lorem Ipsum is simply dummy text of the printing',
      time: '29 min ago',
      online: true,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      messages: [
        { id: 1, sender: 'them', text: 'Meeting is scheduled for 10am tomorrow.', time: '08:15 PM' }
      ]
    },
    {
      id: 'c-6',
      name: 'Mark Ruffalo',
      snippet: 'Lorem Ipsum is simply dummy text of the printing',
      time: '45 min ago',
      online: true,
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
      messages: [
        { id: 1, sender: 'them', text: 'Files pushed to the main repository branch.', time: '08:00 PM' }
      ]
    },
    {
      id: 'c-7',
      name: 'Bethany Jackson',
      snippet: 'Lorem Ipsum is simply dummy text of the printing',
      time: '1h ago',
      online: true,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
      messages: [
        { id: 1, sender: 'them', text: 'Great work on the UI fidelity overhaul!', time: '07:45 PM' }
      ]
    }
  ]);

  const activeContact =
    contacts.find((c) => c.id === activeContactId) || contacts[2];

  const filteredContacts = contacts.filter((c) => {
    const q = (localSearch || searchTerm || '').toLowerCase();
    return c.name.toLowerCase().includes(q) || c.snippet.toLowerCase().includes(q);
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setContacts(
      contacts.map((c) =>
        c.id === activeContactId
          ? {
              ...c,
              snippet: newMsg.text,
              time: 'Just now',
              messages: [...c.messages, newMsg],
            }
          : c
      )
    );

    setInputText('');
  };

  return (
    <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden h-[calc(100vh-140px)] min-h-[620px] flex animate-in fade-in duration-300">
      {/* LEFT SUB-PANEL: Messages List matching Figma Frame "Chat" */}
      <div className="w-full sm:w-80 lg:w-96 border-r border-[#F1F5F9] flex flex-col flex-shrink-0 bg-white">
        {/* Header: Title "Message" & Plus Icon */}
        <div className="p-5 pb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-[#111827]">
            Message
          </h2>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#5046E5] hover:bg-[#4338CA] text-white flex items-center justify-center shadow-sm shadow-indigo-100 transition-all active:scale-95"
            title="New Message"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 pb-3">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#F8F9FA] border border-transparent focus:border-[#5046E5] focus:bg-white rounded-xl text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-all"
            />
          </div>
        </div>

        {/* Three Tabs: All | Personal (active with underline) | Teams */}
        <div className="flex items-center justify-around border-b border-gray-100 px-5 text-xs font-semibold text-slate-500">
          <button
            type="button"
            onClick={() => setChatTab('All')}
            className={`pb-2.5 transition-colors ${
              chatTab === 'All'
                ? 'text-[#5046E5] border-b-2 border-[#5046E5] font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setChatTab('Personal')}
            className={`pb-2.5 transition-colors ${
              chatTab === 'Personal'
                ? 'text-[#5046E5] border-b-2 border-[#5046E5] font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Personal
          </button>
          <button
            type="button"
            onClick={() => setChatTab('Teams')}
            className={`pb-2.5 transition-colors ${
              chatTab === 'Teams'
                ? 'text-[#5046E5] border-b-2 border-[#5046E5] font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Teams
          </button>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-50/60 p-2 space-y-1">
          {filteredContacts.map((contact) => {
            const isActive = contact.id === activeContactId;
            return (
              <div
                key={contact.id}
                onClick={() => setActiveContactId(contact.id)}
                className={`flex items-start gap-3 p-3 rounded-2xl cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#F8FAFC] shadow-2xs border border-slate-100'
                    : 'hover:bg-slate-50 border border-transparent'
                }`}
              >
                {/* Avatar with Green Active Dot */}
                <div className="relative flex-shrink-0 mt-0.5">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-100"
                  />
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
                  )}
                </div>

                {/* Name, Snippet, and Time */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {contact.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-2">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate leading-relaxed">
                    {contact.snippet}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT CONVERSATION PANEL matching Figma Frame "Chat" */}
      <div className="hidden sm:flex flex-1 flex-col justify-between bg-white">
        {/* Chat Header: John Carlio Online + Call & More Icons */}
        <div className="h-18 px-8 py-4 border-b border-[#F1F5F9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={activeContact.avatar}
                alt={activeContact.name}
                className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-100"
              />
              {activeContact.online && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                {activeContact.name}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Online
              </p>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 text-slate-400">
            <button
              type="button"
              className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              title="Call"
            >
              <Phone size={16} />
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              title="Video"
            >
              <Video size={16} />
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
              title="Options"
            >
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Message Thread Stream matching Figma screenshot */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-4">
          {activeContact.messages.map((msg, mIdx) => {
            const isMe = msg.sender === 'me';

            if (msg.isMedia) {
              return (
                <div key={msg.id} className="flex items-center gap-3 pt-1 pb-1">
                  {/* Two Mockup Cards side by side */}
                  <div className="grid grid-cols-2 gap-3 max-w-lg">
                    {msg.mediaImages.map((imgUrl, iIdx) => (
                      <div
                        key={iIdx}
                        className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <img
                          src={imgUrl}
                          alt="Dashboard preview mockup"
                          className="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <button type="button" className="text-slate-300 hover:text-slate-600 self-center p-1">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              );
            }

            return (
              <div
                key={msg.id}
                className={`flex items-end gap-2.5 ${
                  isMe ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Incoming Message Avatar (beside 3rd text bubble or on left) */}
                {!isMe && (mIdx === 0 || mIdx === activeContact.messages.length - 1) && (
                  <img
                    src={activeContact.avatar}
                    alt={activeContact.name}
                    className="w-7 h-7 rounded-full object-cover flex-shrink-0 mb-1"
                  />
                )}
                {!isMe && (mIdx !== 0 && mIdx !== activeContact.messages.length - 1) && (
                  <div className="w-7" />
                )}

                {/* Message Bubble */}
                <div className="flex items-center gap-2 max-w-[80%] sm:max-w-[70%]">
                  <div
                    className={`rounded-2xl px-5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      isMe
                        ? 'bg-[#5046E5] text-white rounded-br-xs shadow-sm'
                        : 'bg-[#4E88FF] text-white rounded-tl-xs shadow-sm'
                    }`}
                  >
                    <p>{msg.text}</p>
                    {msg.time && (
                      <div
                        className={`text-[10px] text-right mt-1 font-medium ${
                          isMe ? 'text-indigo-200' : 'text-blue-100'
                        }`}
                      >
                        {msg.time}
                      </div>
                    )}
                  </div>

                  {/* Three dots menu next to incoming message */}
                  {!isMe && (
                    <button
                      type="button"
                      className="text-slate-300 hover:text-slate-600 p-0.5"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message Input Bar matching Figma */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#F1F5F9]">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-3 bg-[#F8F9FA] rounded-2xl px-4 py-2.5 transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5046E5]/20 focus-within:border-[#5046E5] border border-transparent"
          >
            {/* Paperclip Attachment */}
            <button
              type="button"
              className="text-gray-400 hover:text-slate-600 transition-colors p-1"
              title="Attach File"
            >
              <Paperclip size={18} />
            </button>

            {/* Input field */}
            <input
              type="text"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-transparent border-none text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />

            {/* Emoji Smile */}
            <button
              type="button"
              className="text-gray-400 hover:text-slate-600 transition-colors p-1"
              title="Insert Emoji"
            >
              <Smile size={18} />
            </button>

            {/* Solid Purple Send Arrow Icon */}
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="text-[#5046E5] hover:text-[#4338CA] disabled:opacity-40 disabled:cursor-not-allowed p-1 transition-all"
              title="Send Message"
            >
              <Send size={18} className="fill-[#5046E5]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
