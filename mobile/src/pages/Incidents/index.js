import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import logo from '../../assets/logo-example.png'
import styles from './styles'

export default () => {
  const navigation = useNavigation()

  const navigateToDetail = () => {
    navigation.navigate('detail')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgLogo} source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>Escolha um dos casos e salve o dia</Text>
      <FlatList
        style={styles.incidentList}
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Caso Test</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#e02041' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
