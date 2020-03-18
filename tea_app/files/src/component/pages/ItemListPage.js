import React from 'react';
import HeroTitle from '../hero_title/HeroTitle'
import Gallery from '../gallery/Gallery';
// import GalleryList from '../galleryList/GalleryList';
import {fetchItemList, fetchItemCountAll, fetchItemList_p} from '../fetch/fetchItem';

function ItemListPage(props) {
    let loadRequest = fetchItemList(1,3).then(
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
            <div style={{height: "3rem"}}></div>
            <HeroTitle title="我們的茶" paragraph="最傳統的凍頂烏龍茶"/>
            <div class="container">
                {/* <GalleryList countAll={fetchItemCountAll().then((response) => {return response.count})} loadrequest={fetchItemList_p} route="item"/> */}
            </div>
        </div>
    );
}

export default ItemListPage;