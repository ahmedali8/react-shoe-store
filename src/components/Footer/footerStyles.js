import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        marginTop: '30px',
        textAlign: 'center',
    },
    footer: {
        padding: theme.spacing(3, 2),
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    link: {
        color: '#000',
        width: '25px',
        margin: '0 12px',

    },
    linkContainer: {
        margin: '5px auto',
    }
}));

export default useStyles;