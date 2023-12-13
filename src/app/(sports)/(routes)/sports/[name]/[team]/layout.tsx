interface TeamPageLayoutProps {
    children: React.ReactNode
    params: {
        team: string
    }
}

const TeamPageLayout = ({children, params}: TeamPageLayoutProps) => {
    return (
        <>{children}</>
    )
}
export default TeamPageLayout