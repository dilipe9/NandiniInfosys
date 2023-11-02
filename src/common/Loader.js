import React from 'react';
import { Spinner } from 'reactstrap';

export const Loader = ({show}) => {
    return (
        <div className={show ? 'loaderContainer' : 'd-none'}>
            <Spinner
                color='primary'
                size='xl'
            />
        </div>
    )
}