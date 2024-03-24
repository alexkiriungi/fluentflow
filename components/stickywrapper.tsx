type Props = {
    children: React.ReactNode;
};

export const StickyWrapper = ({ children }: Props) => {
    return (
        <div className="hidden lg:block w-[360px] sticky self-end bottom-6">
            <div className="min-h-[calc(100vh-40px)] sticky top-6 flex flex-col gap-y-4">
                {children}
            </div>
        </div>
    )
}