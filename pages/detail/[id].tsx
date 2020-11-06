import React from 'react'
import Detail from '../../components/detail/Detail'

const DetailPage = ({ show }) => {
    return (
        <Detail show={show} />
    )
}

DetailPage.getInitialProps = async ({ query }) => {
    const show = await fetch('http://api.tvmaze.com/shows/' + query.id).then(res => res.json());
    return { show }
}

export default DetailPage;









