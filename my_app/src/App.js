
import './App.css';
import Nav from './component/Nav';
import CardData from './component/CardData';
import Card from './component/Card';
import Footer from './component/Footer';


function App() {

  let NewCard = CardData.map((cards) => {
    return <Card cards={cards} />;
   });
  
  return (
    <>
    <Nav/>
    <div className='App'>{NewCard}</div>
    <Footer/>
    
    </>
  );
}

export default App;
