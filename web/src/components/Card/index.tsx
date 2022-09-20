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
                <time dateTime={data.closed_at}>
                    Há 1 dia

                </time>
            </div>
            <p>
                {data.body}
            </p>

        </CardContainer>
    );
}
