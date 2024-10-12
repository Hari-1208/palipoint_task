import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Utility function to normalize font sizes based on screen width
const scaleFont = (size: number) => (width / 375) * size;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  postContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: height * 0.02, // Padding as 2% of the screen height
    paddingHorizontal: width * 0.04, // Padding as 4% of the screen width
    marginVertical: height * 0.01, // Margin as 1% of the screen height
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: width * 0.05,
  },
  postText: {
    flex: 1,
    marginRight: width * 0.05, // Margin as 3% of the screen width
  },
  title: {
    fontSize: scaleFont(18), // Scaled font size
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    fontSize: scaleFont(14), // Scaled font size
    color: '#666',
    marginTop: height * 0.01, // Margin as 1% of the screen height
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trashIcon: {
    alignSelf: 'flex-end',
  },
});
