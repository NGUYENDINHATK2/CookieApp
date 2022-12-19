import { View, Text, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
//?components
import CookieItem from './CookieItem';
const ListCookieSectionContainer = styled.View`
    margin-top: 10px;
    flex:1;
    width: 100%;
    background-color: #FAAB78;
    flex-wrap: wrap;
`;

const ListCookieSection = () => {
    const data=[
        {
            id:1,
            name:"Chocolate Cookie",
            description:"Chocolate Cookie is very delicious",
            image:"https://i.pinimg.com/736x/a6/77/e0/a677e03dc127336db3171b7666207bd6.jpg"
        },
        {
            id:2,
            name:"Chocolate Cookie",
            description:"Chocolate Cookie is very delicious",
            image:"https://overyourcities.com/wp-content/uploads/2022/06/tong-hop-anh-gai-xinh-mac-bikini-mang-da-dang-thiet-ke-khac-nhau_629f1fb55813c.jpeg"
        }
    ]
    return (
            <ListCookieSectionContainer>
              {
                    data.map((item,index)=>{
                        return(
                            <CookieItem key={item.id} item={item}/>
                        )
                    })
              }
            </ListCookieSectionContainer>
    )
}

export default ListCookieSection