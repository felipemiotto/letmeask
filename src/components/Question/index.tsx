import { ReactNode } from 'react';
import classnames from 'classnames'
import './styles.scss'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

// No parametro de Question acontece uma desestruturação.
// Pega-se do QuestionProps recebido apenas as propriedades
// necessárias, neste caso, content e author.
export function Question({
    content, 
    author,
    isAnswered =  false,
    isHighlighted = false,
    children,
}: QuestionProps) {
    return (
        <div 
            className={classnames(
                'question',
                {answered: isAnswered},
                {highlighted: isHighlighted && !isAnswered},
            )}
        >
            <p>{content}</p>
            
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>

                <div>
                    {children}
                </div>
            </footer>
        </div>
    );
}