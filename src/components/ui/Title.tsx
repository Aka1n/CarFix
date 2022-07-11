import {FC, memo} from 'react';
import './Title.less';

const Title: FC<{text: string, direction: 'left' | 'right'}> = ({text, direction}) => {

    if (direction === 'left') {
        return (
            <div className="section-title">
                <span className="section-title__long"/>
                <h3 className="section-title__text">{text}</h3>
                <span className="section-title__short"/>
            </div>
        )
    } 
        return (
            <div className="section-title">
                <span className="section-title__short right"/>
                <h3 className="section-title__text">{text}</h3>
                <span className="section-title__long"/>
            </div>
        )
    
}

export default memo(Title)

