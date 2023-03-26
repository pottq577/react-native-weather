import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // 기본적으로 모든 View는 Flex Container
    // Flex Direction의 기본값은 Column
    // 거의 대부분의 레이아웃 디자인 상황에서 너비와 높이에 기반해서 만들지 않음! => 반응형
    // 비율로 설정하여 레이아웃을 설정함
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1.5, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}
