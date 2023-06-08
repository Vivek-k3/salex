import { useState } from "react";
import Modal from "../custom/Modal";

export default function NewOpportunityModal() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit");
    };

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
                    />
                    <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        placeholder="Metadata"
                    ></textarea>
                    <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2018-07-22"
                        min="2018-01-01"
                        max="2023-12-31"
                    />
                    <div className="text-center">
                        <button
                            className="py-2 px-4 rounded-[4px] bg-black text-white text-sm font-bold capitalize"
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
