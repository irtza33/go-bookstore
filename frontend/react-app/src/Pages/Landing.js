import React, { useState, useRef } from 'react';
import axios from "axios";
import './Popup.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBInput,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Landing() {

    const newBookObj = {
        Name:"",
        Author:"",
        Publication:""
    }

    const [bookData,setbookData]=useState([])
    const [addPermission,setAddPermission]=useState(false)
    const [showPermission,setShowPermission]=useState(false)
    const [DelPermission,setDelPermission]=useState(false)

    const [found,setFound]=useState(false)

    const [newBook, setNewBook] = useState(newBookObj)
    const [popup, setPopup] = useState(false)
    const [Dpopup, setDPopup] = useState(false)
    const nameRef = useRef(null);
    const authorRef = useRef(null);
    const pubRef = useRef(null);
    const iDRef = useRef(null);






    const GetBooks = () => {
        setDPopup(false)
        setFound(false)
        setPopup(false)
        setShowPermission(false)
        setDelPermission(false)
        setAddPermission(false)
            axios.get("http://localhost:9010/book/").then((response) => {
                setbookData(response.data)
            }).catch((err) => {console.log(err)})
        }

    const RenderAddBook = () => {
        setDPopup(false)
        setFound(false)
        setDelPermission(false)
        setShowPermission(false)
        setPopup(false)
        setbookData([])
        setAddPermission(true)
    }

    const AddBook = () => {
        axios.post("http://localhost:9010/book/",{ 
            Name: newBookObj.Name,
            Author: newBookObj.Author,
            Publication: newBookObj.Publication
        }).then((response) => {
            console.log(response)
        }).catch((err) => {console.log(err)})
        setPopup(true)
    }

    const RemovePop = () => {
        setDPopup(false)
        setFound(false)
        setDelPermission(false)
        setShowPermission(false)
        setPopup(false)
        setbookData([])
        setAddPermission(false)
        nameRef.current.value = ""
        authorRef.current.value = ""
        pubRef.current.value = ""
    }

    const RemovePop1 = () => {
        setDPopup(false)
        setFound(false)
        setDelPermission(false)
        setShowPermission(false)
        setPopup(false)
        setbookData([])
        setAddPermission(false)
    }

    const RenderShowBook = () => {
        setDPopup(false)
        setFound(false)
        setDelPermission(false)
        setbookData([])
        setShowPermission(true)
        setPopup(false)
        setAddPermission(false)
    }

    const RenderDeleteBook = () => {
        setDPopup(false)
        setFound(false)
        setDelPermission(true)
        setbookData([])
        setShowPermission(false)
        setPopup(false)
        setAddPermission(false)
    }

    const SearchById = () => {
        axios.get("http://localhost:9010/book/"+iDRef.current.value).then((response) => {
            newBookObj.Name = response.data.Name
            newBookObj.Author = response.data.Author
            newBookObj.Publication = response.data.Publication
            setNewBook(newBookObj)
            if (response.data.Name != "") {
                setFound(true)
            } else {
                setFound(false)
            }
            
            iDRef.current.value = ""
        }).catch((err)=> {
            console.log(err)
            iDRef.current.value = ""
        })
    }

    const DeleteById = () => {
        axios.delete("http://localhost:9010/book/" + iDRef.current.value).then((res) => {
            setDPopup(true)
            console.log(res.data)
            iDRef.current.value = ""
        }).catch((err)=> {
            console.log(err)
        })
    }

  return (
    <div>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Book Store</MDBNavbarBrand>


        <MDBCollapse navbar show={true}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' onClick={GetBooks}>
                Show All Books
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' onClick={RenderAddBook}>
                Add Book
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' onClick={RenderShowBook}>
                Show Book By Id
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' onClick={RenderDeleteBook}>
                Delete Book
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>


    <div>
            
            {bookData.map((item) => {
            return (
                <div key={item.Id}>
                <ul><li>{item.Name} | {item.Author} | {item.Publication}</li></ul>
                </div>
            )
        }
        )}
    </div>

    

    {addPermission && (<div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div className='p-5 text-center'>
        <h1 className='mb-4'>Book Details</h1>
      </div>
      <MDBInput wrapperClass='mb-4' label='Book Name' id='form1' type='text' ref={nameRef} onChange={(e)=>{newBookObj.Name = e.target.value}}/>
      <MDBInput wrapperClass='mb-4' label='Book Author' id='form1' type='text' ref={authorRef} onChange={(e)=>{newBookObj.Author = e.target.value}}/>
      <MDBInput wrapperClass='mb-4' label='Book Publication' id='form1' type='text' ref={pubRef} onChange={(e)=>{newBookObj.Publication = e.target.value}}/>

      <MDBBtn className="mb-4" onClick={AddBook}>Add Book</MDBBtn>
    </MDBContainer>
    </div>)
        }
    {popup && (<div className='row d-flex justify-content-center'>
        <div className='child'>
            <div className='row d-flex justify-content-center'>
                <div className='popup'>
                    Your Book Has Been Added!
                    <MDBRow>
                    <button onClick={RemovePop}>
                        Close
                    </button>
                    </MDBRow>
                    
                </div>
                
                
            </div>
        </div>
    </div>)}

    

    {showPermission && (
        <div>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <div className='p-5 text-center'>
                <h1 className='mb-4'>Book Search</h1>
            </div>
            <MDBInput wrapperClass='mb-4' label='Book Id' id='form1' type='text' ref={iDRef}/>
            <MDBBtn className="mb-4" onClick={SearchById}>Find This</MDBBtn>
            </MDBContainer>
        </div>
    )}

    {found && (
        <MDBContainer>
            <MDBRow className="row d-flex justify-content-center">
                <MDBCol md='6'>
                    <div key={newBook.Name} className=''>
                    <ul><li>{newBook.Name} | {newBook.Author} | {newBook.Publication}</li></ul>
                    </div>
                    </MDBCol>
            </MDBRow>
            </MDBContainer>
        
                
          
    )}

{DelPermission && (
        <div>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <div className='p-5 text-center'>
                <h1 className='mb-4'>Delete Book</h1>
            </div>
            <MDBInput wrapperClass='mb-4' label='Book Id' id='form1' type='text' ref={iDRef}/>
            <MDBBtn className="mb-4" onClick={DeleteById}>Find This</MDBBtn>
            </MDBContainer>
        </div>
    )}

{Dpopup && (<div className='row d-flex justify-content-center'>
        <div className='child'>
            <div className='row d-flex justify-content-center'>
                <div className='popup'>
                    Your Book Has Been Deleted!
                    <MDBRow>
                    <button onClick={RemovePop1}>
                        Close
                    </button>
                    </MDBRow>
                    
                </div>
                
                
            </div>
        </div>
    </div>)}
            
    </div>
    
  );
}