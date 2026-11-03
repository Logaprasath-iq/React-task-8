import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Camera,
  Calendar,
  MapPin,
  Plus,
  Trash2,
  Printer,
  Share2,
  Mail,
  Phone,
  ArrowLeft,
  Check
} from 'lucide-react';

export default function CreateInvoice() {
  const navigate = useNavigate();

  // Invoice form states matching Figma media_1793680859139_6af9bf9f.png
  const [invoiceId, setInvoiceId] = useState('#876370');
  const [date, setDate] = useState('01/12/2021');
  const [clientName, setClientName] = useState('Alison G.');
  const [email, setEmail] = useState('Example@gmail.com');
  const [address, setAddress] = useState('Street');

  // Product description line items
  const [products, setProducts] = useState([
    { id: 1, name: 'ipod 2021', rate: 1000, qty: 10, amount: 10000 },
    { id: 2, name: 'Apple Mackbook', rate: 1500, qty: 10, amount: 150000 },
    { id: 3, name: 'i phone 12', rate: 885, qty: 10, amount: 8850 },
  ]);

  // Handle delete item
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Add dummy new product line
  const handleAddProduct = () => {
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([
      ...products,
      { id: newId, name: 'New Design Asset', rate: 500, qty: 1, amount: 500 }
    ]);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Two-Column Grid matching Figma Screenshot 2 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        {/* LEFT COLUMN: Create New Invoice Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card space-y-6">
          <h2 className="text-xl font-bold text-[#111827]">
            Create New Invoice
          </h2>

          {/* Centered Circular Camera Photo/Logo Upload Button */}
          <div className="flex justify-center py-2">
            <div className="w-24 h-24 rounded-full bg-[#F4F5F7] flex items-center justify-center text-slate-700 cursor-pointer hover:bg-slate-200/80 transition-all shadow-inner group">
              <Camera size={26} className="text-slate-700 group-hover:scale-110 transition-transform stroke-[1.8]" />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Invoice created successfully!');
            }}
            className="space-y-4"
          >
            {/* Row 1: Invoice Id & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Invoice Id
                </label>
                <input
                  type="text"
                  value={invoiceId}
                  onChange={(e) => setInvoiceId(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none transition-all font-medium"
                  />
                  <Calendar
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5046E5] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Field 2: Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none transition-all font-medium"
              />
            </div>

            {/* Row 3: Email & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 bg-[#F8F9FB] border border-transparent focus:border-[#5046E5] focus:bg-white text-xs sm:text-sm text-slate-800 rounded-xl outline-none transition-all font-medium"
                  />
                  <MapPin
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5046E5] pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Section: Product Description Header + '+' Button */}
            <div className="pt-2">
              <div className="flex items-center justify-between pb-3">
                <h3 className="font-bold text-sm text-[#111827]">
                  Product Description
                </h3>
                <button
                  type="button"
                  onClick={handleAddProduct}
                  className="w-7 h-7 rounded-lg bg-[#5046E5] hover:bg-[#4338CA] text-white flex items-center justify-center transition-colors shadow-sm"
                  title="Add Line Item"
                >
                  <Plus size={16} strokeWidth={2.5} />
                </button>
              </div>

              {/* Product Lines Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="text-slate-400 font-semibold border-b border-gray-100">
                      <th className="pb-3 text-[#64748B]">
                        Product Name <span className="text-slate-400 font-normal">▾</span>
                      </th>
                      <th className="pb-3 text-[#64748B]">
                        Rate <span className="text-slate-400 font-normal">▾</span>
                      </th>
                      <th className="pb-3 text-[#64748B]">
                        QTY <span className="text-slate-400 font-normal">▾</span>
                      </th>
                      <th className="pb-3 text-[#64748B]">
                        Amount <span className="text-slate-400 font-normal">▾</span>
                      </th>
                      <th className="pb-3 text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 font-medium">
                    {products.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 text-[#3B82F6] font-semibold cursor-pointer hover:underline">
                          {item.name}
                        </td>
                        <td className="py-3 text-slate-700">
                          ${item.rate}
                        </td>
                        <td className="py-3 text-slate-700">
                          {item.qty} Pcs
                        </td>
                        <td className="py-3 font-bold text-[#10B981]">
                          ${item.amount.toLocaleString()}
                        </td>
                        <td className="py-3 text-right">
                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(item.id)}
                            className="text-rose-400 hover:text-rose-600 p-1 rounded-lg transition-colors"
                          >
                            <Trash2 size={15} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Actions: Send Invoice & Create Invoice */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => alert(`Invoice draft ${invoiceId} sent to ${email}!`)}
                className="w-full sm:flex-1 py-3 px-6 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-bold rounded-2xl transition-all text-center shadow-2xs"
              >
                Send Invoice
              </button>
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-6 bg-[#5046E5] hover:bg-[#4338CA] text-white text-xs sm:text-sm font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all text-center active:scale-[0.98]"
              >
                Create Invoice
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Live Authentic Preview Document */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F1F5F9] shadow-card space-y-6">
          {/* Header: Title + Share/Print Icons */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h2 className="text-xl font-bold text-[#111827]">
              Preview
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => alert('Invoice link copied to clipboard!')}
                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                title="Share"
              >
                <Share2 size={16} />
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                title="Print Invoice"
              >
                <Printer size={16} />
              </button>
            </div>
          </div>

          {/* Rendered Invoice Paper Container matching Figma Screenshot 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm text-xs space-y-6 print:border-none print:shadow-none">
            {/* Top Row: Stylized Blue "J" Logo & Contact Info */}
            <div className="flex items-start justify-between">
              {/* Blue Stylized Logo */}
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6] text-white font-black text-2xl flex items-center justify-center shadow-sm">
                J
              </div>

              <div className="text-right text-[11px] text-slate-500 space-y-0.5">
                <p className="flex items-center justify-end gap-1.5">
                  <Mail size={12} className="text-[#3B82F6]" />
                  <span>your.mail@gmail.com</span>
                </p>
                <p className="flex items-center justify-end gap-1.5">
                  <Phone size={12} className="text-[#3B82F6]" />
                  <span>+186 989 271 3115</span>
                </p>
              </div>
            </div>

            {/* Recipient & Invoice ID Row */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  RECIPIENT
                </p>
                <h4 className="font-bold text-slate-800 text-sm mt-1">
                  JOHN SMITH
                </h4>
                <div className="text-slate-500 text-[11px] space-y-0.5 mt-1 leading-relaxed">
                  <p>4304 Liberty Avenue</p>
                  <p>92668 Tustin, CA</p>
                  <p>VAT No.: 12345678</p>
                  <p className="flex items-center gap-1.5 pt-1">
                    <Mail size={11} className="text-[#3B82F6]" />
                    <span>company.mail@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone size={11} className="text-[#3B82F6]" />
                    <span>+385 714 505 8385</span>
                  </p>
                </div>
              </div>

              <div className="text-right">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Invoice
                </h3>
                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      INVOICE NO.
                    </p>
                    <p className="text-xs font-semibold text-slate-700">001/2021</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      INVOICE DATE
                    </p>
                    <p className="text-xs font-semibold text-slate-700">January 1, 2021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="pt-2">
              <table className="w-full text-left text-[11px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-slate-400 uppercase font-semibold text-[10px]">
                    <th className="pb-2">TASK DESCRIPTION</th>
                    <th className="pb-2 text-center">HOURS</th>
                    <th className="pb-2 text-right">RATE</th>
                    <th className="pb-2 text-right">AMOUNT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-slate-700">
                  <tr>
                    <td className="py-2.5 font-medium">Website redesign</td>
                    <td className="py-2.5 text-center text-slate-500">60</td>
                    <td className="py-2.5 text-right text-slate-500">15 USD</td>
                    <td className="py-2.5 text-right font-medium">900,00 USD</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium">Newsletter template design</td>
                    <td className="py-2.5 text-center text-slate-500">20</td>
                    <td className="py-2.5 text-right text-slate-500">12 USD</td>
                    <td className="py-2.5 text-right font-medium">240,00 USD</td>
                  </tr>
                </tbody>
              </table>

              {/* Subtotal, Discount & Total */}
              <div className="pt-4 border-t border-gray-100 space-y-1.5 text-right text-[11px]">
                <div className="flex justify-end gap-12 text-slate-500">
                  <span>SUBTOTAL</span>
                  <span className="font-medium text-slate-700">1140,00 USD</span>
                </div>
                <div className="flex justify-end gap-12 text-slate-500">
                  <span>DISCOUNT 5%</span>
                  <span className="font-medium text-slate-700">57,00 USD</span>
                </div>
                <div className="flex justify-end gap-12 pt-2 border-t border-gray-100 text-xs">
                  <span className="font-bold text-slate-800">TOTAL</span>
                  <span className="font-extrabold text-[#3B82F6]">1083,00 USD</span>
                </div>
              </div>
            </div>

            {/* Bank Transfer Instructions */}
            <div className="bg-[#F8FAFC] p-3 rounded-xl text-[10px] text-slate-600 space-y-1">
              <p>Transfer the amount to the business account below. Please include invoice number on your check.</p>
              <p className="font-semibold text-slate-800">
                BANK: <span className="text-[#5046E5]">F1Seb533</span> &nbsp;|&nbsp; IBAN: <span className="text-[#5046E5]">GB82-1111-2222-3333</span>
              </p>
            </div>

            {/* Notes & Signature */}
            <div className="pt-2 text-[10px] text-slate-500 space-y-2">
              <p className="font-bold text-slate-700 uppercase tracking-wider">NOTES</p>
              <p className="leading-relaxed">
                All amounts are in dollars. Please make the payment within 15 days from the issue of date of this invoice. Tax is not charged on the basis of paragraph 1 of Article 94 of the Value Added Tax Act (I am not liable for VAT).
              </p>
              <p>Thank you for your confidence in my work.</p>
              <div className="pt-2">
                <p className="font-serif italic text-sm text-slate-700">Alison G.</p>
                <div className="w-28 border-b border-slate-300 mt-1"></div>
                <p className="text-[9px] text-slate-400 mt-0.5">Signature</p>
              </div>
            </div>

            {/* Footer Information */}
            <div className="pt-4 border-t border-gray-100 text-[9px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>1231 Hard Ridge Road, 40486 Sydney, MI</p>
              <p>Business register under no. 8760025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
