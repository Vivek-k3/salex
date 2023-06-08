import OpenOpportunities from "./OpenOpportunities";
import { openModal } from "../../utils/handleModal";

export default function OpportunitiesBank() {
    return (
        <div>
            <div className="flex items-center justify-between p-6 border-grey-100 border-[1px]">
                <p className="text-2xl font-bold">Open opportunities</p>
                <button
                    className="py-2 px-4 rounded-[4px] bg-black text-white text-sm font-bold capitalize"
                    onClick={() => openModal("new opportunity")}
                >
                    Create New Opportunity
                </button>
            </div>
            <div>
                <OpenOpportunities />
            </div>
        </div>
    );
}
