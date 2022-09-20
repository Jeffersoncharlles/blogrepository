import { HomeContainer } from './styles'

import { Card } from "../../components/Card";
import { Profile } from '../../components/Profile';


export const Home = () => {

    return (
        <HomeContainer>
            <div>
                <Profile />
            </div>

        </HomeContainer>
    );
}
