import { currencyFormat } from "../utilities/currencyFormat"

type StoreProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
const StoreItems = ({ id,name,price,imgUrl }: StoreProps) =>
{
    const quantity = 0;
    return <>
        <img src={imgUrl} alt="1" style={{ width: '100%' }} />
        <div style={{display:'flex',justifyContent:'space-between',margin:'1rem'}}>
        <h4>{name}</h4>
        <p>{currencyFormat(price)}</p>
        </div>
        <div style={{ display: 'flex',justifyContent: 'center',alignItems: "center",margin: "1rem" }}>
            {quantity === 0 ?(<button>Add to Cart</button>):null}
        </div>
    </>
}

export default StoreItems