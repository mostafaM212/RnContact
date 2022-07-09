import {check, RESULTS} from 'react-native-permissions';
import {request, PERMISSIONS} from 'react-native-permissions';

const Rationale = {
  title: ' Access to contacts',
  message: 'RN app needs Access to your contacts',
  buttonPositive: 'ok',
  buttonNegative: 'negative',
  buttonNeutral: 'not now',
};

export const requestContactsPermissions = async () => {
    
    
   /* const result = await request(
        PERMISSIONS.ANDROID.READ_CONTACTS,
        {
            title: 'Microphone Permission',
            message:
                'The microphone permission is needed to record your voice for analysis',
        }
  )*/
    
  //console.log(result);
};
