type StoreProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
const StoreItems = ({ id,name,price,imgUrl }: StoreProps) =>
{
    return <>
        <img src={imgUrl} alt="1" />
        <h4>{name}</h4>
        <p>{price}</p>
        <button>Add to Cart</button>
    </>
}

export default StoreItems