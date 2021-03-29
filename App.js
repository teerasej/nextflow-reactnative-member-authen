import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { View, Text, StyleSheet } from 'react-native';
import {useEffectAsync} from 'useeffectasync'

// import Font มาจาก package expo-font
import * as Font from 'expo-font';
// import Icon มาใช้งาน (ถ้าต้องการ)
import { Ionicons } from '@expo/vector-icons';
import Loading from './pages/Loading';

// แปลง Function component 
// เป็น Class component 
export default function App() {

  const [isReady, setIsReady] = useState(false)

  // ทำงานหลังจาก App component ถูกสร้างขึ้นแสดงบนหน้าแอพแล้ว
  useEffectAsync( async () => {
    // สั่งให้ Load font เพื่อใช้งานใน UI Component ที่สร้างด้วย Native base
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })

    // ตั้งค่า State ใหม่ เพื่อให้ App component ทำการ render ตัวเองอีกครั้ง
    setIsReady(true)
  }, [])


    // แสดงตัว Loading ถ้า state ไม่พร้อม 
    // เพื่อป้องกันการ error เวลาที่ load font ให้กับ Native base UI ไม่เสร็จ
    if (!isReady) {
      return <AppLoading/>;
    }

    // แสดง User Interface ที่แท้จริงของแอพ
    return (
      <Loading/>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
