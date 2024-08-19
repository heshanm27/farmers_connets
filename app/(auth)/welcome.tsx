import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function welcome() {
  return (
    <View>
      <Text>welcome</Text>
      <Link href="/signin">sign-in</Link>
      <Link href="/signup/farmer">sign-up</Link>
      <Link href="/(home)">home</Link>
    </View>
  );
}
