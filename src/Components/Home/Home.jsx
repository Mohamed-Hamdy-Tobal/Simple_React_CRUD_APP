import Content from "./Content/Content"
import Sidbar from "./Sidbar/Sidbar"

const Home = () => {
    return (
        <main className=''>
            <div className="row" style={{maxWidth:"100%",margin: '0'}}>
                <div className='col-3 sidebars' style={{padding: '0'}}>
                    <Sidbar/>
                </div>
                <div className='col-9 contents'>
                    <Content/>
                </div>
            </div>
        </main>
    )
}

export default Home

