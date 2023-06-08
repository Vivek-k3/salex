import { useEffect, useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import OpportunityCard from "./OpportunityCard";
import useGetData from "../../hooks/useGetData";
import { CustomDroppable } from "../../utils/CustomDropable";

export default function OpenOpportunities() {
    const { loading, data, error } = useGetData("/opportunity");
    const [opportunities, setOpportunities] = useState(null);

    const handleDragEnd = (e) => {
        console.log(e);
        if (!e.destination) return;

        const sourceArray = opportunities[e.source.droppableId].filter(
            (val) => val.customerId !== e.draggableId
        );
        const dragElement = opportunities[e.source.droppableId].find(
            (val) => val.customerId === e.draggableId
        );
        const items = Array.from(opportunities[e.destination.droppableId]);
        items.splice(e.destination.index, 0, dragElement);

        setOpportunities((currState) => ({
            ...currState,
            [e.source.droppableId]: sourceArray,
            [e.destination.droppableId]: items,
        }));
    };

    useEffect(() => {
        setOpportunities(data);
    }, [data]);

    if (loading || !opportunities) return <p>loading...</p>;

    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="flex items-start justify-center p-6">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="w-full pr-3 border-r-grey-150 border-r-[1px] border-dashed min-h-screen flex flex-col">
                        <h2 className="text-xl font-bold">
                            Engage | {opportunities.engage.length}
                        </h2>
                        <CustomDroppable droppableId="engage">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="h-full flex-grow"
                                >
                                    {opportunities.engage.map((val, index) => {
                                        return (
                                            <Draggable
                                                key={val.customerId}
                                                draggableId={val.customerId}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        className="hover:cursor-grab"
                                                    >
                                                        <OpportunityCard
                                                            key={index}
                                                            heading={val.name}
                                                            content={val.status}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </CustomDroppable>
                    </div>
                    <div className="w-full px-3 border-r-grey-150 border-r-[1px] border-dashed min-h-screen flex flex-col">
                        <h2 className="text-xl font-bold">
                            Discover | {opportunities.discover.length}
                        </h2>
                        <CustomDroppable droppableId="discover">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="h-full flex-grow"
                                >
                                    {opportunities.discover.map(
                                        (val, index) => {
                                            return (
                                                <Draggable
                                                    key={val.customerId}
                                                    draggableId={val.customerId}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            className="hover:cursor-grab"
                                                        >
                                                            <OpportunityCard
                                                                key={index}
                                                                heading={
                                                                    val.name
                                                                }
                                                                content={
                                                                    val.status
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            );
                                        }
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </CustomDroppable>
                    </div>
                    <div className="w-full px-3 border-r-grey-150 border-r-[1px] border-dashed min-h-screen flex flex-col">
                        <h2 className="text-xl font-bold">
                            Nurture & Prep | {opportunities.nurturePrep.length}
                        </h2>
                        <CustomDroppable droppableId="nurturePrep">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="h-full flex-grow"
                                >
                                    {opportunities.nurturePrep.map(
                                        (val, index) => {
                                            return (
                                                <Draggable
                                                    key={val.customerId}
                                                    draggableId={val.customerId}
                                                    index={index}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            className="hover:cursor-grab"
                                                        >
                                                            <OpportunityCard
                                                                key={index}
                                                                heading={
                                                                    val.name
                                                                }
                                                                content={
                                                                    val.status
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            );
                                        }
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </CustomDroppable>
                    </div>
                    <div className="w-full px-3 border-r-grey-150 border-r-[1px] border-dashed min-h-screen flex flex-col">
                        <h2 className="text-xl font-bold">
                            Propose | {opportunities.propose.length}
                        </h2>
                        <CustomDroppable droppableId="propose">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="h-full flex-grow"
                                >
                                    {opportunities.propose.map((val, index) => {
                                        return (
                                            <Draggable
                                                key={val.customerId}
                                                draggableId={val.customerId}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        className="hover:cursor-grab"
                                                    >
                                                        <OpportunityCard
                                                            key={index}
                                                            heading={val.name}
                                                            content={val.status}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </CustomDroppable>
                    </div>
                    <div className="w-full pl-3 border-r-grey-150 border-r-[1px] border-dashed min-h-screen flex flex-col">
                        <h2 className="text-xl font-bold">
                            Close | {opportunities.close.length}
                        </h2>
                        <CustomDroppable droppableId="close">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="h-full flex-grow"
                                >
                                    {opportunities.close.map((val, index) => {
                                        return (
                                            <Draggable
                                                key={val.customerId}
                                                draggableId={val.customerId}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        className="hover:cursor-grab"
                                                    >
                                                        <OpportunityCard
                                                            key={index}
                                                            heading={val.name}
                                                            content={val.status}
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </CustomDroppable>
                    </div>
                </DragDropContext>
            </div>
        </>
    );
}
