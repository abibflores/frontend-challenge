import { OfferCard } from "./OfferCard";
import { OrderOffertList } from "../../utils";

export const DirectoryList = ({ offerList, order, ...props }) => {
    const OFFER_LIST = order ? OrderOffertList(offerList, order) : offerList;
    return (
        <section className="DirectoryList">
            {OFFER_LIST.map(offer => (
                <OfferCard {...offer} key={offer.id} />
            ))}
        </section>
    );
};
