import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

/**
 * 1. React Native는 HTML이 아니기 때문에 <div> 대신 <View>를 사용하며, View는 항상 import되어야 함
 * 2. 모든 텍스트는 <Text>에 들어가야 함
 * 3. View 컴포넌트 내에서 웹에서 사용하던 일부 style 사용 불가
 *
 * StatusBar는 말 그대로 휴대폰 상태바를 의미, 써드파티 기능
 * 기기와 소통하기 위한 컴포넌트
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>이게되네??</Text>
      <StatusBar style="auto" />
    </View>
  );
}
/**
 * StyleSheet.create 사용하는 이유: 좋은 자동 완성 기능을 제공함
 * 꼭 필요한 건 아니고, 컴포넌트 내부에서 스타일 작성해도 됨
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "black",
  },
});
