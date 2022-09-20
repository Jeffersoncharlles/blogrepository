import { Items } from '../../context/types';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import {
    CardContainer,
} from './styles';

interface IProps {
    data: {
        title: string
        url: string
        date: string
        content: string
        id: number
        slug: string
    }
}

export const Card = ({ data }: IProps) => {

    return (
        <CardContainer>
            <div>
                <h3>{data.title}</h3>
                <time dateTime={data.date}>
                    {data.date}

                </time>
            </div>
            <p>
                {data.content}
            </p>

        </CardContainer>
    );
}
