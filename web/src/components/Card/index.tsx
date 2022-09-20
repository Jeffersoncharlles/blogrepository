import { Items } from '../../context/types';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import {
    CardContainer,
} from './styles';

interface IProps {
    data: Items
}

export const Card = ({ data }: IProps) => {

    return (
        <CardContainer>
            <div>
                <h3>{data.title}</h3>
                <time>
                    Há 1 dia
                </time>
            </div>
            <p>
                Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
            </p>

        </CardContainer>
    );
}
