import { PokeState } from "context/PokeState"
import { RoutesApp } from './RoutesApp'

export const App = () => {
  return (
    <PokeState>
      <RoutesApp />
    </PokeState>
  )
}
