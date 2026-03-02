"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';
import { Card } from './Card';
import { ArrowUpCircle, ArrowDownCircle, Wallet, Plus } from 'lucide-react';

const data = [
    { name: '1/1', value: 4000 },
    { name: '1/2', value: 3000 },
    { name: '1/3', value: 2000 },
    { name: '1/4', value: 2780 },
    { name: '1/5', value: 1890 },
    { name: '1/6', value: 2390 },
    { name: '1/7', value: 3490 },
];

const categoryData = [
    { name: '食費', value: 400, color: '#52b788' },
    { name: '住居費', value: 300, color: '#b7e4c7' },
    { name: '娯楽', value: 300, color: '#ffb4a2' },
    { name: 'その他', value: 200, color: '#e5989b' },
];

export const Dashboard = () => {
    return (
        <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="flex items-center space-x-4">
                    <div className="p-4 bg-primary/20 rounded-2xl">
                        <ArrowUpCircle className="text-primary w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-sm opacity-70">収入</p>
                        <h3 className="text-2xl font-bold">¥250,000</h3>
                    </div>
                </Card>

                <Card className="flex items-center space-x-4">
                    <div className="p-4 bg-danger/20 rounded-2xl">
                        <ArrowDownCircle className="text-danger w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-sm opacity-70">支出</p>
                        <h3 className="text-2xl font-bold">¥120,500</h3>
                    </div>
                </Card>

                <Card className="flex items-center space-x-4">
                    <div className="p-4 bg-accent/20 rounded-2xl">
                        <Wallet className="text-accent w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-sm opacity-70">残高</p>
                        <h3 className="text-2xl font-bold">¥129,500</h3>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart */}
                <Card className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold">支出推移</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `¥${value}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '16px', border: 'none', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.08)' }}
                                    formatter={(value: any) => [`¥${(value || 0).toLocaleString()}`, '金額']}
                                />
                                <Bar dataKey="value" fill="#52b788" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Category Breakdown */}
                <Card className="space-y-4">
                    <h3 className="text-xl font-bold">カテゴリ内訳</h3>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: any) => [`¥${(value || 0).toLocaleString()}`, '金額']} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="space-y-3">
                        {categoryData.map((item) => (
                            <div key={item.name} className="flex justify-between items-center text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="opacity-80">{item.name}</span>
                                </div>
                                <span className="font-bold">¥{item.value.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};
