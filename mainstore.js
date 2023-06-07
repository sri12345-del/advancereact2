import { configureStore } from "@reduxjs/toolkit"
import authreducer from "./Authstore"
import expensereducer from "./Expenststore"

const store = configureStore({
    reducer:{auth:authreducer,expense:expensereducer}
})

export default store