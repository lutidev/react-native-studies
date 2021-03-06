import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SeriesSearch () {
  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: '#1D1D27', flex: 1 }}>
      <Button
        title='Séries'
        onPress={() => navigation.navigate('Series')}
      />
    </View>
  )
}
