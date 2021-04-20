import { DirectoryList } from "ui/components/DirectoryList";
import { fetchOffersList } from "./utils/index";

import "./index.scss";

export default function App() {
    const [offerList, setOfferList] = useState([]);
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
            <DirectoryList offerList={offerList} />
        </>
    );
}
