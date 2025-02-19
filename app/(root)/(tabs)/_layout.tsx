import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";
function TapIcon({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) {
  return (
    <View className="flex-1 mt-3 flex-col items-center ">
      <Image source={icon} />
      <Text
        className={` ${
          focused
            ? "text-primary-300 font-rubik-medium"
            : "text-black-200 font-rubik "
        } text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
}
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061ff1a",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <TapIcon focused={true} icon={icons.home} title={"Home"} />;
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TapIcon focused={true} icon={icons.search} title={"Explore"} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <TapIcon focused={true} icon={icons.person} title={"Profile"} />
            );
          },
        }}
      />
    </Tabs>
  );
}
