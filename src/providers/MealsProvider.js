import React from "react";

const MealsContext = React.createContext();

const todayMeals = [ "Baked Beans", "Baked Sweet Patatoes", "Baked Potatoes" ];

const MealsProvider = ({children}) => {

    const [meals, setMealsList] = React.useState(todayMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;