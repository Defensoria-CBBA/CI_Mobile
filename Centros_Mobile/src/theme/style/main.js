export default (theme) => ({
    //choque de 2 colores de fondo a 45 grados
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },


    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
});