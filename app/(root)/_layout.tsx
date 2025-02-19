import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicatorComponent,
} from "react-native";
import React from "react";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  const { isLoggedIn, loading } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicatorComponent
          className="text-primary-300 "
          size={"large"}
        />
      </SafeAreaView>
    );
  }
  if (!isLoggedIn) {
    return <Redirect href={"/sign-in"} />;
  }
  return <Slot />;
}
