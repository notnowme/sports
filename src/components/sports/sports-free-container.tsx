import SportFreeItem from "./sports-free-item";

interface SportFreeContainerProps {
    boardTitle: string
}

const SportFreeContainer = ({boardTitle}: SportFreeContainerProps) => {
    return (
        <div className='mt-5 p-2 rounded-md flex w-full max-w-[820px] gap-x-5'>
            <div className='flex flex-col w-full p-2'>
                <h1 className='text-2xl'>{boardTitle}</h1>
                <div className='mt-4 flex flex-col w-full rounded-md p-2 bg-[#1D1D1D] gap-y-1'>
                    <SportFreeItem tag="잡담"/>
                    <SportFreeItem tag="후기"/>
                    <SportFreeItem tag="잡담"/>
                    <SportFreeItem tag="후기"/>
                    <SportFreeItem tag="후기"/>
                </div>
            </div>
        </div>
    );
}

export default SportFreeContainer;