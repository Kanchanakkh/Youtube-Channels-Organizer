import React, {useState} from 'react'
// import './styles.css'
import axios from 'axios'

const Home = () => {
//search item 
    const [search, setSearch] = useState('')
    //searched data -> []
    const [data, setData] = useState([])
    const [text, setText] = useState('')

    const handleStubmit = (e) =>{
        e.preventDefault()
        searchData(text)
    }
//function -> retrieve data from the API
const searchData = (text) =>{
    // alert(text)
    setSearch(text)
    axios.get('https://www.googleapis.com/youtube/v3/search',{

        params:{
           q:search,
           maxResults:15,
           key:'API_KEY'

        }
    }).then(videos=> {
        // console.log(videos)
        setData(videos.data.items)
        alert('search is sucessfull')
    })
    .catch(err=> console.log(err))
    

}

    return (
        <>
            <div className="container">
                <div className="row align-items-center" style={{minHeight: 'calc(100vh - 66px)'}}>
                    <div class="row align-items-center" style={{textAlign: 'center'}}>
                        <span>Search Your Favorite YouTube Channel</span>
                        <form className="col-lg-6 mx-auto" onSubmit={(e) => handleStubmit(e)}>
                            <div class="form-group d-flex">
                                <input type="text" value={text} onChange={(e) => setText(e.target.value)}name ='search' id='search' class="form-control col-md-10" placeholder="Channel Search..." />
                                <span>
                                    <input type='submit' value='search' className='btn btn-primary'/>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
