import '../style.css';
import { widthCal, roundPrice } from '@/app/constants';

const SingleOrder = ({ orderBook, orderData, name = '' }: any) => {

  return (<div className="body">  
  {
    (orderBook || [])?.map((item: any) => {
      console.log("inside return orderbook", item)
      return <div className="title" key={item.total}>
        <div className={`${name}`} style={{ width: `${widthCal({ item, orderBook })}%` }} />
        {(orderData || [])?.map((order: any) => {
          return <div className="value" key={order}>{roundPrice({ item, order })}
          </div>
        })}
      </div>
    })
  }
  </div>)
}
export default SingleOrder;