import {Image, View, Text, StyleSheet} from "react-native";
import {useRouter, useLocalSearchParams} from "expo-router";


export default function Home() {
  const {username} = useLocalSearchParams<{username: string}>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo @{username}</Text>
      <Image style={styles.foto} source={{
       uri:"https://asset-2.tstatic.net/kupang/foto/bank/images/Gunung-Lewotobi-di-bagian-tenggara-Pulau-Flores.jpg"
      }}
      />

      <Text style={styles.paragraf}> Gunung Lewotobi adalah dua gunung berapi kembar, dengan dua puncak yang hampir sama tinggi, 
      yang terletak di bagian tenggara Pulau Flores, Nusa Tenggara Timur, Indonesia. Secara administratif, 
      gunung ini berada di Kecamatan Wulanggitang dan sebagian kecil Kecamatan Ile Bura, Kabupaten Flores Timur, NTT.{"\n"}
      Ketinggian: 1.703 m {"\n"}
      Provinsi: Nusa Tenggara Timur{"\n"}
      Letusan terakhir: Sedang berlangsung{"\n"}
      Jenis gunung: Stratovolcano {"\n"}
      Letak: Flores, Indonesia 
      </Text>


    </View>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
   backgroundColor:"black",
  },
  text:{
fontSize:20,
fontWeight:'bold',
marginTop:20,
  },
  foto:{
    marginTop:20,
    width:200,
    height:200,
  },
  paragraf:{ 
    margin:30,
   alignItems :"center",
   color:"white",
  },
   
});
