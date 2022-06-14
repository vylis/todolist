import { View, Text, StyleSheet, Button } from "react-native";
import SoundPlayer from "react-native-sound-player";

export default function Sound() {
  const playSound = () => {
    try {
      SoundPlayer.playUrl(
        "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Synth/103[kb]nice-chord.wav.mp3"
      );
    } catch (e) {
      console.log("cannot play sound", e);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Sound</Text>
      <Button onPress={playSound} title="play sound" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
