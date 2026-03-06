"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { investorData } from "@/lib/constants/investor";
import { Hero, AccordionCategory } from "./InvestorComponents";
import { motion } from "motion/react";

export const Investor: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories = useMemo(() => {
    let result = investorData.categories;

    if (selectedCategory !== "all") {
      result = result.filter((cat) => cat.id === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      // Simple filtering: if category title or any report title matches
      result = result.filter((cat) => {
        const catMatch = cat.title.toLowerCase().includes(query);
        const reportMatch = cat.reports?.some((r) =>
          r.title.toLowerCase().includes(query),
        );
        const subCatMatch = cat.subCategories?.some((s) =>
          s.title.toLowerCase().includes(query),
        );
        return catMatch || reportMatch || subCatMatch;
      });
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
   

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Search and Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search reports, documents, or personnel..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-slate-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Filter className="w-5 h-5 text-slate-400 shrink-0" />
            <select
              className="w-full md:w-64 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all text-slate-700 bg-white cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {investorData.categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories List */}
        <div className="space-y-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <AccordionCategory category={category} />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
              <p className="text-slate-500 text-lg">
                No reports found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 text-slate-900 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

    
      </main>
    </div>
  );
};
