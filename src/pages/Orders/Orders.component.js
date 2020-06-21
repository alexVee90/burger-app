import React from 'react';

import './Orders.style.scss';

import Order from '../../components/Order/Order.component';
import Spinner from '../../components/Spinner/Spinner.component';

import axiosFirebase from '../../util/axios.firebase';

const Orders = () => {

  const [orders, setOrders] = React.useState([]);
  const [ loadingData, toggleLoadingData ] = React.useState(false);

  React.useEffect( () => {
    toggleLoadingData(true);

    axiosFirebase.get('/orders.json').then(res => {

     const mappedData = Object.keys(res.data).map(id => ({ id: id, ingredients: res.data[id].ingredients  }) );

     toggleLoadingData(false);
     setOrders(mappedData);

    })
  }, []);

  return (
    <div className='Orders'>
      {loadingData && <Spinner />}
      <h2>Orders</h2>
      {orders.map(order => {
        return <Order key={order.id} order={order} /> 
      })}
    </div>
  )
}

export default Orders;