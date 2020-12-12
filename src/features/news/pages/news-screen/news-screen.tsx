import React from 'react'

import { NewsScreenNavigationProp } from '@navigation/.'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { Card } from '@ui/molecules/card/card'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { triggerNews } from '@features/news/actions'

type Props = {
  navigation: NewsScreenNavigationProp
}

export const NewsScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()
  const { data, isFetching } = useSelector((state: RootState) => state.news)

  const onPress = React.useCallback((id: number) => {
    navigation.navigate('NewsDetails', { id })
  }, [])

  if (!data) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <FlatList
        data={data}
        // показываем нативный инидкатор загрузки
        refreshing={isFetching}
        // действие при pull-to-refresh
        onRefresh={() => dispatch(triggerNews())}
        // добавляем key для всех компонентов, как мы обычно делаем через map
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card
            onPress={() => onPress(item.id)}
            title={item.title}
            text={item.text}
            tag={item.tag}
            time={item.time}
            author={item.author}
          />
        )}
      />
    </View>
  )
}
