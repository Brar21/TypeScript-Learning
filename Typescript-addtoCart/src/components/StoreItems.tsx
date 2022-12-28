type StoreProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
const StoreItems = ({ id,name,price,imgUrl }: StoreProps) =>
{
    return <>
        <img src={imgUrl} alt="1" style={{ width: '100%' }} />
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <h4>{name}</h4>
        <p>{price}</p>
        </div>
        <button>Add to Cart</button>
    </>
}

export default StoreItems