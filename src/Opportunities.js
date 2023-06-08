import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewOpportunityModal from "./components/Opportunities/NewOpportunityModal";
import OpportunitiesBank from "./components/Opportunities/OpportunitiesBank";

export default function Opportunities() {
    return (
        <>
            <section className="flex items-start justify-start">
                <Navbar />
                <div className="w-full">
                    <Header />
                    <OpportunitiesBank />
                </div>
                <NewOpportunityModal />
            </section>
        </>
    );
}
