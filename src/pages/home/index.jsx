import { useContext } from "react"
import RecipeItem from "../../components/recipeItem"
import { GlobalContext } from "../../context"

export default function Home() {
    const {loading,recipeList} = useContext(GlobalContext)

    if(loading) {
        return <h1>Please wait Loading..</h1>
    }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList .length > 0 ? (
        recipeList.map((item,index)=><RecipeItem key={index} item={item} />)
      ): <div> <p className="lg:text-4xl text-xl text-center">
        Nothing to show. Please search something
        </p> </div> }
    </div>
  )
}
