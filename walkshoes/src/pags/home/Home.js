import CardListHome from "./components/card/cardListHome/CardListHome";
import Chat from "../../componentsGlobal/chat/Chat";
import HeaderList from "../../componentsGlobal/header/headerList/HeaderList";
import Menu from "../../componentsGlobal/header/menu/Menu";
import Footer from "../../componentsGlobal/footer/Footer";

const Home = (props) => {

  const [cards, setCards] = useState([]);

  // Fetch do bd mockado
  useEffect(() => {
    fetch('http://localhost:3000/tenis')
    .then(res=>{
      return res.json();
    })
    .then((data)=>{
      setCards(data);
    })
  }, []);

    return (
      <>
        <Menu></Menu>
        <HeaderList></HeaderList>
        <CardListHome card={cards}></CardListHome>
        <Footer></Footer>
        <Chat></Chat>
      </>
    );
  }

export default Home;

