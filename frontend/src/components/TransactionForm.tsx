"use client";

import { useState } from "react";
import { Card } from "./Card";
import { X, Plus, Calendar, Tag, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionFormProps {
    onClose: () => void;
}

export const TransactionForm = ({ onClose }: TransactionFormProps) => {
    const [type, setType] = useState<'EXPENSE' | 'INCOME'>('EXPENSE');

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-lg space-y-8 animate-in fade-in zoom-in duration-300">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">取引の入力</h3>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-all">
                        <X size={24} />
                    </button>
                </div>

                {/* Type Toggle */}
                <div className="flex p-1 bg-white/5 rounded-3xl border border-white/10">
                    <button
                        type="button"
                        onClick={() => setType('EXPENSE')}
                        className={cn(
                            "flex-1 py-3 px-4 rounded-2xl font-bold transition-all",
                            type === 'EXPENSE' ? "bg-danger text-white shadow-lg" : "opacity-50 hover:opacity-100"
                        )}
                    >
                        支出
                    </button>
                    <button
                        type="button"
                        onClick={() => setType('INCOME')}
                        className={cn(
                            "flex-1 py-3 px-4 rounded-2xl font-bold transition-all",
                            type === 'INCOME' ? "bg-primary text-white shadow-lg" : "opacity-50 hover:opacity-100"
                        )}
                    >
                        収入
                    </button>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium opacity-60 ml-2 text-foreground">金額</label>
                        <div className="relative">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold opacity-30">¥</span>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 pl-14 pr-6 text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium opacity-60 ml-2 flex items-center gap-2">
                                <Tag size={16} /> カテゴリ
                            </label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer">
                                <option>食費</option>
                                <option>住居費</option>
                                <option>交通費</option>
                                <option>娯楽</option>
                                <option>給与</option>
                                <option>その他</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium opacity-60 ml-2 flex items-center gap-2">
                                <Calendar size={16} /> 日付
                            </label>
                            <input
                                type="date"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                defaultValue={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium opacity-60 ml-2 flex items-center gap-2">
                            <CreditCard size={16} /> メモ
                        </label>
                        <input
                            type="text"
                            placeholder="内容を入力してください"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-5 rounded-3xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4"
                    >
                        登録する
                    </button>
                </form>
            </Card>
        </div>
    );
};
