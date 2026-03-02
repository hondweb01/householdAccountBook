"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Dashboard } from "@/components/Dashboard";
import { TransactionHistory } from "@/components/TransactionHistory";
import { TransactionForm } from "@/components/TransactionForm";
import { Settings, LogOut, LayoutDashboard, History, PieChart as PieIcon, Plus } from "lucide-react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <nav className="lg:col-span-2 hidden lg:block">
          <Card className="h-full py-8 px-4 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="px-4">
                <h1 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  KAKEIBO
                </h1>
              </div>
              <ul className="space-y-2">
                <li>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 bg-primary/10 text-primary rounded-2xl transition-all">
                    <LayoutDashboard size={20} />
                    <span className="font-semibold">ダッシュボード</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-2xl transition-all opacity-70 hover:opacity-100">
                    <History size={20} />
                    <span className="font-semibold">履歴</span>
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-2xl transition-all opacity-70 hover:opacity-100">
                    <PieIcon size={20} />
                    <span className="font-semibold">予算管理</span>
                  </button>
                </li>
              </ul>
            </div>

            <ul className="space-y-2">
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 rounded-2xl transition-all opacity-70 hover:opacity-100">
                  <Settings size={20} />
                  <span className="font-semibold">設定</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center space-x-3 px-4 py-3 hover:text-danger rounded-2xl transition-all opacity-70 hover:opacity-100">
                  <LogOut size={20} />
                  <span className="font-semibold">ログアウト</span>
                </button>
              </li>
            </ul>
          </Card>
        </nav>

        {/* Content Area */}
        <div className="lg:col-span-10 space-y-8">
          <header className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">こんにちは、ゲストさん 👋</h2>
              <p className="opacity-70">本日の収支状況をチェックしましょう。</p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-primary text-white p-4 rounded-3xl shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <Plus size={24} />
            </button>
          </header>

          <Dashboard />

          <div className="grid grid-cols-1 gap-8">
            <TransactionHistory />
          </div>
        </div>
      </div>

      {isFormOpen && (
        <TransactionForm onClose={() => setIsFormOpen(false)} />
      )}
    </main>
  );
}
