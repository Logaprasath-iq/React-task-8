import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  CheckCheck,
  Search,
  Image as ImageIcon
} from 'lucide-react';
import { chatConversations } from '../data/mockData';

export default function Messages() {
  const { searchTerm } = useOutletContext();
  const [conversations, setConversations] = useState(chatConversations);
  const [activeConvId, setActiveConvId] = useState('conv-1');
  const [inputText, setInputText] = useState('');

  const activeConv =
    conversations.find((c) => c.id === activeConvId) || conversations[0];

  const filteredConversations = conversations.filter(
    (c) =>
      c.name.toLowerCase().includes((searchTerm || '').toLowerCase()) ||
      c.lastMessage.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setConversations(
      conversations.map((c) =>
        c.id === activeConvId
          ? {
              ...c,
              lastMessage: newMsg.text,
              lastTime: newMsg.time,
              messages: [...c.messages, newMsg],
            }
          : c
      )
    );

    setInputText('');
  };

  return (
    <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-card overflow-hidden h-[calc(100vh-140px)] min-h-[580px] flex animate-in fade-in duration-300">
      {/* Left Column: Conversations List (1/3 or responsive) */}
      <div className="w-full sm:w-80 lg:w-96 border-r border-[#F1F5F9] flex flex-col flex-shrink-0">
        {/* Search & Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-base text-slate-900">
            Inbox Messages
          </h2>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
            {conversations.length} Threads
          </span>
        </div>

        {/* Conversation Items */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
          {filteredConversations.map((conv) => {
            const isActive = conv.id === activeConvId;
            return (
              <div
                key={conv.id}
                onClick={() => setActiveConvId(conv.id)}
                className={`flex items-start gap-3.5 p-4 cursor-pointer transition-colors relative ${
                  isActive ? 'bg-[#EEF2FF]/60' : 'hover:bg-slate-50'
                }`}
              >
                {/* Avatar with online badge */}
                <div className="relative flex-shrink-0">
                  <img
                    src={conv.avatar}
                    alt={conv.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
                  />
                  {conv.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {conv.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {conv.lastTime}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">
                    {conv.lastMessage}
                  </p>
                </div>

                {/* Unread Pill */}
                {conv.unread > 0 && (
                  <span className="text-[10px] font-bold w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0 self-center">
                    {conv.unread}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Active Chat Stream & Message Input */}
      <div className="hidden sm:flex flex-1 flex-col justify-between bg-slate-50/30">
        {/* Chat Header */}
        <div className="h-18 px-6 py-4 bg-white border-b border-[#F1F5F9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={activeConv.avatar}
                alt={activeConv.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
              />
              {activeConv.online && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                {activeConv.name}
              </h3>
              <p className="text-[11px] text-slate-500">
                {activeConv.online ? (
                  <span className="text-emerald-600 font-medium">● Online now</span>
                ) : (
                  'Offline'
                )}
                {' · '}{activeConv.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <button
              type="button"
              className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
              title="Voice call"
            >
              <Phone size={17} />
            </button>
            <button
              type="button"
              className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
              title="Video call"
            >
              <Video size={17} />
            </button>
            <button
              type="button"
              className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
              title="More"
            >
              <MoreVertical size={17} />
            </button>
          </div>
        </div>

        {/* Message Bubbles Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {activeConv.messages.map((msg) => {
            const isMe = msg.sender === 'me';
            return (
              <div
                key={msg.id}
                className={`flex items-end gap-2.5 ${
                  isMe ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isMe && (
                  <img
                    src={activeConv.avatar}
                    alt={activeConv.name}
                    className="w-7 h-7 rounded-full object-cover flex-shrink-0 mb-1"
                  />
                )}

                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm ${
                    isMe
                      ? 'bg-[#5046E5] text-white rounded-br-xs shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-100 rounded-bl-xs shadow-xs'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <div
                    className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${
                      isMe ? 'text-indigo-200' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.time}</span>
                    {isMe && <CheckCheck size={12} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-[#F1F5F9]">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-3 py-1.5 focus-within:border-indigo-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 transition-all"
          >
            <button
              type="button"
              className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
              title="Attach File"
            >
              <Paperclip size={18} />
            </button>

            <button
              type="button"
              className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
              title="Add Image"
            >
              <ImageIcon size={18} />
            </button>

            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-transparent border-none text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none px-2"
            />

            <button
              type="button"
              className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
              title="Emoji"
            >
              <Smile size={18} />
            </button>

            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-[#5046E5] text-white hover:bg-[#4338CA] disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-indigo-100 transition-all"
              title="Send Message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
