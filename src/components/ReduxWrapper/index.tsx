import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../../redux';

interface Props {
  rootTag?: number;
  initialProps?: {
    componentId: String;
  };
}

function ReduxWrapper(Component: React.ComponentType<any>) {
  return function inject(props: Props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

export default ReduxWrapper;
