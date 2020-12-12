import React from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import {
  NewsDetailsScreenNavigationProp,
  NewsDetailsScreenRouteProp,
} from '@navigation/.'
import { RootState } from '@store/.'
import { NewsItem } from '@ui/molecules'

type Props = {
  navigation: NewsDetailsScreenNavigationProp
  route: NewsDetailsScreenRouteProp
}

export const NewsDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const data = useSelector((state: RootState) => state.news.data)
  const id = route.params.id
  const result = data?.find((item) => item.id === id)

  if (!result) {
    return <ActivityIndicator />
  }

  return (
    <ScrollView>
      <NewsItem
        title={result.title}
        time={result.time}
        author={result.author}
        text={result.text}
      />
    </ScrollView>
  )
}
