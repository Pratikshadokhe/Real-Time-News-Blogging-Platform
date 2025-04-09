import React from 'react'
// import { Authcontext } from '../../context/AuthProvider'

const CreateBlog = () => {
//    const context = useContext
//    (Authcontext)
//    const {mode} = context;

//    const [blogs, setBlogs] = useState({
//     title: '',
//     date: '',
//     category: '',
//     content: '',
//     time: Timestamp.now(),
//    })

//    const [thumbnail, setthimbnail] = useState('')
//    const [text, settext] = useState('')

//    const addPost = async() => {
//     if(blogs.title === '' || blogs.date === '' || blogs.category === '' || blogs.content === '') {
//         alert('Please fill all fields')
//         return
//     }
//     uploadImage();
//    }

//    const uploadImage = async() => {


    return (
        <div style=" padding: '20px', backgroundColor: '#1C1C1E', marginTop: '20px', borderRadius: '10px' ">
            <form 
                style=" display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' "
            >
                <div style=" width: '48%' ">
                    <div>
                        <h3 style=" fontSize: '14px', marginBottom: '10px', color: '#ccc' ">Task Title</h3>
                        <input 
                            value="blogtitle"
                            style=" fontSize: '14px', padding: '5px', width: '90%', borderRadius: '5px', border: '1px solid #666', marginBottom: '10px', color: '#ccc', backgroundColor: 'transparent' "
                            type="text" 
                            placeholder='Make a UI design'
                        />
                    </div>

                    <div>
                        <h3 style=" fontSize: '14px', marginBottom: '5px', color: '#ccc' ">Date</h3>
                        <input 
                            value="date" 
                            style=" fontSize: '14px', padding: '5px', width: '90%', borderRadius: '5px', border: '1px solid #666', marginBottom: '10px', color: '#ccc', backgroundColor: 'transparent' "
                            type="date" 
                        />
                    </div>
                    

                    <div>
                        <h3 style=" fontSize: '14px', marginBottom: '5px', color: '#ccc' ">Category</h3>
                        <input 
                            value="category"
                            style=" fontSize: '14px', padding: '5px', width: '90%', borderRadius: '5px', border: '1px solid #666', marginBottom: '10px', color: '#ccc', backgroundColor: 'transparent' "
                            type="text" 
                            placeholder='Design, Dev, etc'
                        />
                    </div>
                </div>
                <div style=" width: '48%', display: 'flex', flexDirection: 'column' ">
                    <h3 style=" fontSize: '14px', marginBottom: '5px', color: '#ccc' ">Description</h3>
                    <textarea 
                        value="description"
                        style=" fontSize: '14px', padding: '5px', width: '90%', borderRadius: '5px', border: '1px solid #666', marginBottom: '10px', color: '#ccc', backgroundColor: 'transparent' "
                        cols="30" 
                        rows="10"
                    ></textarea>
                    <button 
                        style=" backgroundColor: '#10B981', padding: '10px 20px', borderRadius: '5px', fontSize: '14px', marginTop: '10px', width: '90%', color: '#fff', border: 'none', cursor: 'pointer' "
                        type='button' value="submit"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateBlog
