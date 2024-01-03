interface SportBoardPageLayout {
    children: React.ReactNode
    params: {
        name: string;
        team: string;
    };
    searchParams: any
}

const SportBoardPageLayout = async(
    {children}:
    {children:React.ReactNode}
) => {

    return (
        <>
            {children}
        </>
    );
};
 
export default SportBoardPageLayout;