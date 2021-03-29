
import { Spinner } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Loading() {
    return (
        <View style={styles.container}>
            <Spinner/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
