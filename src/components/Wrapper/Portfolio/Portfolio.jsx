import React from 'react';
import './portfolio.scss';
import InlineList from "../../common/InLineList/InlineList";

const Portfolio = (props) => {
    return (
        <div className={'PortfolioBox'}>
            {props.portfolioPageData.portfolio.map(items => {
                return (
                    <InlineList
                        key={items.portfolioAlt}
                        itemImage={items.porfolioImg}
                        itemImageAlt={items.portfolioAlt}
                        itemLink={items.porfolioLink}
                        itemLinkName={items.portfolioAlt}
                    />
                )
            })}
        </div>
    )
}

export default Portfolio;