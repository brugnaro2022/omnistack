import React, { useState, useEffect } from 'react'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import logo from '../../assets/logo-example.png'
import api from '../../services/api'
import styles from './styles'

export default () => {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  const navigateToDetail = incident => {
    navigation.navigate('detail', { incident })
  }

  const loadIncidents = async () => {
    if (loading) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    const response = await api.get('incidents', { params: { page } })

    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgLogo} source={logo} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>Escolha um dos casos e salve o dia</Text>
      <FlatList
        style={styles.incidentList}
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        keyExtractor={incident => String(incident.id)}
        // showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
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
