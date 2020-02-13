import React from 'react';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
import GalleryList from '../galleryList/GalleryList';

const fetchItem = require('../fetch/fetchItem');

function ItemListPage(props) {
    let loadRequest = fetchItem.list(1,3).then(
        (resolve) => {
            console.log("loadRequest")
            console.log(resolve)
            return resolve.map(
                (item, index, array) => {
                    let list_item = {
                        id: item.id,
                        cover_img: item.cover_img,
                        title: item.name,
                        subtitle: item.producer.name
                    }
                    return list_item
                }
            )
        }
    ).catch(
        (reject) => {return reject}
    )
    return (
        <div>
          <HeroTitle title="我們的茶" paragraph="最傳統的凍頂烏龍茶"/>
          <GalleryList countAll={fetchItem.countAll().then((response) => {return response.count})} loadrequest={fetchItem.list_p} route="item"/>
        </div>
    );
}

export default ItemListPage;