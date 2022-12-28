import StoreItems from '../components/StoreItems';
import storeItems from '../data/items.json';
function Store(){
    return (
        <>
            <h1>Store</h1>
      <div>
                {storeItems.map(el => (
             <StoreItems {...el}/> 
          ))}
    </div>
      </>
  )
}

export default Store