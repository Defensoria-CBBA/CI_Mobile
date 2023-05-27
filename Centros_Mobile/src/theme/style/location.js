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

        flex: 1,
        flexDirection: 'row',

        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        padding: 5,
        width: 'auto',
        height: 'auto',
        top: '0%',
        zIndex: 1,
        left: '0%',

        justifyContent: 'center',
    },
    scroll: {
        backgroundColor: 'transparent',
        padding: 5,
        height: '100%',
    },


});