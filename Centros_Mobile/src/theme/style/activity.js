export default (theme) => ({
  fond: {
    width: '130%',
    height: '130%',
    position: 'relative',
    top: '-20%',

    left: '-10%',
    zIndex: -1,
    backgroundColor: 'transparent',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  container2: {
    backgroundColor: 'transparent',
    padding: 5,
    width: '100%',
    height: 'auto',
    top: '0%',
    zIndex: 1,
    left: '0%',
    position: 'absolute',
  },
  conatinerColumn: {
    //dividir en 2 columnas
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 5,
    width: '100%',
    height: '17%',
    top: '0%',
    zIndex: 1,
    left: '0%',
    position: 'absolute',

  },
  text: {
    fontSize: 20,
    //que se muestre en el centro
    textAlign: 'center',
  },





});