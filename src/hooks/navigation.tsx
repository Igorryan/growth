import { createContext, useCallback, useContext, useState } from 'react';

interface NavigationState {
  background: string
}

interface NavigationContextData {
  changeBackground(data: NavigationState): void
  background: string
}

const NavigationContext = createContext<NavigationContextData>({} as NavigationContextData);

const NavigationProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<NavigationState>({} as NavigationState)

  const changeBackground = useCallback(({ background }: NavigationState) => {
    setData({ background })
  }, [])

  return (
    <NavigationContext.Provider value={{ changeBackground, background: data.background }}>
      {children}
    </NavigationContext.Provider>
  )
}

function useNavigation(): NavigationContextData {
  const context = useContext(NavigationContext)

  return context
}

export { NavigationProvider, useNavigation }