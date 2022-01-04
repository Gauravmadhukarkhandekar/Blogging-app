import React from 'react';
import './styles.css'

function Table(props) {
    return (
        <div className='user-table'>
            {['Name', 'Company', 'Posts'].map((column) => {
                return <div className='table-header-row'>
                    <div className='table-item'>{column}</div>
                </div>
            })}

            {props.data.map(user => {
                return <>
                    <div className='table-data-row'>
                        <div className='table-item'>{user.name}</div>
                    </div>
                    <div className='table-data-row'>
                        <div className='table-item'>{user?.company?.name}</div>
                    </div>
                    <div className='table-data-row'>
                        <div onClick={() => props.onClick(user?.id)} className='table-item-button'>Post</div>
                    </div>
                </>
            })
            }
        </div>
    );
}

export default Table;