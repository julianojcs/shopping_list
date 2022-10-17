import {SafeAreaView} from 'react-native';
import FlatListPage from './src/Components/FlatListPage';
import Toast from "react-native-toast-message";

const App = () => {
  return (
    <>
      <SafeAreaView>
        <FlatListPage />
      </SafeAreaView>
      <Toast />
    </>
  );
};

export default App;
