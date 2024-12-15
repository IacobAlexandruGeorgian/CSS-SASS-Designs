import {View, Text, StyleSheet} from 'react-native';

function Subtitle({children}) {
    return (
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 6,
        textAlign: 'center',
      },
      subtitleContainer: {
        padding: 6,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
      },
});