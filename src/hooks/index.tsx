import {NavigationProvider} from './navigation'

const AppProvider:  React.FC = ({children}) => (
  <NavigationProvider>
    {children}
  </NavigationProvider>
)

export default AppProvider;