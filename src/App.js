import { DirectoryList } from "ui/components/DirectoryList";
import { fetchOffersList } from "./utils/index";
import { OrderList } from "ui/components/OrderList";
import "./index.scss";
import { Spinner } from "./ui/components/Spinner";

export default function App() {
    const [offerList, setOfferList] = useState([]);
    const [order, setOrder] = useState("");

    useEffect(() => {
        fetchOffersList().then(resp => {
            if (resp.success) {
                const { data } = resp;
                setOfferList(data);
            }
        });
    }, []);

    return (
        <>
            <OrderList handleClick={setOrder} />
            {offerList.length > 0 ? (
                <DirectoryList offerList={offerList} order={order} />
            ) : (
                <Spinner />
            )}
        </>
    );
}
