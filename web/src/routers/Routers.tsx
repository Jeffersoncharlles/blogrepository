import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Post } from '../pages/Post'



export const Routers = () => {

    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/post/:slug' element={<Post />} />
            </Route>
        </Routes>
    )
}
