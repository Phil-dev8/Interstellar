import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import logo from "./assets/logo.png";
import metascore from "./assets/metascore.jpg";
import matthew from "./assets/matthew.jpg";
import mackenzie from "./assets/mackenzie.jpg";
import jessica from "./assets/jessica.jpg";
import anne from "./assets/anne.jpg";

import poster from "./assets/film.jpg";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

// console.log(Constants.statusBarHeight);

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={logo}
          style={{ width: 50, height: 30, marginLeft: 20 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Interstellar</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.informations}>2014</Text>
          <Text style={styles.informations}>PG-13</Text>
          <Text style={styles.informations}>2h 49min</Text>
          <Text style={styles.informations}>Adventure, Drama, Sci-fi</Text>
        </View>
        <View style={styles.imgResume}>
          <Image source={poster} style={styles.poster} />
          <View>
            <Text style={styles.resume}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontSize: 16, color: "white" }}>
                + ADD TO WATCHLIST
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.icon}>
          <View style={styles.rating}>
            <Ionicons name="star-sharp" size={24} color="yellow" />
            <Text style={styles.textRating}>8.6/10</Text>
          </View>
          <View style={styles.rating}>
            <Ionicons name="star-outline" size={24} color="white" />
            <Text style={styles.textRating}>Rate this</Text>
          </View>
          <View style={styles.rating}>
            <Image source={metascore} style={{ width: 25, height: 25 }} />
            <Text style={styles.textRating}>Metascore</Text>
          </View>
        </View>
      </View>
      <View style={styles.interligne}></View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={styles.part2}>Top Billed Cast</Text>
          <Text
            style={{
              color: "#1D53C8",
              fontSize: 12,
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            SEE ALL
          </Text>
        </View>
      </View>
      <View style={styles.container2}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              source={matthew}
              style={{ height: 200, width: 140, marginLeft: 10 }}
            />
            <View
              style={{
                marginLeft: 10,
                width: 140,
                height: 45,
                backgroundColor: "grey",
              }}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={{
                  fontSize: 14,
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 5,
                  color: "white",
                }}
              >
                Matthew McConaughey
              </Text>
              <Text style={{ marginLeft: 15, marginRight: 15, color: "white" }}>
                Cooper
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 7 }}>
            <Image source={anne} style={{ height: 200, width: 140 }} />
            <Text>Matthew McCon</Text>
          </View>
          <View style={{ marginLeft: 7 }}>
            <Image source={jessica} style={{ height: 200, width: 140 }} />
            <Text>Matthew McCon</Text>
          </View>
          <View style={{ marginLeft: 7, marginRight: 10 }}>
            <Image source={mackenzie} style={{ height: 200, width: 140 }} />
            <Text>Matthew McCon</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight : 30,
    backgroundColor: "grey",
    height: 50,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#313131",
    // height: 400,
  },

  container2: {
    backgroundColor: "#313131",
    flexDirection: "row",
    flex: 1,

    // height: 400,
  },
  title: {
    fontSize: 36,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    color: "white",
  },
  informations: {
    color: "#BABABA",
    marginLeft: 20,
  },
  poster: {
    width: 120,
    height: 180,
    resizeMode: "cover",
    marginLeft: 20,
    marginTop: 20,
  },
  imgResume: {
    flexDirection: "row",
  },
  resume: {
    color: "white",
    marginTop: 23,
    marginLeft: 20,
    marginRight: 150,
  },
  button: {
    backgroundColor: "#1D53C8",
    height: 30,
    width: Platform.OS === "ios" ? 260 : 220,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 5,
  },
  icon: {
    marginTop: 20,
    width: Platform.OS === "ios" ? 450 : 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rating: {
    alignItems: "center",
  },
  textRating: {
    color: "white",
    fontWeight: "bold",
  },
  interligne: {
    height: 18,
    backgroundColor: "black",
  },
  part2: {
    fontSize: 24,
    color: "white",
    marginLeft: 20,
    marginBottom: 14,
    // marginTop: 25,
  },
});
