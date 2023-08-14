import { useLocation } from 'react-router-dom';

const SingleNoticeShow = () => {
    const location = useLocation();
    const data = location

    return (
        <div style={{ width: '90%', margin: '0px', padding: '0px' }}>
            <div
                style={{ margin: '10px', textAlign: 'center', fontSize: '25px' }}
                className="notice">
                <h2>{data.state.title}</h2>
            </div>
            <p
                style={{
                    width: '90%',
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'center',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    margin: '10px',
                    padding: '10px',
                    border: '1px solid rgb(233, 233, 233)',
                    borderRadius: '5px'

                }}
            >{data.state.noticeBody}</p>
        </div>
    )
}

export default SingleNoticeShow