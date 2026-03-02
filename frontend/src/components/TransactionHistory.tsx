"use client";

import { Card } from "./Card";
import { Search, Filter, MoreVertical, ShoppingCart, Home, Car, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
    { id: 1, title: 'スーパー ライフ', category: '食費', amount: -4500, date: '2024-01-07', icon: Utensils, color: 'text-primary bg-primary/10' },
    { id: 2, title: 'マンション家賃', category: '住居費', amount: -85000, date: '2024-01-05', icon: Home, color: 'text-accent bg-accent/10' },
    { id: 3, title: 'ENEOS 給油', category: '交通費', amount: -6000, date: '2024-01-04', icon: Car, color: 'text-secondary bg-secondary/10' },
    { id: 4, title: '1月分 給与', category: '収入', amount: 250000, date: '2024-01-25', icon: ShoppingCart, color: 'text-primary bg-primary/10' },
];

export const TransactionHistory = () => {
    return (
        <Card className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">最近の履歴</h3>
                <div className="flex space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-xl transition-all">
                        <Search size={20} className="opacity-70" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-xl transition-all">
                        <Filter size={20} className="opacity-70" />
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {transactions.map((t) => (
                    <div key={t.id} className="group flex items-center justify-between p-3 hover:bg-white/5 rounded-2xl transition-all cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <div className={cn("p-3 rounded-xl", t.color)}>
                                <t.icon size={20} />
                            </div>
                            <div>
                                <p className="font-semibold">{t.title}</p>
                                <p className="text-xs opacity-50">{t.date} • {t.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className={cn("font-bold", t.amount > 0 ? "text-primary" : "text-foreground")}>
                                {t.amount > 0 ? "+" : ""}{t.amount.toLocaleString()} 円
                            </span>
                            <button className="p-1 opacity-0 group-hover:opacity-100 transition-all">
                                <MoreVertical size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full py-3 text-sm font-semibold opacity-70 hover:opacity-100 transition-all">
                全ての履歴を表示
            </button>
        </Card>
    );
};
