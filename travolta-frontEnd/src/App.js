import './App.css';
import { Header, ReserveHotel, HotelCard } from './components';
import { useSelector } from 'react-redux';

function App() {
  const destinationInfo = useSelector((state) => state.destinationInfo);
  return (
    <div className="App">
      <Header />
      <ReserveHotel />
      <h1 className="mt-5">{destinationInfo.destination.destination}</h1>

      <div className="hotels-container p-3">
        {destinationInfo.loading ? ( //checking whether the fetching the data is pending or not
          <h2>loading...</h2>
        ) : destinationInfo.error ? ( //after checking that loading is false check whether error happened
          <h1 className="error">Something Went Wrong</h1>
        ) : destinationInfo.destination.hotels?.length ? ( //if no error happen check whether there is data
          destinationInfo.destination.hotels.map((h) => (
            <HotelCard {...h} key={h.id} />
          ))
        ) : (
          <h2 style={{ marginTop: '5%' }}>NO DATA TO SHOW YET </h2>
        )}
      </div>
    </div>
  );
}

export default App;
