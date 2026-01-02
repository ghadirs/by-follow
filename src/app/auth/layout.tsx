export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0B0E14] text-white">
            <div className="w-full max-w-4xl p-4">
                {children}
            </div>
        </div>
    );
}