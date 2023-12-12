interface TeamPageProps {
    params: {
        team: string
    }
}

const TeamPage = ({params}: TeamPageProps) => {
    return (
        <div>{params.team}</div>
    )
}

export default TeamPage