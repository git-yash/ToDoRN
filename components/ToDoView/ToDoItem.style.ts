import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#465881',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fb5b5a',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#fb5b5a',
    fontSize: 16,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#a9a9a9',
  },
  deleteButton: {
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default styles;
