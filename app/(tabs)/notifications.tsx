import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { useHeaderHeight } from "@react-navigation/elements"
import axios from 'axios'
import { NotificationType } from '@/types/type'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'

type Props = {}

const NotificationsScreen = (props: Props) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([])

  useEffect(() => {
    getNotifications()
  }, [])

  const getNotifications = async () => {
    try {
      const URL = `http://192.168.18.23:8000/notifications`
      const response = await axios.get(URL)
      setNotifications(response.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    }
  }

  const headerHeight = useHeaderHeight()

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {notifications.map((item,index) => (
            <Animated.View entering={FadeInDown.delay(300+index*100).duration(500)} key={item.id} style={styles.notificationWrapper}>
              <View style={styles.notificaitonsIcons}>
                <Ionicons name="notifications-outline" size={20} color={Colors.black} />
              </View>
              <View style={styles.notificationsInfo}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  <Text style={styles.notificationMessage}>{item.timestamp}</Text>
                </View>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
            </Animated.View>
          ))}
        </ScrollView>
      </View>
    </>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingBottom: 20, // Add padding at the bottom for scroll view content
  },
  notificationsInfo: {
    flex: 1
  },
  notificationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.extraLight,
    borderRadius: 5
  },
  notificaitonsIcons: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black
  },
  notificationMessage: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
    lineHeight: 20
  },
})
