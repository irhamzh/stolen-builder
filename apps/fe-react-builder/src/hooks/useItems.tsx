import {faker} from "@faker-js/faker";
import { useState,useEffect } from "react";


// just a maybe approach for later when items are finished
const fetchItemData = async (qty:number)=> {

    const fakeDatas = [];

    const grade = {
        common:"white",
        uncommon:"green",
        rare:"blue",
        lengendary:"purple",
        mythic:"orange"
    };

    const data = {
        name: faker.commerce.productName,
        rarity: grade.common,
        type : "", // sword,mace,polearm,staff,dkk
        imageUrl:"",
        isMelee : true,
        isTwoHanded : false,
        effectDescription:"",
    }


    for (let i=0; i < qty; i++) {
        fakeDatas.push(data);
    }

    return fakeDatas;
}

let localCache = {};

export default function useItems() {
    const [items,setItems] = useState<any[]>([]);
    const [status,setStatus] = useState("IsLoading")

    useEffect(()=> {

        if (!localCache) {
            // load from cache
        }

       returnData();
        async function returnData () {
            setStatus("Loading")
            const newItems = await fetchItemData(10);
            setItems(newItems)
            setStatus("Finished Loading")
        }
    },[])

    return [items,status];

}