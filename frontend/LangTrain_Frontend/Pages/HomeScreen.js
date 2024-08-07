import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Touchable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../hooks/AuthProvider";

const HomeScreen = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      Alert.alert("User signed out in successfully!");
      return;
    } catch (error) {
      Alert.alert(error.message);
      return;
    }
  };
  return (
    <SafeAreaView className="h-screen">
      <ScrollView>
        <Text>Hello</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          className="w-1/2 bg-blue-500 rounded-xl h-12 justify-center items-center mx-auto max-w-xs mt-4"
        >
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
