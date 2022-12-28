import StoreItems from '../components/StoreItems';
import items from '../data/items.json';
function Store(){
  return (
      <div>
          {items.map(item=>(
          <div key={item.id}>
              <StoreItems {...item} />
          </div>
      ) )} 
    </div>
  )
}

export default Store