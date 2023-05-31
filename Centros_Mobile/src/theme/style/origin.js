export default (theme) => ({
    scroll: {
        backgroundColor: 'transparent',
        padding: 5,
        height: '100%',
    },
    container: {
        backgroundColor: 'rgb(230,198,241)',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 10,
    },
    text: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: '20%',

    },
    conatinerText: {
        backgroundColor: 'rgb(200,190,1)',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 5,
        opacity: 0.7,
        marginTop: '-7%',

    },
    
});