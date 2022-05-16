import { useContext } from "react"
import { CatContext } from "../context/CatContext"

export const useCatProvider = () => {

  const context = useContext(CatContext);

  return context;
}