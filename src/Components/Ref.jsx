import React,{useRef,useEffect,useState} from 'react'

function Ref() {
    const data = useRef(null);
    const submitHandler = e => {
        e.preventDefault()
        console.log(data.current.value);
        // name(data.current.value)
        setName(data.current.value)
        
    }
    useEffect(() =>{
      data.current.focus()
    },[])
    const [name,setName] = useState()
  return (
    <div>
        <h2>1.What is UseRef Hook ?(Implementation)</h2>
        <p>useState will re-render when the content change and update in UI.</p>
        <p>UseRef doesnot notify you when its content changes.Mutating the(current) property doesn't cause a re-render.</p>
        <h3>Example:-</h3>
        <form onSubmit={submitHandler}>
        <h1>
       
        <input ref={data} type='text' placeholder='Enter your Name' required/><br/>
            <input type='submit' className="btn btn-success"/><br/>
             Name: {name}
        </h1>
           
        </form>

    </div>
  )
}

export default Ref