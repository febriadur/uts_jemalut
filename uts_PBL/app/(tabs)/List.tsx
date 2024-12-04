import {View, Text, StyleSheet} from "react-native";
import {useRouter, useLocalSearchParams} from "expo-router";
import {GestureHandlerRootView, ScrollView} from "react-native-gesture-handler";


export default function Home() {
  const {username} = useLocalSearchParams<{username: string}>();
  return (
    <GestureHandlerRootView>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.list}>Daftar Film </Text>
      <Text style={styles.daftar}>
      Arya {"\n"} {"\n"}
      1.Sekawan Limo (Rp40.000) {"\n"}
          12:05 | 12:35 | 14:15 | 14:45 | 16:25 | 16:55 | 18:35 {"\n"}{"\n"}
      2.TWISTERS (Rp40.000){"\n"}
      11:50 | 14:10 | 16:30 | 18:50 | 21:10 {"\n"} {"\n"}

      3. Jurnal Risa by Risa Saraswati (Rp40.000)
       13:30 | 15:20 | 17:10 | 19:00 | 20:50 {"\n"} {"\n"}

     4. Ipar Adalah Maut (Rp40.000){"\n"} 
        13:25 | 15:55 | 18:25 | 20:55{"\n"} {"\n"}
  Malang Town Square {"\n"} {"\n"}
1. Ipar Adalah Maut (Rp45.000){"\n"}
13:15 | 18:05 | 20:50{"\n"}{"\n"}
2.DESPICABLE ME 4 (Rp45.000){"\n"}
17:25 | 19:30{"\n"}{"\n"}
3.Sekawan Limo (Rp45.000){"\n"}
10:45 | 11:45 | 13:10 | 14:10 | 15:35 | 16:35 | 18:00 | 19:00 | 20:25 | 21:25 | 21:55{"\n"}{"\n"}
4.Escape (Rp45.000){"\n"}
11:10 | 16:00{"\n"}{"\n"}
5.TWISTERS (Rp45.000){"\n"}
12:15 | 14:50{"\n"}{"\n"}
6.Jurnal Risa by Risa Saraswati (Rp45.000){"\n"}
10:55 | 13:00 | 15:05 | 17:10 | 19:15 | 21:20{"\n"}{"\n"}
7.PROJECT SILENCE (Rp45.000){"\n"}
21:35{"\n"}{"\n"}
   Malang City Point{"\n"}{"\n"}
Ipar Adalah Maut (Rp55.000)
19:00
1. DESPICABLE ME 4 (Rp50.000){"\n"}
11:00 | 13:00 | 15:00 | 17:00{"\n"}{"\n"}
2. Sekawan Limo (Rp45.000){"\n"}
11:45 | 14:05 | 16:25 | 18:45 | 21:05{"\n"}{"\n"}
3. Jurnal Risa by Risa Saraswati (Rp40.000){"\n"}
12:30 | 14:30 | 16:30 | 18:30 | 20:30{"\n"}{"\n"}

Transmart MX Mall
1. DESPICABLE ME 4 (Rp40.000){"\n"}
13:05 | 14:55 | 16:45 | 18:35 | 20:25{"\n"}{"\n"}
2. Sekawan Limo (Rp40.000){"\n"}
12:15 | 14:25 | 16:35 | 18:45 | 20:55{"\n"}{"\n"}
3. Jurnal Risa by Risa Saraswati (Rp40.000){"\n"}
13:30 | 15:20 | 17:10 | 19:00 | 20:50{"\n"}{"\n"}
Dieng
1. Sekawan Limo (Rp30.000){"\n"}
12:15 | 13:15 | 14:25 | 15:25 | 16:35 | 17:35 | 18:45 | 19:45 | 20:55{"\n"}
      </Text>
    </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"black",
  },
  list:{
    margin:20,
    fontWeight:"bold",
    fontSize:18,
    color:"white",
  },
  daftar:{
   margin:20,
   backgroundColor:"white",
   width:"auto",
   height:"auto",
   padding:30,
  },
});
