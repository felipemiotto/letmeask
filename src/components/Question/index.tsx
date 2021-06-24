import { ReactNode } from 'react';
import './styles.scss'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
}

// No parametro de Question acontece uma desestruturação.
// Pega-se do QuestionProps recebido apenas as propriedades
// necessárias, neste caso, content e author.
export function Question({
    content, 
    author,
    children
}: QuestionProps) {
    return (
        <div className="question">
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