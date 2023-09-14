
import Alert from 'react-bootstrap/Alert';


function DismissibleAlert({alertData}) {


    return (
    alertData && <Alert variant={`${alertData?.variant}`} dismissible>
        <Alert.Heading>{alertData?.message}</Alert.Heading>
      </Alert>
    );
}

export default DismissibleAlert;