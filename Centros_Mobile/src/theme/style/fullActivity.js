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
        //adeacuar a la pantalla en columnas
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: 5,
        width: '100%',
        height: 'auto', 
    },
   
});