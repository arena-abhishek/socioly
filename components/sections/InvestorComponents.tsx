import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, FileText, Music, Video, ExternalLink, Mail, Phone, Globe, MapPin, User } from 'lucide-react';
import { InvestorCategory, ReportItem as IReportItem, TableData, ContactInfo, SubCategory } from '../../types/investor';

// --- Hero Component ---
export const Hero: React.FC<{ title: string; subtitle: string; backgroundImage?: string }> = ({ title, subtitle, backgroundImage }) => (
  <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
    {backgroundImage && (
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    )}
    <div className="relative z-10 text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-slate-300 max-w-2xl mx-auto font-light"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

// --- Report Item Component ---
export const ReportLink: React.FC<{ item: IReportItem }> = ({ item }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'audio': return <Music className="w-4 h-4 text-emerald-500" />;
      case 'video': return <Video className="w-4 h-4 text-purple-500" />;
      default: return <FileText className="w-4 h-4 text-red-500" />;
    }
  };

  if (item.type === 'audio') {
    return (
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <Music className="w-5 h-5 text-emerald-500" />
          <span className="font-medium text-slate-900">{item.title}</span>
        </div>
        <audio controls className="w-full h-10" controlsList="nodownload">
          <source src={item.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }

  if (item.type === 'video') {
    return (
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <Video className="w-5 h-5 text-purple-500" />
          <span className="font-medium text-slate-900">{item.title}</span>
        </div>
        <video controls className="w-full rounded-lg bg-black aspect-video" controlsList="nodownload">
          <source src={item.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <motion.div 
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100"
    >
      {getIcon()}
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-700 group-hover:text-slate-900 font-medium flex-1 text-sm md:text-base"
      >
        {item.title}
      </a>
      <ExternalLink className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

// --- Table Component ---
export const DataTable: React.FC<{ data: TableData }> = ({ data }) => (
  <div className="mb-8 last:mb-0">
    <h3 className="text-lg font-semibold text-slate-800 mb-4 px-2 border-l-4 border-slate-900 ml-2">
      {data.title}
    </h3>
    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50">
          <tr>
            {data.headers.map((header) => (
              <th key={header} className="px-6 py-4 text-sm font-semibold text-slate-600 uppercase tracking-wider border-b border-slate-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              {data.headers.map((header) => (
                <td key={header} className="px-6 py-4 text-sm text-slate-700">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Contact Card Component ---
export const ContactCard: React.FC<{ contact: ContactInfo }> = ({ contact }) => (
  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
      <div className="w-2 h-6 bg-slate-900 rounded-full" />
      {contact.title}
    </h3>
    <div className="space-y-3">
      {contact.name && (
        <div className="flex gap-3">
          <User className="w-5 h-5 text-slate-400 shrink-0" />
          <p className="text-slate-700 font-medium">{contact.name}</p>
        </div>
      )}
      {contact.address && (
        <div className="flex gap-3">
          <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
          <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{contact.address}</p>
        </div>
      )}
      {contact.telephone && (
        <div className="flex gap-3">
          <Phone className="w-5 h-5 text-slate-400 shrink-0" />
          <a href={`tel:${contact.telephone}`} className="text-slate-600 text-sm hover:text-slate-900">{contact.telephone}</a>
        </div>
      )}
      {contact.email && (
        <div className="flex gap-3">
          <Mail className="w-5 h-5 text-slate-400 shrink-0" />
          <a href={`mailto:${contact.email}`} className="text-slate-600 text-sm hover:text-slate-900">{contact.email}</a>
        </div>
      )}
      {contact.website && (
        <div className="flex gap-3">
          <Globe className="w-5 h-5 text-slate-400 shrink-0" />
          <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 text-sm hover:text-slate-900">{contact.website}</a>
        </div>
      )}
      {(contact.sebiRegistration || contact.cin) && (
        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
          {contact.sebiRegistration && (
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">SEBI Reg No.</p>
              <p className="text-xs text-slate-600">{contact.sebiRegistration}</p>
            </div>
          )}
          {contact.cin && (
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">CIN</p>
              <p className="text-xs text-slate-600">{contact.cin}</p>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);

// --- Accordion Category Component ---
export const AccordionCategory: React.FC<{ category: InvestorCategory | SubCategory; isSub?: boolean }> = ({ category, isSub = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 last:mb-0 ${isSub ? 'ml-6 border-l border-slate-200 pl-4' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all text-left
          ${isSub 
            ? 'hover:bg-slate-50 text-slate-700' 
            : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300 text-slate-900'
          }`}
      >
        <h2 className={`${isSub ? 'text-lg font-medium' : 'text-xl font-bold'} flex-1`}>
          {category.title}
        </h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className={`w-5 h-5 ${isSub ? 'text-slate-400' : 'text-slate-600'}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`py-4 space-y-2 ${isSub ? '' : 'px-2'}`}>
              {category.reports && category.reports.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.reports.map((report, idx) => (
                    <div key={idx} className={report.type !== 'pdf' ? 'md:col-span-2' : ''}>
                      <ReportLink item={report} />
                    </div>
                  ))}
                </div>
              )}
              
              {'tables' in category && category.tables && category.tables.length > 0 && (
                <div className="space-y-6 mt-4">
                  {category.tables.map((table, idx) => (
                    <DataTable key={idx} data={table} />
                  ))}
                </div>
              )}

              {'contacts' in category && category.contacts && category.contacts.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                  {category.contacts.map((contact, idx) => (
                    <ContactCard key={idx} contact={contact} />
                  ))}
                </div>
              )}

              {category.subCategories && category.subCategories.length > 0 && (
                <div className="mt-4">
                  {category.subCategories.map((sub) => (
                    <AccordionCategory key={sub.id} category={sub} isSub />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
