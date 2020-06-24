import React from 'react';

import './Orders.style.scss';

import { connect } from 'react-redux';

import Order from '../../components/Order/Order.component';
import Spinner from '../../components/Spinner/Spinner.component';
import withErrorHandler from '../../HOC/withErrorHandler';

import * as creators from '../../store/actions/actions.creators';

const Orders = (props) => {

  React.useEffect( () => {
    props.getOrders();
  }, []);

  return (
    <div className='Orders'>
      <h2>Orders</h2>
      {props.loading && <Spinner />}
      {props.orders.map(order => <Order key={order.id} order={order} /> )}
    </div>
  )
}

const mapStateToProps = state => ({
  orders: state.ordersReducer.orders,
  loading: state.ordersReducer.loading,
  error: state.ordersReducer.error
});

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(creators.clearError()),
  getOrders: () => dispatch(creators.tryGetOrders()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders));