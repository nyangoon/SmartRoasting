import React, { Fragment } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CoffeeInfo from './CoffeeInfo';
export default function CoffeeBeanList() {


    const colombian = "콜롬비아에서 생산되는 원두이며 미국에서는 최고의 커피로 인식된다. 커피 콩의 크기를 의마하는 Excelso 및 Supremo로 구분되며 부드러운 산미, 적당한 바디, 깨끗한 뒷맛이 특징이다."
    const harrar = "아라비카 원두의 대표 산지로서 에티오피아 하라 지역에서 생산되는 제품이다. 복잡한 맛과 과일향이 특징"
    const yirgacheffe = "에티오피아 시다모 지역의 예가체프 마을에서 생산되는 커피로 중간 바디감에 감귤향, 초콜릿향으로 유명한 커피"
    const kona = "하와이의 빅 아일랜드의 코나 지역에서 생산되는 커피로 깔끔한 뒷맛과 가볍고 섬세함을 지님"
    const blueMountain="자메이카 블루마운틴 지역에서 생산되며 가장 프리미엄이 비싼 커피 중에 하나다. 맛을 부드럽고 가벼운 바디감이 특징"
    const java = "인도네시아 자바 섬에서 생산되며 예멘모카와 상호 보완하여 조화로운 모카자바로 블렌딩 되어 인기가 많다."
    const AA ="케냐에서 생산된 커피로 AA는 케냐의 경매시스템의 등급이다. 신맛을 사지고 있고 레몬향과 강렬하고 대담한 맛에 좋은 향기가 특징"
    const mandheling="인도네시아 서부 스마트라 파당 외부지역에서 생산되며, 만델링 사람들의 이름을 따서 이름을 명명하였다고 한다. 무거운 바디와 은은한 신맛, 독특하고 복잡한 맛이 특징"
    const mocha = "예멘에서 생산된 커피입니다. 풍부한 초콜릿 향과 어두운 로스트가 특징. 자바와 블렌딩하여 인기가 많다."
    const peaberry = "탄자니아에 있는 킬리만자로 산에서 생산되며 섬세한 산도와 중간 바디, 밝고 풍부한 향이 특징."
    const santos = "브라질에서 생산되며, 산토스는 아라비카 커피의 다양한 등급 용어로 사용된다. 온화한 향기와 부드러운 맛, 가벼운 바디감이 특징"
    const SHB = "옛 과테말라라는 뜻의 커피. 최고급 품질인 SHB급의 대표적인 커피로서 입안에 퍼지는 스모키 함과 약간의 단맛이 특징"
    const tarrazu = "코스타리카의 센트럴 밸리의 높은 산에서 생산되는 원두이다. 균형 잡힌 깨끗한 맛과 감귤류, 초콜릿과 향신료의 뒷맛, 밝은 신맛이 특징"
    return (
        <ScrollView style={style.list}>
            
            <CoffeeInfo name={"콜롬비아 마일드"} info={colombian}/>
            <CoffeeInfo name={"에티오피아 하라"} info={harrar}/>
            <CoffeeInfo name={"에티오피아 예가체프"} info={yirgacheffe}/>
            <CoffeeInfo name={"하와이언 코나"} info={kona}/>
            <CoffeeInfo name={"자메이카 블루마운틴"} info={blueMountain}/>
            <CoffeeInfo name={"자바"} info={java}/>
            <CoffeeInfo name={"케냐 AA"} info={AA}/>
            <CoffeeInfo name={"스마트라 만델링"} info={mandheling}/>
            <CoffeeInfo name={"모카"} info={mocha}/>
            <CoffeeInfo name={"탄자니아 피베리"} info={peaberry}/>
            <CoffeeInfo name={"산토스"} info={santos}/>
            <CoffeeInfo name={"과테말라 안티구아 SHB"} info={SHB}/>
            <CoffeeInfo name={"코스타리카 따라주"} info={tarrazu}/>

            
            
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
 