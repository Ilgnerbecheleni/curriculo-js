/* eslint-disable react/prop-types */
import { Document , Page ,Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      justifyContent:'start'
    },
    nameview:{
       alignItems:'center' ,
       margin: 10,
    },
    name:{
        fontSize:36
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    sectionitem:{
        margin:6
    },
    dados: {
        margin: 4,
        padding: 10,
        flexGrow: 1,
        justifyContent:'flex-start',
        paddingLeft:80
        
      },
    heading: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5
    },
    content: {
      fontSize: 12,
      marginBottom: 5
    }
  });
  
  // Create Document Component
  function MyDocument ({ dados,habilidades, formacoes , experiencias })  {
    console.log(dados)
    console.log(experiencias)
    console.log(formacoes)
  return(
    <Document>
    <Page size="A4" style={styles.page}>
      <View>
    
          <View style={styles.nameview}>
          <Text style={styles.name}>{dados.nome}</Text>
          </View>
          <View style={styles.dados}>
        <Text style={styles.content}>Data de Nascimento: {dados.dataNascimento}</Text>
        <Text style={styles.content}>Idade: {dados.idade}</Text>
        <Text style={styles.content}>E-mail: {dados.email}</Text>
        <Text style={styles.content}>Estado Civil: {dados.estadoCivil}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experiências</Text>
        {experiencias.map((experiencia, index) => (
          <View key={index} style={styles.sectionitem}>
            <Text style={styles.content}>{experiencia.local} - {experiencia.cargo}</Text>
            <Text style={styles.content}>{experiencia.descricao}</Text>
            <Text style={styles.content}>{experiencia.inicio} - {experiencia.fim}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Formações</Text>
        {formacoes.map((formacao, index) => (
          <View key={index} style={styles.sectionitem}>
            <Text style={styles.content}>{formacao.curso}</Text>
            <Text style={styles.content}>{formacao.instituicao}</Text>
            <Text style={styles.content}>{formacao.inicio} - {formacao.fim}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Habilidades</Text>
        {habilidades.map((habilidade, index) => (
          <Text key={index} style={styles.content}>- {habilidade}</Text>
        ))}
      </View>
      </View>
     
    </Page>
  </Document>
  )
   
  }
  
  export default MyDocument;