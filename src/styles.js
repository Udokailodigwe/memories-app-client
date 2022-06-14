import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'white',
        "@media (max-width: 450px)": {
            fontSize: '30px'
        }
    },
    image: {
        marginLeft: '15px',
        borderRadius: 15,

    },
}));