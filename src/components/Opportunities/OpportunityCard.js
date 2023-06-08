export default function OpportunityCard({ heading, content }) {
    return (
        <div className="rounded-xl p-4 border-[1px] border-black my-3 bg-grey-250">
            <h2 className="text-base font-bold first-letter:uppercase">
                {heading}
            </h2>
            <p className="text-grey-200 leading-[18px] first-letter:uppercase">
                Status: {content}
            </p>
        </div>
    );
}
