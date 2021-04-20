import { OfferCard } from "./OfferCard";

export const DirectoryList = ({ offerList, ...props }) => (
    <section className="DirectoryList">
        {offerList.map(offer => (
            <OfferCard {...offer} key={offer.id} />
        ))}
    </section>
);
