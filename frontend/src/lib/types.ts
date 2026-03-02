export type TransactionType = 'INCOME' | 'EXPENSE';

export interface User {
    id: number;
    email: string;
    name: string;
    deleted_at?: string;
}

export interface Category {
    id: number;
    user_id: number;
    name: string;
    type: TransactionType;
    icon: string;
    color: string;
    sort_order: number;
}

export interface Transaction {
    id: number;
    user_id: number;
    category_id: number;
    type: TransactionType;
    amount: number;
    transaction_date: string;
    description: string;
    recurring_id?: number;
    deleted_at?: string;
}

export interface Budget {
    id: number;
    user_id: number;
    category_id: number;
    year_month: string; // "YYYY-MM"
    amount: number;
}

export interface RecurringTransaction {
    id: number;
    user_id: number;
    category_id: number;
    amount: number;
    start_date: string;
    end_date?: string;
    frequency: 'MONTHLY' | 'WEEKLY' | 'YEARLY';
    description: string;
}
