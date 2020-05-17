import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state= {

            collections: SHOP_DATA
        }
    }


    render() {

        const collections = this.state.collections;
        return (
            <div>
            
                {
                    collections.map(({id, ...otherprops}) => (

                        <CollectionPreview key={id} {...otherprops} />
                    ))
                }
            
            </div>
        );
    }
}

export default ShopPage;