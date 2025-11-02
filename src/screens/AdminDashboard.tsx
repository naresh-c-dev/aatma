import React, { FC } from 'react';
import Card from '../components/Card';

const AdminDashboard: FC = () => (
    <div className="space-y-6">
        <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4"><p className="text-sm">Total Users</p><p className="text-2xl font-bold">1,500</p></Card>
            <Card className="p-4"><p className="text-sm">Revenue</p><p className="text-2xl font-bold">₹8,50,000</p></Card>
            <Card className="p-4"><p className="text-sm">Active Bookings</p><p className="text-2xl font-bold">72</p></Card>
        </div>
        <Card className="p-4">
            <h2 className="font-serif font-bold mb-2">Recent Bookings</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b"><th className="p-2">User</th><th className="p-2">Service</th><th className="p-2">Date</th></tr>
                    </thead>
                    <tbody>
                        <tr><td className="p-2">Ananya S.</td><td className="p-2">E-Pooja</td><td className="p-2">25 Oct 2024</td></tr>
                        <tr><td className="p-2">Rohan V.</td><td className="p-2">Astrology Chat</td><td className="p-2">24 Oct 2024</td></tr>
                    </tbody>
                </table>
            </div>
        </Card>
    </div>
);

export default AdminDashboard;
