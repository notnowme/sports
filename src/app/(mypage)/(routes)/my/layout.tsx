interface MyPageLayoutProps {
    children: React.ReactNode
}

const MyPageLayout = ({children}: MyPageLayoutProps) => {
    return (
        <div className="w-full max-w-[1280px] mt-10 flex p-2">
            {children}
        </div>
    );
}
 
export default MyPageLayout;