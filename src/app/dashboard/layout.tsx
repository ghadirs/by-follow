import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-900">
            {/* Sidebar - Hidden on mobile, visible on desktop */}
            <aside className="hidden w-64 overflow-y-auto border-l border-gray-800 bg-gray-900 md:block">
                <Sidebar />
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto p-6 text-white">
                    {children}
                </main>
            </div>
        </div>
    );
}