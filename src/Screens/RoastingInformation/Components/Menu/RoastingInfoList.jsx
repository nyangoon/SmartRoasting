import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import { RoastingInfo } from '.';
export default function CoffeeBeanList() {

    return (
        <ScrollView style={style.list}>
            
            <RoastingInfo name={"라이트"} img="1" info="강한 신맛"/>
            <RoastingInfo name={"시나몬"} img="2" info="강한 신맛, 약한 단맛"/>
            <RoastingInfo name={"미디엄"} img="3" info="신맛 중간 단맛"/>
            <RoastingInfo name={"하이"} img="4" info="약한 신맛, 강한 단맛, 쓴맛이 생성되기 시작"/>
            <RoastingInfo name={"시티"} img="5" info="약한 신맛, 강한 단맛, 중간쓴맛이 조화를 이룸"/>
            <RoastingInfo name={"풀시티"} img="6" info="약한 신맛, 중간 단맛, 중간쓴맛이 조화를 이룸. 스모키향이 나기 시작함."/>
            <RoastingInfo name={"프렌치"} img="7" info="약한 단맛, 강한 쓴맛, 스모키향이 강하게 남"/>
            <RoastingInfo name={"이탈리안"} img="8" info="약한 단맛, 매우 강한 쓴맛"/>

        </ScrollView>
    )

}

const style = StyleSheet.create({
    list:{
        display:"flex",
        flexDirection:"column",
        flexGrow:1,
        backgroundColor:"#BF926E"
    }
})
 