import { useEffect, useState } from "react";
import Modal from "../custom/Modal";
import { AiOutlineClose } from "react-icons/ai";
import handlePostData from "../../hooks/handlePostData";
import generateUuid from "../../utils/generateUuid";

export default function NewOpportunityModal() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [metaData, setMetaData] = useState("");
    const [errorMetaData, setErrorMetaData] = useState("");
    const [tile, setTile] = useState("");
    const [tiles, setTiles] = useState([]);
    const [tilesError, setTilesError] = useState("");
    const [funnelCurrentStage, setFunnelCurrentStage] = useState("");
    const [errorFunnelCurrentStage, setErrorFunnelCurrentStage] = useState("");
    const [status, setStatus] = useState("");
    const [statusError, setStatusError] = useState("");
    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) return setNameError("*name required");

        if (!metaData) return setErrorMetaData("*metadata required");

        if (tiles.length === 0) return setTilesError("*tags required");

        if (!funnelCurrentStage)
            return setErrorFunnelCurrentStage("*funnelCurrentStage required");

        if (!status) return setStatusError("status required");

        if (!date) return setDateError("Date Required");
        handlePostData("/opportunity", {
            customerId: generateUuid(),
            name: name,
            metadata: metaData,
            tags: tiles,
            funnelCurrentStage,
            status,
            expectedClosingDate: date,
        });
    };

    const handleTags = () => {
        if (!tile) return setTilesError("*Tile required");

        setTiles((currState) => [...currState, tile]);
        setTile("");
    };

    const handleRemoveTile = (val) => {
        setTiles((currState) => currState.filter((value) => value !== val));
    };

    useEffect(() => {
        setNameError("");
        setErrorMetaData("");
        setTilesError("");
        setErrorFunnelCurrentStage("");
        setStatusError("");
        setDateError("");
    }, [name, metaData, tiles, funnelCurrentStage, status, date]);

    return (
        <Modal type="new opportunity">
            <div className="p-6">
                <h2 className="text-2xl font-bold">New Opportunity</h2>
                <form onSubmit={handleSubmit} className="py-5">
                    <input
                        type="text"
                        name="oppaNme"
                        id="oppName"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p className="text-xs text-red-400 mb-4 mt-1">
                        {nameError}
                    </p>
                    <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        placeholder="Metadata"
                        value={metaData}
                        onChange={(e) => setMetaData(e.target.value)}
                    ></textarea>
                    <p className="text-xs text-red-400 mb-4 mt-1">
                        {errorMetaData}
                    </p>
                    <div>
                        <div className="flex items-center justify-center gap-3">
                            <input
                                type="text"
                                name="tags"
                                id="tags"
                                className="w-full"
                                value={tile}
                                onChange={(e) => setTile(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={handleTags}
                                className="py-1 px-4 rounded-[4px] bg-black text-white text-sm font-bold capitalize"
                            >
                                Add
                            </button>
                        </div>
                        {tiles?.map((val, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center justify-center rounded-lg bg-grey-150 w-fit p-2 mt-2 mx-1 gap-2"
                            >
                                <p>{val}</p>
                                <span
                                    onClick={() => handleRemoveTile(val)}
                                    className="hover:cursor-pointer"
                                >
                                    <AiOutlineClose />
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-red-400 mb-4 mt-1">
                        {tilesError}
                    </p>
                    <select
                        name="funnelCurrentStage"
                        value={funnelCurrentStage}
                        onChange={(e) => setFunnelCurrentStage(e.target.value)}
                        id="funnelCurrentStage"
                    >
                        <option hidden>Select option</option>
                        <option value="engage">Engage</option>
                        <option value="discover">Discover</option>
                        <option value="nurture & prep">Nurture & prep</option>
                        <option value="propose">Propose</option>
                        <option value="close">Close</option>
                    </select>
                    <p className="text-xs text-red-400 mb-4 mt-1">
                        {errorFunnelCurrentStage}
                    </p>
                    <select
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        id="funnelCurrentStage"
                    >
                        <option hidden>Select Status</option>
                        <option className="uppercase" value="won">
                            won
                        </option>
                        <option className="uppercase" value="lost">
                            lost
                        </option>
                        <option className="uppercase" value="hold">
                            hold
                        </option>
                    </select>
                    <p className="text-xs text-red-400 mb-4 mt-1">
                        {statusError}
                    </p>
                    <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value={date}
                        min="2018-01-01"
                        max="2023-12-31"
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <p className="text-xs text-red-400 mb-4 mt-1">
                        {dateError}
                    </p>
                    <div className="text-center">
                        <button
                            className="block w-full py-2 px-4 rounded-[4px] bg-black text-white text-sm font-bold capitalize"
                            type="submit"
                        >
                            Create New Opportunity
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
