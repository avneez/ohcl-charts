import "../style.css";

const Header = ({ orderData }:any) => {
  return (
    <div>
      <div className="title">
        {(orderData).map((order:any) => {
          return (
            <div className="value" key={order}>
              {order.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
