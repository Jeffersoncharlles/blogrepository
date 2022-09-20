import { HomeContainer, ArticleContainer, SectionContainer } from './styles'

import { Card } from "../../components/Card";
import { Profile } from '../../components/Profile';


export const Home = () => {

    return (
        <HomeContainer>
            <div>
                <Profile />
            </div>

            <SectionContainer>
                <div>
                    <div>
                        <strong>Publicações</strong>
                        <span>6 publicações</span>
                    </div>
                    <input type='search' placeholder='Buscar conteúdo' />
                </div>

                <ArticleContainer>
                    <Card />
                    <Card />
                </ArticleContainer>
            </SectionContainer>

        </HomeContainer>
    );
}
