import React from 'react'
import ReactRedux from './ReactRedux'
import store from './store';
import { Provider } from 'react-redux';


store.subscribe(() => console.log(store.getState()))

const Reduxapp = () => {
    return (
        <>
            <Provider store={store}>
                        <ReactRedux />
            </Provider>
        </>
    )
}

export default Reduxapp