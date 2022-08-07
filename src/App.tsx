import mobileBg from './assets/images/bg-main-mobile.png';
import Cards from './components/Cards/Cards';

const App = () => {
  return (
    <main>
      <div className="">
        <img src={mobileBg} alt="" />
      </div>
      <Cards />
    </main>
  );
};

export default App;
