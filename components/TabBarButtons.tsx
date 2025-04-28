import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { icon } from '@/constants/icons';
import { Colors } from '@/constants/Colors';

type Props = {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabBarButtons = (props: Props) => {
  const { onPress, onLongPress, isFocused, label, routeName } = props;

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.tabBarButtons}>
      {routeName == "cart" &&(
      <View style={styles.badgeWrapper}>
        <Text style={styles.badgeText}>3</Text>
      </View>
      )}
      {icon[routeName]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? Colors.primary : "#222" }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBarButtons;

const styles = StyleSheet.create({
  tabBarButtons: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeWrapper:{
    position: "absolute",
    backgroundColor:Colors.highlight,
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex:10
  },
  badgeText:{
    color:Colors.black,
    fontSize:12
  }
});
